import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchDocumentation } from "@/components/search-documentation"
import { getAllArticles } from "@/lib/markdown"
import { TextAnimate } from "@/components/magicui/text-animate"

export default function DocumentationPage() {
  const articles = getAllArticles()

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

  // Filtrer les articles par catégorie
  const basesArticles = articles.filter((article) => article.category === "bases")
  const seoArticles = articles.filter((article) => article.category === "seo")
  const uxuiArticles = articles.filter((article) => article.category === "ux-ui")
  const contentArticles = articles.filter((article) => article.category === "content")
  const analyticsArticles = articles.filter((article) => article.category === "analytics")

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
                <div className="container px-4 md:px-6">             
                  <div className="flex justify-center space-y-4 pt-8">
                      <TextAnimate animation="blurInUp" by="character" once>
                          Ressources pour agir
                      </TextAnimate>
                  </div>
                  <div className="flex justify-center space-y-4 py-8">                      
                    <SearchDocumentation articles={articles} categories={categories} />
                </div>
              </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  All Topics
                </TabsTrigger>
                <TabsTrigger
                  value="bases"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Marketing digital
                </TabsTrigger>
                <TabsTrigger
                  value="seo"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  SEO
                </TabsTrigger>
                <TabsTrigger
                  value="ux-ui"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  UX/UI
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Content Strategy
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-6">
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
                <div className="mt-10 flex justify-center">
                  <Button variant="outline">
                    Load More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="bases" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {basesArticles.map((article) => (
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
                <div className="mt-10 flex justify-center">
                  <Button variant="outline">
                    Load More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="seo" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {seoArticles.map((article) => (
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
              </TabsContent>
              <TabsContent value="ux-ui" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {uxuiArticles.map((article) => (
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
              </TabsContent>
              <TabsContent value="content" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {contentArticles.map((article) => (
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
              </TabsContent>
              <TabsContent value="analytics" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {analyticsArticles.map((article) => (
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
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Paths</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Follow structured learning paths to master specific areas of digital marketing.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">SEO Specialist</h3>
                    <p className="text-muted-foreground">
                      Master search engine optimization from beginner to advanced level.
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
                  <Link href="/learning-paths/seo">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">UX Designer</h3>
                    <p className="text-muted-foreground">
                      Learn to create user-friendly and engaging website experiences.
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
                  <Link href="/learning-paths/ux">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Content Strategist</h3>
                    <p className="text-muted-foreground">
                      Develop skills to create and manage effective website content.
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
                  <Link href="/learning-paths/content">
                    <Button className="w-full">Start Learning</Button>
                  </Link>
                </div>
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

