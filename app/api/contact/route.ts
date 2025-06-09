import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, pdfBase64 } = await req.json();

  try {
    const { error } = await resend.emails.send({
      from: "Next Impact <contact@next-impact.digital>",
      to: ["agathe@next-impact.digital"],
      subject: `Nouveau message de ${name}`,
      reply_to: email,
      html: `
        <h3>Message reçu via le site</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
        <p>Le cahier des charges PDF est en pièce jointe.</p>
      `,
      attachments: [
        {
          filename: "cahier-des-charges.pdf",
          content: pdfBase64,
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
