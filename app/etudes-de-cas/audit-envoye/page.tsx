"use client";

import React, { useEffect, useState } from "react";
import GeminiResultPage from "@/components/gemini/gemini-result-page";

export default function AuditEnvoyePage() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const audit = sessionStorage.getItem('audit-result');
    if (audit) {
      setMarkdown(audit);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white/90">
      <h1 className="text-3xl font-bold text-mediumblue mb-6">Votre audit est prêt !</h1>
      <p className="mb-8 text-mediumblue/80 text-center max-w-xl">
        Merci pour votre demande. Voici le rapport complet généré pour votre site.
      </p>
      {markdown && <GeminiResultPage markdown={markdown} />}
      {!markdown && <div className="text-red-500">Aucun audit à afficher.</div>}
    </div>
  );
}
