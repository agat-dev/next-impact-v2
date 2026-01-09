"use client";

import React from "react";
import { marked } from "marked";

interface GeminiResultPageProps {
  markdown: string;
}

export default function GeminiResultPage({ markdown }: GeminiResultPageProps) {
  const htmlContent = React.useMemo(() => {
    let textToParse = markdown;
    if (textToParse.trim().startsWith("```json")) {
      textToParse = textToParse.replace(/^```json\n?/, "").replace(/\n?```$/, "");
    }
    try {
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
        textToParse = "```json\n" + JSON.stringify(obj, null, 2) + "\n```";
      }
      return marked.parse(textToParse) as string;
    } catch (e) {
      return textToParse;
    }
  }, [markdown]);

  return (
    <div className="mt-8 w-full h-max max-w-4xl mx-auto p-8 bg-white/60 rounded-3xl shadow-xl text-left relative overflow-hidden ring-1 ring-black/5">
      <div className="relative">
        <div
          className="prose prose-blue prose-p:leading-relaxed prose-headings:text-blue-900 max-w-none text-slate-700"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
      <div>
        <button
          className="absolute top-4 right-4 text-mediumblue hover:text-regularblue"
          onClick={() => {
            navigator.clipboard.writeText(markdown);
          }}
        >
          Copier le texte brut
        </button>
        <button
          className="absolute top-12 right-4 text-mediumblue hover:text-regularblue"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Nouvelle analyse
        </button>
        <div className="absolute bottom-4 right-4 text-xs text-mediumblue/70">
          <a 
            className="text-mediumblue hover:text-regularblue"
            href="mailto:agathe@next-impact.digital"
          >
            Lancer mon projet
          </a>
        </div>
      </div>
    </div>
  );
}
