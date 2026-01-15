import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log('API /api/gemini-analyze called');
  try {
    const { url, prompt, systemInstruction } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Clé API Gemini manquante" }, { status: 500 });
    }

    // 1) Diagnostic: liste des modèles disponibles pour ta clé
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const listJson = await listRes.json();
    const names: string[] = Array.isArray(listJson.models) ? listJson.models.map((m: any) => m.name) : [];
    console.log("Models disponibles:", names);

    // Choix REST IDs
    const preferredRest = [
      "models/gemini-2.5-flash",
      "models/gemini-2.5-pro",
      "models/gemini-2.0-flash-lite"
    ];
    const restModelId = preferredRest.find(id => names.includes(id));
    if (!restModelId) {
      return NextResponse.json({ error: "Aucun modèle texte accessible.", models: names }, { status: 400 });
    }

    // SDK attend le nom sans "models/"
    const sdkModelName = restModelId.replace(/^models\//, "");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: sdkModelName, // ex: "gemini-2.5-flash"
      systemInstruction,
      tools: [{ googleSearch: {} }],
    });

    const generationConfig = { temperature: 0.1, topP: 0.8, topK: 1, maxOutputTokens: 8192 };
    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    ];

    const fullPrompt = prompt.replace("{$url}", url);

    try {
      // Appel direct à Gemini, sans fetch inutile
      const result = await model.generateContent(fullPrompt, { generationConfig, safetySettings });
      console.log("Gemini raw response:", result.response);
      const text = result.response.text();
      if (!text || !text.trim()) {
        return NextResponse.json({ error: "Aucune analyse générée. Essayez avec une autre URL ou plus tard." }, { status: 200 });
      }
      return NextResponse.json({ text });
    } catch (error: any) {
      // Gère l’erreur proprement
      return NextResponse.json({ error: error.message || "Timeout ou erreur Gemini" }, { status: 504 });
    }

  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json({ error: err.message || "Erreur serveur" }, { status: 500 });
  }
}
