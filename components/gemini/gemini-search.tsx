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

// Affiche le début de l'audit, puis propose un opt-in email pour la suite
function AuditPreview({ markdown }: { markdown: string }) {
  const [showFull, setShowFull] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Découpe le markdown. On cherche "Indicateurs de bénéfice" et on s'arrête une ligne après.
  let preview = markdown;
  let rest = "";
  const match = markdown.match(/Détails de l'analyse/i);

  if (match && match.index !== undefined) {
    // On cherche la fin de la ligne où se trouve le match
    const endOfMatchLine = markdown.indexOf("\n", match.index);
    if (endOfMatchLine !== -1) {
      // On cherche la fin de la ligne suivante
      const endOfNextLine = markdown.indexOf("\n", endOfMatchLine + 1);
      const splitIndex = endOfNextLine !== -1 ? endOfNextLine : markdown.length;

      preview = markdown.slice(0, splitIndex).trim();
      rest = markdown.slice(splitIndex).trim();
    }
  } else {
    // Si le titre n'est pas trouvé, on coupe arbitrairement à 1/3 du texte pour forcer l'opt-in
    const arbitrarySplit = Math.floor(markdown.length / 3);
    const safeSplitIndex = markdown.indexOf("\n", arbitrarySplit);
    if (safeSplitIndex !== -1) {
      preview = markdown.slice(0, safeSplitIndex).trim();
      rest = markdown.slice(safeSplitIndex).trim();
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audit: markdown }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi de l'email");
      setSent(true);
      setShowFull(true);
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setSending(false);
    }
  };

  const htmlContent = React.useMemo(() => {
    let textToParse = showFull ? markdown : preview;

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
  }, [markdown, preview, showFull]);

  return (
    <div
      id="gemini-search-result"
      className="mt-8 w-full max-w-4xl mx-auto p-8 bg-white/60 rounded-3xl shadow-xl text-left relative overflow-hidden ring-1 ring-black/5"
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

        {!showFull && rest && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-(white/70) to-transparent pointer-events-none" />
        )}
      </div>

      {!showFull && rest && (
        <div className="w-1/2 mx-auto mt-8 border-t pt-8">
          <p className="text-center text-mediumblue font-medium mb-4 flex items-center gap-2">
            L'audit complet est prêt. Laissez votre email pour accéder à la
            synthèse et aux recommandations détaillées.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3"
          >
            <input
              id="audit_email"
              type="email"
              className="flex-1 border-0 ring-1 ring-blue-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              disabled={sending || sent}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:opacity-50 whitespace-nowrap"
              disabled={sending || sent || !email.trim()}
            >
              {sending ? "Envoi en cours..." : "Recevoir l'audit complet"}
            </button>
          </form>
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
        </div>
      )}

      {showFull && (
        <div className="mt-6 text-center">
          <p className="text-sm text-green-600 font-medium bg-green-50 py-2 px-4 rounded-full inline-block">
            ✓ Audit complet débloqué et envoyé par email
          </p>
        </div>
      )}
    </div>
  );
}
