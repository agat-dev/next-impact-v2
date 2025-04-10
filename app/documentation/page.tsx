import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DocTabs from "@/components/documentation/doc-tabs";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function DocumentationPage() {
  return (
    <main>
      {/* Resources Section */}
      <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-medium tracking-tighter md:text-4xl/tight">Ressources pour s'informer</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Plus de 50 articles pour vous aider à créer et optimiser votre site web.
              </p>
            </div>
            <div className="w-full">
              <div className="relative">
                <DocTabs />
              </div>
            </div>
          </div>
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
  );
}
