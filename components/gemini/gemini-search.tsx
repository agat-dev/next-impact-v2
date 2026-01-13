import React, { useState } from "react";
import Image from "next/image";
import { TypewriterLoading } from "../ui/typewriter-loading";
import AuditSendForm from "./audit-send-form";
import { Button } from "../ui/button";
import { ArrowRight, Target, TargetIcon } from "lucide-react";
import { Arrow } from "@radix-ui/react-select";

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
          className="flex flex-col gap-6 w-5/6 max-w-xl mx-auto"
        >
          <label
            htmlFor="gemini_url"
            className="font-googletexte text-darkblue/80"
          >
            URL WordPress à analyser
          </label>
          <input
            id="gemini_url"
            className="w-full bg-white/80 border rounded-2xl p-2 -mt-4 mb-2 focus-visible:bg-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://test.com"
            required
            disabled={loading}
            type="url"
            pattern="https?://.+"
          />
          <Button
            type="submit"
            variant="default"
            className="px-6 py-2 text-xl font-googletitre font-medium flex items-center justify-center shadow-lg"
            disabled={loading || !url.trim()}
          >
            Lancer l'analyse
            <span className="ml-2 flex items-center text-darkblue">              
              <ArrowRight className="size-5"/>
            </span>
          </Button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
      )}

      {loading && (
        <div className="w-full max-w-xl mt-4 mx-auto flex flex-col items-center justify-center p-6 rounded-2xl shadow">
          <TypewriterLoading
            messages={[
              "Analyse en cours...",
              "Traitement de votre audit...",
              "Génération du rapport...",
            ]}
            speed={40}
            className="h-6 mt-12 text-2xl"
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