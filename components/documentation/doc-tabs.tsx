
import { getAllArticles } from "@/lib/markdown";

import { SearchDocumentation } from "@/components/documentation/search-documentation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocTabs() {
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
        id: "WordPress",
        title: "WordPress",
        description: "Choisir WordPress pour votre site web",
        url: "/documentation/wordpress",
      },
      {
        id: "CMS",
        title: "Choisir un CMS",
        description: "Choisir un CMS pour votre site web",
        url: "/documentation/cms",
      },
      {
        id: "Headless CMS",
        title: "Headless CMS",
        description: "Choisir Headless CMS pour votre site web",
        url: "/documentation/headless-cms",
      },      
      {
        id: "Frameworks",
        title: "Frameworks",
        description: "Choisir Frameworks", 
        url: "/documentation/frameworks",
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
      (article) => article.category === "design"
    );
    const projetArticles = articles.filter(
      (article) => article.category === "projet-site-web"
    );
    const wordpressArticles = articles.filter(
      (article) => article.category === "wordpress"
    ); 
    const cmsArticles = articles.filter(
      (article) => article.category === "cms"
    );
    const headlessCmsArticles = articles.filter(
      (article) => article.category === "headless-cms"
    );
    const frameworksArticles = articles.filter(
      (article) => article.category === "frameworks"
    );
    const seoArticles = articles.filter(
      (article) => article.category === "seo");
  

        return (
            <>
            <section className="w-full pt-2">
              <div className="container px-4 md:px-6">
                <div className="flex justify-center space-y-4">
                  <SearchDocumentation
                    articles={articles}
                    categories={categories}
                  />
                </div>
              </div>
            </section>
            <section className="w-full py-8">
              <div className="container px-4 md:px-6">
                <Tabs defaultValue="projet-site-web" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                    <TabsTrigger
                      value="projet-site-web"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      Projet web
                    </TabsTrigger>  
                    <TabsTrigger
                      value="marketing-digital"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      Marketing
                    </TabsTrigger>
                    <TabsTrigger
                      value="design"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      Design
                    </TabsTrigger>              
                    <TabsTrigger
                      value="seo"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      SEO
                    </TabsTrigger>
                    <TabsTrigger
                      value="cms"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      CMS
                    </TabsTrigger>                 
                    <TabsTrigger
                      value="wordpress"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      WordPress
                    </TabsTrigger>   
                    <TabsTrigger
                      value="headless-cms"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      Headless CMS
                    </TabsTrigger> 
                    <TabsTrigger
                      value="frameworks"
                      className="rounded-none text-base font-regular text-regularblue border-b-2 border-transparent px-4 py-2 data-[state=active]:border-lightblue">
                      Frameworks
                    </TabsTrigger>                    
                  </TabsList>
                  <TabsContent value="all" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {articles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
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
                  <TabsContent value="marketing-digital" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {marketingArticles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                  <TabsContent value="design" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {uxuiArticles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                  <TabsContent value="cms" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {cmsArticles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
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
                  <TabsContent value="wordpress" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {wordpressArticles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                  <TabsContent value="headless-cms" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {headlessCmsArticles.map((article) => (
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                  <TabsContent value="frameworks" className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {frameworksArticles.map((article) => ( 
                        <div
                          key={article.slug}
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
                          className="group relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="space-y-2">
                            <h3 className="text-xl font-regular">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">
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
            
          </>
        );

}