import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Next Impact <contact@next-impact.digital>", // domaine vérifié
      to: ["agathe@next-impact.digital"], // destination réelle
      subject: `Nouveau message de ${name}`,
      reply_to: email,
      html: `
        <h3>Message reçu via le site</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
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
