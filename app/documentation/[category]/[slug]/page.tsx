import Link from "next/link"
import { ArrowLeft, BookOpen, Copy, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MarkdownContent } from "@/components/documentation/markdown-content"
import { getArticleBySlug, getArticlesByCategory } from "@/lib/markdown"
import TableOfContentsPopup from "@/components/documentation/table-of-content-popup"

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

 
export function generateTableOfContents(content: string) {
  if (!content || typeof content !== "string") {
    return []; // Return an empty array if content is invalid
  }

  const toc: { id: string; text: string; level: number }[] = [];

  // Use a regular expression to find Markdown headings (##, ###, etc.)
  const headingRegex = /^(#{2,6})\s+(.*)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const [_, hashes, text] = match;
    const level = hashes.length; // The heading level is determined by the number of #
    const id = text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\wÀ-ÖØ-öø-ÿ-]/g, ""); // Allow special French characters and remove others

    if (level === 2 || level === 3) {
      toc.push({ id, text, level });
    }
  }

  return toc;
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = getArticleBySlug(params.category, params.slug)
    const relatedArticles = (getArticlesByCategory(params.category))
      .filter((a) => a.slug !== params.slug)
      .slice(0, 2)

    const tableOfContents = article?.content ? generateTableOfContents(article.content) : [] // Safely generate TOC


    return (
      <div className="flex flex-col min-h-screen"> 
        <main className="flex-1">
          <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24 flex">
            <div className="flex-1 mx-full">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/documentation" className="text-sm text-regularblue hover:text-regularblue/80">
                Documentation
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href={`/documentation/${article.category}`}
                className="text-sm text-regularblue hover:text-regularblue/80"
              >
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </Link>
              <span className="text-regularblue">/</span>
              <span className="font-adobetitre text-mediumblue/70">{article.title}</span>
              </div>
            <div className="flex justify-between items-center mb-6">
              <Link href={`/documentation/${article.category}`}>
                <Button size="sm" className="text-regularblue bg-transparent hover:bg-lightblue/10 rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button size="icon" className="text-regularblue bg-transparent hover:bg-lightblue/10 rounded-full">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copier</span>
                </Button>
                <Button size="icon" className="text-regularblue bg-transparent hover:bg-lightblue/10 rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Partager</span>
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
                    Mise à jour : {typeof article.date === "string" ? article.date : "Recently"}
                  </span>
                </div>
            </div>
              <aside className="hidden lg:block pl-8">
              <TableOfContentsPopup tableOfContents={tableOfContents} />
              </aside>
            <Separator />
          <div className="flex flex-col">      
            <div className="w-10/12 lg:w-8/12 mx-auto">
            <MarkdownContent content={article.content} />
            </div>
            <Separator />
            {relatedArticles.length > 0 && (
              <div className="space-y-4 mt-12">
                <h3 className="text-xl font-bold text-regularblue">Articles en lien</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.slug}
                      href={`/documentation/${relatedArticle.category}/${relatedArticle.slug}`}
                      className="group rounded-lg border p-4 hover:bg-muted/50"
                    >
                      <h4 className="font-medium text-regularblue hover:text-regularblue/80">{relatedArticle.title}</h4>
                      <p className="text-sm text-muted-foreground">{relatedArticle.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}