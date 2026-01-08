import React, { useState } from "react";
import { TypewriterLoading } from "../ui/typewriter-loading";
import { marked } from "marked";

interface GeminiSearchProps {
  onResult: (result: any) => void;
  prompt?: string;
}

export default function GeminiSearch({ onResult, prompt }: GeminiSearchProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    let finalPrompt = "";
    if (typeof prompt === "string" && prompt.includes("{$url}")) {
      finalPrompt = prompt.replaceAll("{$url}", url);
    } else if (typeof prompt === "string") {
      finalPrompt = `${prompt}\nURL: ${url}`;
    } else {
      finalPrompt = `Analyse le site WordPress suivant : ${url}`;
    }
    try {
      const res = await fetch("/api/gemini-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'appel à Gemini");
      const data = await res.json();
      setResult(data);
      onResult(data);
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto flex flex-col gap-4 p-6 bg-white/80 rounded-2xl shadow"
      >
        <h2 className="font-semibold text-3xl text-mediumblue text-center">
          Passer votre site WordPress en headless ?
        </h2>
        <label
          htmlFor="gemini_url"
          className="font-regular text-lg font-googletexte text-mediumblue/80"
        >
          URL WordPress à analyser
        </label>
        <input
          id="gemini_url"
          className="border rounded p-2 -mt-2.5"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://test.com"
          required
          disabled={loading}
          type="url"
          pattern="https?://.+"
        />
        <button
          type="submit"
          className="w-max mx-auto mt-6 bg-regularblue rounded-full text-white font-googletitre text-lg font-regular px-4 py-2 disabled:transparent min-h-[44px] flex items-center justify-center"
          disabled={loading || !url.trim()}
        >
          {loading ? (
            <TypewriterLoading
              messages={[
                "Analyse en cours avec Gemini...",
                "Traitement de votre audit...",
                "Génération du rapport...",
              ]}
              speed={40}
              className="h-6 mt-12"
            />
          ) : (
            "Lancer l'analyse"
          )}
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>

      {result && (
        <AuditPreview
          markdown={
            result.candidates?.[0]?.content?.parts?.[0]?.text ||
            JSON.stringify(result, null, 2)
          }
        />
      )}
    </>
  );
}

function AuditPreview({ markdown }: { markdown: string }) {

  const htmlContent = React.useMemo(() => {
    let textToParse = markdown;

    // Si la réponse est entourée de balises ```json et ```, on essaie d'extraire le contenu
    // ou si c'est du JSON brut, on le formate pour qu'il soit lisible
    if (textToParse.trim().startsWith("```json")) {
      textToParse = textToParse
        .replace(/^```json\n?/, "")
        .replace(/\n?```$/, "");
    }

    try {
      // Tentative de détection si c'est du JSON pur pour le formater en markdown
      const isJson = (str: string) => {
        try {
          const obj = JSON.parse(str);
          return !!obj && typeof obj === "object";
        } catch (e) {
          return false;
        }
      };

      if (isJson(textToParse)) {
        const obj = JSON.parse(textToParse);
        // Si c'est un objet, on le convertit en un affichage markdown propre
        textToParse = "```json\n" + JSON.stringify(obj, null, 2) + "\n```";
      }

      return marked.parse(textToParse) as string;
    } catch (e) {
      console.error("Erreur parsing markdown:", e);
      return textToParse;
    }
  }, [markdown]);

  return (
    <div
      id="gemini-search-result"
      className="mt-8 w-full h-max max-w-4xl mx-auto p-8 bg-white/60 rounded-3xl shadow-xl text-left relative overflow-hidden ring-1 ring-black/5"
    >
      <h3 className="font-bold text-3xl mb-6 text-mediumblue border-b pb-4">
        Résultat de l'analyse
      </h3>

      <div className="relative">
        <div
          className="prose prose-blue prose-p:leading-relaxed prose-headings:text-blue-900 max-w-none text-slate-700"
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      </div>
    </div>
  );
}
