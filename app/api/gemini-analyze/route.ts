// Fichier déplacé depuis app/api/grok-analyze/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log('API /api/gemini-analyze called');
  try {
    const { prompt } = await req.json();
    console.log('Prompt reçu:', prompt);
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('Clé API Gemini manquante');
      return NextResponse.json({ error: "Clé API Gemini manquante" }, { status: 500 });
    }
    const geminiRes = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.1,
          topP: 0.8,
          topK: 40,
        },
        tools: [
          {
            googleSearch: {}
          }
        ]
      }),
    });
    console.log('Requête envoyée à Gemini');
    
    if (!geminiRes.ok) {
      const error = await geminiRes.text();
      console.error('Gemini API error:', error);
      return NextResponse.json({ error }, { status: geminiRes.status });
    }

    const data = await geminiRes.json();
    const fullContent = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return NextResponse.json({
      candidates: [{
        content: {
          parts: [{ text: fullContent }]
        }
      }]
    });
  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json({ error: err.message || "Erreur serveur" }, { status: 500 });
  }
}
