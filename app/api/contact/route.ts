import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function jsonToHtmlTable(obj: Record<string, any>) {
  return `
    <table border="1" cellpadding="6" style="border-collapse:collapse;">
      <tbody>
        ${Object.entries(obj)
          .map(
            ([key, value]) =>
              `<tr><td><strong>${key}</strong></td><td>${typeof value === "object" ? JSON.stringify(value, null, 2) : value}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;
}

export async function POST(req: Request) {
  const { name, email, message, documentData } = await req.json();

  try {
    // Générer un "faux PDF" (ici un .txt, à remplacer par un vrai PDF si besoin)
    const fileContent =
      "Informations du formulaire :\n" +
      `Nom: ${name}\nEmail: ${email}\nMessage: ${message}\n\n` +
      "Données du document:\n" +
      JSON.stringify(documentData, null, 2);

    // Encodage en base64
    const fileBuffer = Buffer.from(fileContent, "utf-8");
    const fileBase64 = fileBuffer.toString("base64");

    const { data, error } = await resend.emails.send({
      from: "Next Impact <contact@next-impact.digital>",
      to: ["agathe@next-impact.digital"],
      subject: `Nouveau message de ${name}`,
      reply_to: email,
      html: `
        <h3>Message reçu via le site</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
        <h4>Données du document (aperçu) :</h4>
        ${jsonToHtmlTable(documentData || {})}
        <p>Le document complet est en pièce jointe.</p>
      `,
      attachments: [
        {
          filename: "cahier-des-charges.txt", // Remplace par .pdf si tu génères un PDF
          content: fileBase64,
        },
      ],
    });

    if (error) {
      console.error(error);
      return new Response("Erreur Resend", { status: 500 });
    }

    return new Response("Message envoyé", { status: 200 });
  } catch (err) {
    return new Response("Erreur serveur", { status: 500 });
  }
}
