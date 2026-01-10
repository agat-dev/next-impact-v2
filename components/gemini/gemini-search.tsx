import React, { useState } from "react";
import { TypewriterLoading } from "../ui/typewriter-loading";
import AuditSendForm from "./audit-send-form";

interface GeminiSearchProps {
  onResult: (result: any) => void;
  prompt: string; // Rendu obligatoire
  systemInstruction: string; // Ajout de la prop
}

export default function GeminiSearch({ onResult, prompt, systemInstruction }: GeminiSearchProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [showResultPage, setShowResultPage] = useState(false);

  React.useEffect(() => {
    if (result) {
      setShowResultPage(true);
    }
  }, [result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      // Correction : Envoi des 3 propriétés attendues par l'API
      const res = await fetch("/api/gemini-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, prompt, systemInstruction }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur lors de l'appel à Gemini");
      }
      const data = await res.json();
      setResult(data);
      onResult(data);
      setShowResultPage(true);
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading && !showResultPage && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto flex flex-col gap-4 p-6 bg-white/80 rounded-2xl shadow"
        >
          <h2 className="font-semibold text-2xl lg:text-3xl text-mediumblue text-center">
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
            className="w-max mx-auto mt-6 bg-regularblue rounded-full text-white font-googletitre text-lg font-regular px-4 py-2 disabled:bg-gray-400 min-h-[44px] flex items-center justify-center"
            disabled={loading || !url.trim()}
          >
            Lancer l'analyse
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
      )}

      {loading && (
        <div className="w-full max-w-xl mt-36 mx-auto flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow">
          <TypewriterLoading
            messages={[
              "Analyse en cours...",
              "Traitement de votre audit...",
              "Génération du rapport...",
            ]}
            speed={40}
            className="h-6 mt-12"
          />
        </div>
      )}

      {showResultPage && result && (
        <>
          <AuditSendForm
            // Correction : Accès direct à la propriété 'text' retournée par l'API
            markdownPreview={
              (result.text || JSON.stringify(result, null, 2))
                .split('\n').slice(0, 8).join('\n')
            }
            markdownFull={
              result.text || JSON.stringify(result, null, 2)
            }
            url={url}
          />
        </>
      )}
    </>
  );
}