import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { SearchDocumentation } from "@/components/search-documentation"
import { getArticlesByCategory, getAllCategories } from "@/lib/markdown"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateStaticParams() {
  const categories = getAllCategories()

  return categories.map((category) => ({
    category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const articles =  getArticlesByCategory(category)

  if (articles.length === 0) {
    notFound()
  }

  // Définir les catégories pour la recherche
  const categories = [
    {
      id: "bases",
      title: "Marketing digital",
      description: "Principes et concepts de base du marketing digital",
      url: "/documentation/bases",
    },
    {
      id: "seo",
      title: "SEO",
      description: "Search Engine Optimization guides and techniques",
      url: "/documentation/seo",
    },
    {
      id: "ux-ui",
      title: "UX/UI Design",
      description: "User experience and interface design principles",
      url: "/documentation/ux-ui",
    },
    {
      id: "content",
      title: "Content Strategy",
      description: "Content creation and marketing strategies",
      url: "/documentation/content",
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Web analytics and performance measurement",
      url: "/documentation/analytics",
    },
  ]

  // Titre et description de la catégorie
  const categoryInfo = {
    bases: {
      title: "Marketing Digital",
      description: "Découvrez les principes et concepts de base du marketing digital",
    },
    seo: {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive guides and resources to help you master SEO for your website.",
    },
    "ux-ui": {
      title: "UX/UI Design",
      description: "Learn how to create user-friendly and engaging website experiences.",
    },
    content: {
      title: "Content Strategy",
      description: "Develop effective content strategies to engage and convert your audience.",
    },
    analytics: {
      title: "Analytics",
      description: "Understand how to measure and analyze your website's performance.",
    },
  }

  const categoryTitle =
    categoryInfo[category as keyof typeof categoryInfo]?.title || category.charAt(0).toUpperCase() + category.slice(1)

console.log(categoryTitle)

  const categoryDescription =
    categoryInfo[category as keyof typeof categoryInfo]?.description ||
    "Explore our comprehensive guides and resources."

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 pb-4">
                <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">{categoryTitle}</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">{categoryDescription}</p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <Link href="/documentation">
                <Button className="text-regularblue bg-transparent hover:bg-lightblue/10 rounded-full" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Documentation
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article.slug}
                  className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p className="text-muted-foreground">{article.description}</p>
                  </div>
                  <Link
                    href={`/documentation/${article.category}/${article.slug}`}
                    className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label={article.title}
                  >
                    <span className="sr-only">{article.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {categoryTitle} Learning Path
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Follow our structured learning path to master {categoryTitle.toLowerCase()} from beginner to advanced
                  level.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm w-full max-w-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{categoryTitle} Specialist</h3>
                  <p className="text-muted-foreground">
                    Master {categoryTitle.toLowerCase()} from beginner to advanced level.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-0 rounded-full bg-primary"></div>
                  </div>
                </div>
                <Link href={`/learning-paths/${category}`}>
                  <Button className="w-full">Start Learning</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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

