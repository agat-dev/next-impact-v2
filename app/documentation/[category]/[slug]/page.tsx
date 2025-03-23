import Link from "next/link"
import { ArrowLeft, BookOpen, Copy, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MarkdownContent } from "@/components/markdown-content"
import { getArticleBySlug, getArticlesByCategory } from "@/lib/markdown"

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}


 
export function generateTableOfContents(content: string) {
  const toc: { id: string; text: string; level: number }[] = []

  // Utilisation d'une expression régulière pour trouver les titres Markdown (##, ###, etc.)
  const headingRegex = /^(#{2,6})\s+(.*)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const [_, hashes, text] = match
    const level = hashes.length // Le niveau du titre est déterminé par le nombre de #
    const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") // Génération d'un ID unique

    if (level === 2 || level === 3) {
      toc.push({ id, text, level })
    }
  }

  return toc
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = getArticleBySlug(params.category, params.slug)
    const relatedArticles = (getArticlesByCategory(params.category))
      .filter((a) => a.slug !== params.slug)
      .slice(0, 2)

    const tableOfContents = generateTableOfContents(article.content) // Generate TOC from article content

    return (
      <div className="flex flex-col min-h-screen"> 
        <main className="flex-1">
          <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24 flex">
            <div className="flex-1 mx-full">
              <div className="flex items-center gap-2 mb-8">
                <Link href="/documentation" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link
                  href={`/documentation/${article.category}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-sm">{article.title}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <Link href={`/documentation/${article.category}`}>
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy link</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl tracking-tight mb-4">{article.title}</h1>
                  <p className="text-xl text-muted-foreground">{article.description}</p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                      <span className="text-sm font-medium">By {article.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Updated {typeof article.date === "string" ? article.date : "Recently"}
                    </span>
                  </div>
                </div>
                <Separator />
                <MarkdownContent content={article.content} />
                <Separator />
                {relatedArticles.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Related Articles</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {relatedArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.slug}
                          href={`/documentation/${relatedArticle.category}/${relatedArticle.slug}`}
                          className="group rounded-lg border p-4 hover:bg-muted/50"
                        >
                          <h4 className="font-medium group-hover:underline">{relatedArticle.title}</h4>
                          <p className="text-sm text-muted-foreground">{relatedArticle.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <aside className="w-64 hidden lg:block pl-8">
              <div className="sticky top-16">
                <h3 className="text-lg mb-4">Table of Contents</h3>
                <ul className="space-y-1">
                  {tableOfContents.map((item) => (
                    <li key={item.id} className="py-0.5"> 
                        <a
                        href={`#${item.id}`}
                        className={`${
                          item.level === 2
                          ? "text-sm text-foreground"
                          : "text-xs text-muted-foreground pl-6"
                        } hover:text-foreground`}
                        >
                        {item.text}
                        </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </main>
        <footer className="w-full border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 MarketingDocs. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    )
}