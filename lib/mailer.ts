import nodemailer from "nodemailer"; 

export function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: Number(process.env.NODEMAILER_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
}

export async function sendMail(options: Parameters<typeof nodemailer.createTransport>[0] & { to: string | string[], subject: string, html: string, attachments?: any[] }) {
  const transporter = getTransporter();
  return transporter.sendMail(options);
}
