"use client";

import { marked } from "marked";
import { useEffect, useState } from "react";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Configuration de marked pour une meilleure sécurité et personnalisation
    const renderer = new marked.Renderer();

    // Ajout d'ancres et de classes sur les titres H1, H2 et H3
    renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
      const anchor = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\wÀ-ÖØ-öø-ÿ-]/g, "");

      let className = "";
      if (depth === 1) {
        className = "text-3xl font-medium text-regularblue"; // Marges pour h1
      } else if (depth === 2) {
        className = "text-2xl font-medium text-regularblue md-h2"; // Marges pour h2
      } else {
        className = "text-xl font-medium text-regularblue/80"; // Marges pour h3
      }

      return `<h${depth} id="${anchor}" class="${className}">${text}</h${depth}>`;
    };


    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      renderer,
    });

    const parsedContent = marked.parse(content);
    if (typeof parsedContent === "string") {
      setHtml(parsedContent);
    }
  }, [content]);

  return <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />;
}