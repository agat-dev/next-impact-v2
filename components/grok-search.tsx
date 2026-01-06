"use client";
import React, { useState } from "react";

interface GrokSearchProps {
  onResult: (result: any) => void;
}

export default function GrokSearch({ onResult }: GrokSearchProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Appel à l'API interne Next.js pour proxy la requête Groq
      const res = await fetch("/api/grok-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'analyse Grok");
      const data = await res.json();
      onResult(data);
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-8 justify-center items-center mb-8 bg-white/95 backdrop-blur-xl p-16 rounded-2xl shadow-lg mx-auto">
      <label htmlFor="wp_url" className="text-4xl font-googletitre font-semibold text-darkblue text-center">
        Est-ce le moment de passer au Headless ? 
        <div className="mt-14 font-normal text-lg text-center">Entrez l'URL de votre site WordPress pour une analyse rapide : </div>
      </label>
      <div className="flex justify-center items-center gap-8">
      <input
        type="url"
        name="wp_url"
        placeholder="Votre URL WordPress (ex: https://monsite.fr)"
        className="w-80 flex-1 px-4 py-2 rounded-lg border border-mediumblue/70 border-w-[1px] bg-white/60 placeholder:text-mediumblue/70 focus:placeholder:text-mediumblue/40 max-w-xs active:ring-0 focus:ring-0 focus:outline-none focus:bg-white"
        aria-label="URL WordPress"
        required
        pattern="https?://.+"
        value={url}
        onChange={e => setUrl(e.target.value)}
        disabled={loading}
      />
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <button
        type="submit"
        className="px-6 py-2 rounded-full bg-mediumblue text-white font-semibold hover:bg-mediumblue/80 transition"
        disabled={loading}
      >
        {loading ? "Analyse..." : "Analyser"}
      </button>
    </form>

  );
}
