"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, FileText, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Expandable,
  ExpandableCard,
  ExpandableCardFooter,
  ExpandableCardContent,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from "@/components/ui/expand-cards";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, MessageSquare, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const data = [
    {
      title: "Diagnostics et ressources",
      content: (
        <>
          <div className="mx-auto flex justify-start max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">S'informer</h3>
                <p className="text-muted-foreground">
                  Meilleures pratiques et les tendances du secteur pour
                  optimiser votre projet web et bien décider.
                </p>
              </div>
              <Link
                href="/documentation"
                className="text-sm font-medium text-primary hover:underline">
                Explorer nos ressources
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 5.45 5.45" />
                  <path d="M2 12h6" />
                  <path d="m22 12-5.45 5.45" />
                  <path d="M22 12h-6" />
                  <path d="m12 2 5.45 5.45" />
                  <path d="M12 2v6" />
                  <path d="m12 22-5.45-5.45" />
                  <path d="M12 22v-6" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">Choisir sa solution</h3>
                <p className="text-muted-foreground">
                  Comparer les CMS et les outils de création de sites web pour
                  choisir la meilleure option pour votre projet.
                </p>
              </div>
              <Link
                href="/quizz"
                className="text-sm font-medium text-primary hover:underline">
                Testez votre projet
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
                  <path d="M8 14v.5" />
                  <path d="M16 14v.5" />
                  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">Auditer son site web</h3>
                <p className="text-muted-foreground">
                  Evaluer la qualité de votre site web et identifier les points
                  à améliorer pour optimiser votre projet.
                </p>
              </div>
              <Link
                href="/audit"
                className="text-sm font-medium text-primary hover:underline">
                Testez votre site web
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Conseils personnalisés",
      content: (
        <div className="grid gap-6 lg:gap-12">
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">30 min de Conseil ponctuel</h3>
                  <p className="text-sm text-muted-foreground">
                    Pour répondre rapidement à vos interrogations précises
                  </p>
                </div>
                <div className="ml-auto font-semibold">€49</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Pack : Formalisation du cahier des charges
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deux fois 30 minutes de visio et à l'issue un livrable
                    complet.
                  </p>
                </div>
                <div className="ml-auto font-semibold">€89</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Pack : Création ou Refonte</h3>
                  <p className="text-sm text-muted-foreground">
                    Un accompagnement global pour la création ou la refonte de votre site web
                  </p>
                </div>
                <div className="ml-auto font-semibold">€149</div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Voir tous les services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Recherche de freelance",
      content: (
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Sur la base de votre cahier des charges, nous vous mettons en relation avec des freelances qualifiés pour réaliser votre projet.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="h-16 w-16 rounded-full bg-gray-100"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl">Web Developers</h3>
                  <p className="text-sm text-muted-foreground">
                    Front-end, back-end, and full-stack developers to build your
                    website or application.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="h-16 w-16 rounded-full bg-gray-100"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl">UX/UI Designers</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced designers who create beautiful and functional
                    user interfaces.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="h-16 w-16 rounded-full bg-gray-100"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl">SEO Specialists</h3>
                  <p className="text-sm text-muted-foreground">
                    Experts who can optimize your website for search engines and
                    drive organic traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <Button>Réserver une consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <main className="flex-1 justify-center">
        <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center align-middle space-y-4 pb-8">
              <TextAnimate animation="blurInUp" by="character" once>
                Créer votre site web qui convertit
              </TextAnimate>
            </div>
          </div>
        </section>

        <section className="w-full h-full py-6 md:py-12 lg:py-16 xl:py-24">
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="inset-0 flex items-center justify-center">
                <Timeline data={data} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">
                  From Brief to Project Specification
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our interactive assistant helps you transform your ideas into
                  detailed project specifications.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl">Interactive Brief Builder</h3>
                      <p className="text-muted-foreground">
                        Answer a series of questions to create a comprehensive
                        project specification that you can share with
                        freelancers or agencies.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">1</span>
                        </div>
                        <h4 className="text-sm font-medium">
                          Define Your Project
                        </h4>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">2</span>
                        </div>
                        <h4 className="text-sm font-medium">
                          Specify Requirements
                        </h4>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">3</span>
                        </div>
                        <h4 className="text-sm font-medium">
                          Get Detailed Specs
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Link href="/brief">
                        <Button>
                          Start Building Your Brief
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Knowledge Community
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Sign up to access exclusive content, earn badges, and unlock
                  special rewards.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
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
    </>
  );
}
