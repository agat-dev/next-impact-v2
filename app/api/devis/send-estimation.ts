import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    contact,
    estimation,
    structure,
    objectifs,
    autonomie,
    contenu,
    pages,
    calendlyLink,
  } = req.body;

  const userEmail = contact?.email;
  const adminEmail = 'agathe@next-impact.digital';

  const list = (items) => (Array.isArray(items) ? items.join(', ') : 'Non précisé');

  const clientHtml = `
    <h2>Merci pour votre demande ✨</h2>
    <p>Voici un récapitulatif de votre projet :</p>
    <ul>
      <li><strong>Structure :</strong> ${structure}</li>
      <li><strong>Objectifs :</strong> ${list(objectifs)}</li>
      <li><strong>Souhait d’autonomie :</strong> ${autonomie}</li>
      <li><strong>Contenu existant :</strong> ${contenu}</li>
      <li><strong>Pages souhaitées :</strong> ${list(pages)}</li>
      <li><strong>Estimation :</strong> à partir de <strong>${estimation} € TTC</strong></li>
    </ul>
    <p>🗓️ Vous pouvez directement planifier un appel avec nous ici :<br/>
    <a href="${calendlyLink}" target="_blank">${calendlyLink}</a></p>
    <p>À très vite,<br/><strong>L’équipe Next Impact Digital</strong></p>
  `;

  const adminHtml = `
    <h2>Nouvelle estimation reçue</h2>
    <p><strong>Email du client :</strong> ${userEmail}</p>
    <ul>
      <li><strong>Structure :</strong> ${structure}</li>
      <li><strong>Objectifs :</strong> ${list(objectifs)}</li>
      <li><strong>Autonomie :</strong> ${autonomie}</li>
      <li><strong>Contenu :</strong> ${contenu}</li>
      <li><strong>Pages :</strong> ${list(pages)}</li>
      <li><strong>Téléphone :</strong> ${contact?.phone || 'Non renseigné'}</li>
      <li><strong>Estimation :</strong> ${estimation} € TTC</li>
    </ul>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: adminEmail || 'onboarding@resend.dev',
        to: userEmail,
        subject: 'Votre estimation personnalisée – Next Impact Digital',
        html: clientHtml,
      }),
      resend.emails.send({
        from: adminEmail || 'onboarding@resend.dev',
        to: 'agathe@next-impact.digital',
        subject: `Nouvelle estimation reçue de ${userEmail}`,
        html: adminHtml,
      }),
    ]);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur envoi estimation Resend:', error);
    res.status(500).json({ error: 'Erreur lors de l’envoi des e-mails.' });
  }
}
