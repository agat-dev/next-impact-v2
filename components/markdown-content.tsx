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
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      breaks: true, // Convertit les retours à la ligne en <br>
      headerIds: true, // Ajoute des IDs aux en-têtes pour la navigation
      mangle: false, // Désactive le mangle pour éviter les problèmes avec certains caractères
    })

    setHtml(marked.parse(content))
  }, [content])

  return <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
}

