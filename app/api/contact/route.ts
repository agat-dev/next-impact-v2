import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, pdfBase64 } = await req.json();

  // Prépare l'objet email
  const emailData: any = {
    from: "Next Impact <contact@next-impact.digital>",
    to: ["agathe@next-impact.digital"],
    subject: `Nouveau message de ${name}`,
    replyTo: email,
    html: `
      <h3>Message reçu via le site</h3>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br>${message}</p>
      ${pdfBase64 ? "<p>Le cahier des charges PDF est en pièce jointe.</p>" : ""}
    `,
  };

  // Ajoute la pièce jointe seulement si elle existe et est non vide
  if (pdfBase64 && typeof pdfBase64 === "string" && pdfBase64.length > 20) {
    emailData.attachments = [
      {
        filename: "cahier-des-charges.pdf",
        content: pdfBase64,
      },
    ];
  }

  try {
    const { error } = await resend.emails.send(emailData);

    if (error) {
      console.error("Resend error:", error);
      return new Response("Erreur Resend: " + JSON.stringify(error), { status: 500 });
    }

    return new Response("Message envoyé", { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return new Response("Erreur serveur: " + String(err), { status: 500 });
  }
}
