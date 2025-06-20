import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, pdfBase64, pdfName } = await req.json();

  // Prépare l'email pour l'admin
  const emailData: any = {
    from: "Next Impact <agathe@next-impact.digital>",
    to: ["agathe@next-impact.digital"],
    subject: `Nouveau message de ${name}`,
    replyTo: email,
    html: `
      <h3>Message reçu via le site</h3>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br>${message}</p>
      ${
        pdfBase64 && pdfName
          ? `<p>Le cahier des charges PDF est en pièce jointe : <strong>${pdfName}</strong></p>`
          : pdfBase64
          ? "<p>Le cahier des charges PDF est en pièce jointe.</p>"
          : ""
      }
    `,
  };

  // Ajoute la pièce jointe seulement si elle existe et est non vide
  if (pdfBase64 && typeof pdfBase64 === "string" && pdfBase64.length > 20) {
    emailData.attachments = [
      {
        filename: pdfName || "cahier-des-charges.pdf",
        content: pdfBase64,
      },
    ];
  }

  // Prépare l'email de confirmation pour l'utilisateur
  const confirmationEmail = {
    from: "Next Impact <agathe@next-impact.digital>",
    to: [email],
    subject: "Confirmation de réception de votre message – Next Impact Digital",
    html: `
      <h3>Bonjour ${name},</h3>
      <p>Nous avons bien reçu votre message :</p>
      <blockquote style="border-left:2px solid #ccc;padding-left:10px;">
        ${message}
      </blockquote>
      ${
        pdfBase64 && pdfName
          ? `<p>Votre fichier joint : <strong>${pdfName}</strong> a bien été transmis.</p>`
          : pdfBase64
          ? "<p>Votre fichier joint a bien été transmis.</p>"
          : ""
      }
      <p>Notre équipe vous répondra dans les plus brefs délais.</p>
      <p>Merci de votre confiance,<br>L'équipe Next Impact Digital</p>
    `,
  };

  try {
    // Envoi en parallèle
    const [adminRes, userRes] = await Promise.all([
      resend.emails.send(emailData),
      resend.emails.send(confirmationEmail),
    ]);

    if (adminRes.error || userRes.error) {
      console.error("Resend error:", adminRes.error || userRes.error);
      return new Response("Erreur Resend: " + JSON.stringify(adminRes.error || userRes.error), { status: 500 });
    }

    return new Response("Message envoyé", { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return new Response("Erreur serveur: " + String(err), { status: 500 });
  }
}
