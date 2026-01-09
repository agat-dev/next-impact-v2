import { NextRequest, NextResponse } from "next/server";
// Envoi d'email désactivé temporairement
export async function POST(req: NextRequest) {
  // const { name, company, email, url, markdown } = await req.json();
  // Ici, on simule simplement un succès sans envoyer d'email
  return NextResponse.json({ success: true, info: 'nodemailer désactivé' });
}
