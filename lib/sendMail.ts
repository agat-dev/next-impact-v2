import nodemailer from "nodemailer";

export async function sendMail({ to, subject, html, attachments }: { to: string | string[], subject: string, html: string, attachments?: any[] }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: 'Next Impact <agathe@next-impact.digital>',
    to,
    subject,
    html,
    attachments,
  };

  return transporter.sendMail(mailOptions);
}
