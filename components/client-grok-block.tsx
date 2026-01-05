"use client";
import { useState } from "react";
import { marked } from "marked";
import dynamic from "next/dynamic";

// Fix the dynamic import with proper typing
const GrokSearch = dynamic(() => import("@/components/grok-search"), {
  ssr: false
});

export default function ClientGrokBlock() {
  const [grokResult, setGrokResult] = useState<any>(null);
  return (
    <>
      <GrokSearch onResult={setGrokResult} />
      {grokResult && (
        <div className="w-4xl mx-auto mt-6 p-8 bg-[var(--color-bg)] rounded-2xl shadow text-left relative overflow-hidden">
          <h3 className="font-bold text-2xl mb-2 text-[var(--color-accent)]">
            Audit de migration WordPress Headless
          </h3>
          <div
            className="prose prose-sm text-sm text-[var(--color-info)]"
            dangerouslySetInnerHTML={{
              __html: marked.parse(
                grokResult.choices?.[0]?.message?.content ||
                  JSON.stringify(grokResult, null, 2)
              ),
            }}
          />
        </div>
      )}
    </>
  );
}
