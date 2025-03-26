"use client";

import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/ui/timeline"
import { TextAnimate } from "@/components/magicui/text-animate";
import { Expandable, ExpandableCard, ExpandableCardFooter, ExpandableCardContent, ExpandableCardHeader, ExpandableContent, ExpandableTrigger } from "@/components/ui/expand-cards";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, MessageSquare, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";



export default function Home() {

  const data = [
    {
      title: "Comprendre la communication digitale",
      content: (
        <>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
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
                    className="h-6 w-6"
                  >
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl">SEO Optimization</h3>
                  <p className="text-muted-foreground">
                    Learn how to improve your website's visibility in search engines and drive organic traffic.
                  </p>
                </div>
                <Link href="/documentation/seo" className="text-sm font-medium text-primary hover:underline">
                  Explore SEO Guides
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
                    className="h-6 w-6"
                  >
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
                  <h3 className="text-xl">UX/UI Design</h3>
                  <p className="text-muted-foreground">
                    Discover principles and practices for creating user-friendly and engaging website experiences.
                  </p>
                </div>
                <Link href="/documentation/ux-ui" className="text-sm font-medium text-primary hover:underline">
                  Explore UX/UI Guides
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
                    className="h-6 w-6"
                  >
                    <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
                    <path d="M8 14v.5" />
                    <path d="M16 14v.5" />
                    <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl">Content Strategy</h3>
                  <p className="text-muted-foreground">
                    Master the art of creating compelling content that converts visitors into customers.
                  </p>
                </div>
                <Link
                  href="/documentation/content-strategy"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Explore Content Guides
                </Link>
              </div>
            </div>
          </>
      ),
    },
    {
      title: "Conseil par des experts",
      content: (
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Book one-on-one video sessions with our digital marketing specialists to get personalized advice for
                    your projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/services">
                    <Button className="w-full">View Consultation Options</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">30-Minute Quick Consultation</h3>
                      <p className="text-sm text-muted-foreground">Get answers to your specific questions</p>
                    </div>
                    <div className="ml-auto font-semibold">€49</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">1-Hour Strategy Session</h3>
                      <p className="text-sm text-muted-foreground">Deep dive into your marketing strategy</p>
                    </div>
                    <div className="ml-auto font-semibold">€89</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Website Audit & Recommendations</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive review of your existing site</p>
                    </div>
                    <div className="ml-auto font-semibold">€149</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      See All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      ),
    },
    {
      title: "Recherche de prestataires",
      content: (
        <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              After your consultation, we'll match you with the perfect freelancers for your project.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl">Web Developers</h3>
                <p className="text-sm text-muted-foreground">
                  Front-end, back-end, and full-stack developers to build your website or application.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl">UX/UI Designers</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced designers who create beautiful and functional user interfaces.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl">SEO Specialists</h3>
                <p className="text-sm text-muted-foreground">
                  Experts who can optimize your website for search engines and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button>Book a Consultation to Get Matched</Button>
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
            <div className="flex justify-center space-y-4 pt-8">
                <TextAnimate animation="blurInUp" by="character" once>
                    Marketing à impact
                </TextAnimate>
                </div>
                <div className="flex justify-center space-y-4 pb-8">
                <TextAnimate animation="blurInUp" by="character" once>
                    de l'idée à la visibilité
                </TextAnimate>
             </div>
        </div>
      </section>

      <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 flex flex-row items-center justify-center">
                <Expandable
                    expandDirection="both"
                    expandBehavior="replace"
                    initialDelay={0.2}
                    onExpandStart={() => console.log("Expanding meeting card...")}
                    onExpandEnd={() => console.log("Meeting card expanded!")}
                  >
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <ExpandableTrigger>
                        <ExpandableCard
                          className="w-full relative"
                          collapsedSize={{ width: 320, height: 240 }}
                          expandedSize={{ width: 420, height: 480 }}
                          hoverToExpand={false}
                          expandDelay={200}
                          collapseDelay={500}
                        >
                          <ExpandableCardHeader>
                            <div className="flex justify-between items-start w-full">
                              <div>
                                <span
                                  className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-100 mb-2 px-2 py-1 rounded"
                                >
                                  In 15 mins
                                </span>
                                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                                  Ressources
                                </h3>
                              </div>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button size="icon" variant="outline" className="h-8 w-8">
                                      <Calendar className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Add to Calendar</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </ExpandableCardHeader>
              
                          <ExpandableCardContent>
                            <div className="flex flex-col items-start justify-between mb-4">
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>1:30PM → 2:30PM</span>
                              </div>
              
                              <ExpandableContent preset="blur-md">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>Conference Room A</span>
                                </div>
                              </ExpandableContent>
                            </div>
                            <ExpandableContent preset="blur-md" stagger staggerChildren={0.2}>
                              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                                Weekly design sync to discuss ongoing projects, share updates,
                                and address any design-related challenges.
                              </p>
                              <div className="mb-4">
                                <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  Attendees:
                                </h4>
                                <div className="flex -space-x-2 overflow-hidden">
                                  {["Alice", "Bob", "Charlie", "David"].map((name, index) => (
                                    <TooltipProvider key={index}>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Avatar className="border-2 border-white dark:border-gray-800">
                                            <AvatarImage
                                              src={`/placeholder.svg?height=32&width=32&text=${name[0]}`}
                                              alt={name}
                                            />
                                            <AvatarFallback>{name[0]}</AvatarFallback>
                                          </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{name}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Meeting
                                </Button>
                                {isExpanded && (
                                  <Button variant="outline" className="w-full">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Open Chat
                                  </Button>
                                )}
                              </div>
                            </ExpandableContent>
                          </ExpandableCardContent>
                          <ExpandableContent preset="slide-up">
                            <ExpandableCardFooter>
                              <div className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-300">
                                <span>Weekly</span>
                                <span>Next: Mon, 10:00 AM</span>
                              </div>
                            </ExpandableCardFooter>
                          </ExpandableContent>
                        </ExpandableCard>
                      </ExpandableTrigger>
                    )}
                  </Expandable>
                  <Expandable
                    expandDirection="both"
                    expandBehavior="replace"
                    initialDelay={0.2}
                    onExpandStart={() => console.log("Expanding meeting card...")}
                    onExpandEnd={() => console.log("Meeting card expanded!")}
                  >
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <ExpandableTrigger>
                        <ExpandableCard
                          className="w-full relative"
                          collapsedSize={{ width: 320, height: 240 }}
                          expandedSize={{ width: 420, height: 480 }}
                          hoverToExpand={false}
                          expandDelay={200}
                          collapseDelay={500}
                        >
                          <ExpandableCardHeader>
                            <div className="flex justify-between items-start w-full">
                              <div>
                                <Badge
                                  variant="secondary"
                                  className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-100 mb-2"
                                >
                                  In 15 mins
                                </Badge>
                                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                                  Compétences
                                </h3>
                              </div>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button size="icon" variant="outline" className="h-8 w-8">
                                      <Calendar className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Add to Calendar</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </ExpandableCardHeader>
              
                          <ExpandableCardContent>
                            <div className="flex flex-col items-start justify-between mb-4">
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>1:30PM → 2:30PM</span>
                              </div>
              
                              <ExpandableContent preset="blur-md">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>Conference Room A</span>
                                </div>
                              </ExpandableContent>
                            </div>
                            <ExpandableContent preset="blur-md" stagger staggerChildren={0.2}>
                              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                                Weekly design sync to discuss ongoing projects, share updates,
                                and address any design-related challenges.
                              </p>
                              <div className="mb-4">
                                <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  Attendees:
                                </h4>
                                <div className="flex -space-x-2 overflow-hidden">
                                  {["Alice", "Bob", "Charlie", "David"].map((name, index) => (
                                    <TooltipProvider key={index}>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Avatar className="border-2 border-white dark:border-gray-800">
                                            <AvatarImage
                                              src={`/placeholder.svg?height=32&width=32&text=${name[0]}`}
                                              alt={name}
                                            />
                                            <AvatarFallback>{name[0]}</AvatarFallback>
                                          </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{name}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Meeting
                                </Button>
                                {isExpanded && (
                                  <Button variant="outline" className="w-full">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Open Chat
                                  </Button>
                                )}
                              </div>
                            </ExpandableContent>
                          </ExpandableCardContent>
                          <ExpandableContent preset="slide-up">
                            <ExpandableCardFooter>
                              <div className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-300">
                                <span>Weekly</span>
                                <span>Next: Mon, 10:00 AM</span>
                              </div>
                            </ExpandableCardFooter>
                          </ExpandableContent>
                        </ExpandableCard>
                      </ExpandableTrigger>
                    )}
                  </Expandable>
            </div>
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
                  Our interactive assistant helps you transform your ideas into detailed project specifications.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl">Interactive Brief Builder</h3>
                      <p className="text-muted-foreground">
                        Answer a series of questions to create a comprehensive project specification that you can share
                        with freelancers or agencies.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">1</span>
                        </div>
                        <h4 className="text-sm font-medium">Define Your Project</h4>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">2</span>
                        </div>
                        <h4 className="text-sm font-medium">Specify Requirements</h4>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="font-bold">3</span>
                        </div>
                        <h4 className="text-sm font-medium">Get Detailed Specs</h4>
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
                  Sign up to access exclusive content, earn badges, and unlock special rewards.
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
    </>
  )
}

