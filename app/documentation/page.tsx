import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchDocumentation } from "@/components/search-documentation";
import { getAllArticles } from "@/lib/markdown";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function DocumentationPage() {
  const articles = getAllArticles().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  // Définir les catégories pour la recherche
  const categories = [
    {
      id: "Marketing digital",
      title: "Marketing digital",
      description: "Principes et concepts de base du marketing digital",
      url: "/documentation/marketing-digital",
    },
    {
      id: "Design et UI/UX",
      title: "Design et UI/UX",
      description: "Principes et concepts du design et de l'UI/UX",
      url: "/documentation/design-ui-ux",
    },
    {
      id: "Projet de site web",
      title: "Projet de site web",
      description: "Préparer et mener un projet de site web",
      url: "/documentation/projet-site-web",
    },
    {
      id: "Choisir WordPress",
      title: "Choisir WordPress",
      description: "Pourquoi choisir WordPress pour votre site web",
      url: "/documentation/choisir-wordpress",
    },
    {
      id: "Utiliser WordPress",
      title: "Créer et gerer un site web WordPress",
      description: "Comment créer et gérer un site web WordPress",
      url: "/documentation/site-web-wordpress",
    },
    {
      id: "SEO",
      title: "SEO",
      description: "Optimisation pour les moteurs de recherche",
      url: "/documentation/seo",
    },
  ];

  // Filtrer les articles par catégorie
  const marketingArticles = articles.filter(
    (article) => article.category === "marketing-digital"
  );
  const uxuiArticles = articles.filter(
    (article) => article.category === "design-ux-ui"
  );
  const projetArticles = articles.filter(
    (article) => article.category === "projet-site-web"
  );
  const choisirWordpressArticles = articles.filter(
    (article) => article.category === "choisir-wordpress"
  );
  const utiliserWordpressArticles = articles.filter(
    (article) => article.category === "utiliser-wordpress"
  );
  const seoArticles = articles.filter(
    (article) => article.category === "seo");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center space-y-4 pt-8">
              <TextAnimate animation="blurInUp" by="character" once>
                Ressources pour décider
              </TextAnimate>
            </div>
            <div className="flex justify-center space-y-4 py-8">
              <SearchDocumentation
                articles={articles}
                categories={categories}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none text-base font-medium text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Tout
                </TabsTrigger>
                <TabsTrigger
                  value="marketing-digital"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Marketing digital
                </TabsTrigger>
                <TabsTrigger
                  value="design-ui-ux"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Design et UI/UX
                </TabsTrigger>
                <TabsTrigger
                  value="projet-site-web"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Projet de site web
                </TabsTrigger>
                <TabsTrigger
                  value="choisir-wordpress"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Choisir WordPress
                </TabsTrigger>
                <TabsTrigger
                  value="utiliser-wordpress"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  Utiliser WordPress
                </TabsTrigger>
                <TabsTrigger
                  value="seo"
                  className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                  SEO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
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
              <TabsContent value="marketing-digital" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {marketingArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
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
              <TabsContent value="design-ux-ui" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {uxuiArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
                        <span className="sr-only">{article.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="projet-site-web" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projetArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
                        <span className="sr-only">{article.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="choisir-wordpress" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {choisirWordpressArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
                        <span className="sr-only">{article.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="utiliser-wordpress" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {utiliserWordpressArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
                        <span className="sr-only">{article.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="seo" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {seoArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-muted-foreground">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/documentation/${article.category}/${article.slug}`}
                        className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label={article.title}>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Learning Paths
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Follow structured learning paths to master specific areas of
                  digital marketing.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">SEO Specialist</h3>
                    <p className="text-muted-foreground">
                      Master search engine optimization from beginner to
                      advanced level.
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
                      Learn to create user-friendly and engaging website
                      experiences.
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
                      Develop skills to create and manage effective website
                      content.
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
            <Link
              href="/terms"
              className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
