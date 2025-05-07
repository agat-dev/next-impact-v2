"use client"

import { marked } from "marked"
import { useEffect, useState } from "react"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    // Configuration de marked pour une meilleure sécurité et personnalisation
    const renderer = new marked.Renderer()

    // Ajout d'ancres sur les titres H2
    renderer.heading = ({ depth, text }) => {
      if (depth === 2) {
        const anchor = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\p{L}\p{N}-]/gu, "")
        return `<h2 id="${anchor}">${text}</h2>`
      }
      return `<h${depth}>${text}</h${depth}>`
    }

    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      renderer,
    })

    const parsedContent = marked.parse(content)
    if (typeof parsedContent === "string") {
      setHtml(parsedContent)
    }
  }, [content])

  return <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
}