import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, pdfBase64 } = await req.json();

    const emailData: any = {
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.ADMIN_EMAIL || "agathe@next-impact.digital"],
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

    if (pdfBase64 && typeof pdfBase64 === "string" && pdfBase64.length > 20) {
      emailData.attachments = [
        {
          filename: "cahier-des-charges.pdf",
          content: pdfBase64,
        },
      ];
    }

    await resend.emails.send(emailData);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur envoi contact Resend:", error);
    return new Response(JSON.stringify({ error: "Erreur lors de l’envoi de l’e-mail." }), { status: 500 });
  }
}
