"use client";

import Link from "next/link"
import { BookOpen, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TextAnimate } from "@/components/magicui/text-animate"
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from "@/components/ui/expand-cards"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, MessageSquare, Video, Users } from "lucide-react"

export default function FreelancersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
                <div className="container px-4 md:px-6">             
                  <div className="flex justify-center space-y-4 pt-8">
                      <TextAnimate animation="blurInUp" by="character" once>
                          Recommandation de freelances 
                      </TextAnimate>
                  </div>
                  <div className="flex justify-center space-y-4 py-8">                      
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
                                <Badge
                                  variant="secondary"
                                  className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-100 mb-2"
                                >
                                  In 15 mins
                                </Badge>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Web Developers</CardTitle>
                  <CardDescription>Front-end, back-end, and full-stack developers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Custom website development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">E-commerce solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">CMS implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Web application development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">API integration</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Consultation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>UX/UI Designers</CardTitle>
                  <CardDescription>Create beautiful and functional user interfaces</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">User experience design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">User interface design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Wireframing and prototyping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Responsive design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Brand identity design</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Consultation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SEO Specialists</CardTitle>
                  <CardDescription>Optimize your website for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Keyword research and analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">On-page SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Technical SEO audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Content strategy for SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Link building strategies</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Consultation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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
                                <Badge
                                  variant="secondary"
                                  className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-100 mb-2"
                                >
                                  In 15 mins
                                </Badge>
                                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                                  UI/UX Designers
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
                                  Développeurs web
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
                                  Spécialistes SEO
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Matching Process</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We carefully match you with the right freelancers for your specific project needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Consultation</h3>
                  <p className="text-center text-muted-foreground">
                    Book a video consultation to discuss your project needs in detail.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Project Analysis</h3>
                  <p className="text-center text-muted-foreground">
                    We analyze your project requirements and identify the skills needed.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Freelancer Selection</h3>
                  <p className="text-center text-muted-foreground">
                    We select qualified freelancers from our vetted network.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Introduction</h3>
                  <p className="text-center text-muted-foreground">
                    We introduce you to the selected freelancers to begin your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Our Freelancers?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our network consists of carefully vetted professionals with proven track records.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Verified Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All freelancers in our network undergo a rigorous vetting process to ensure they have the skills
                      and experience they claim.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quality Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We regularly review the work of our freelancers to maintain high standards of quality and
                      professionalism.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Perfect Match</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our human-led matching process ensures you're connected with freelancers who not only have the
                      right skills but also align with your project vision.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Ongoing Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide ongoing support throughout your project to ensure smooth communication and successful
                      outcomes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Transparent Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our process is transparent from start to finish, with clear communication about rates, timelines,
                      and deliverables.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Satisfaction Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We stand behind our matching process and work with you to ensure you're satisfied with the
                      freelancers we recommend.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="/services">
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Consultation to Get Matched
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our freelancer matching service.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>How much does it cost to hire a freelancer?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Freelancer rates vary depending on their expertise, experience, and the complexity of your
                      project. During your consultation, we'll discuss budget considerations and help you find
                      freelancers who fit within your budget.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How long does the matching process take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      After your consultation, we typically provide freelancer recommendations within 2-3 business days.
                      The entire process from consultation to beginning work with a freelancer usually takes about a
                      week.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What if I'm not satisfied with the recommended freelancers?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If you're not satisfied with our initial recommendations, we'll work with you to understand your
                      concerns and provide alternative options until we find the right match for your project.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Do you offer any guarantees for the work done?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      While we can't guarantee specific project outcomes, we do ensure that all freelancers in our
                      network are qualified professionals. We also provide support throughout the project to help
                      resolve any issues that may arise.
                    </p>
                  </CardContent>
                </Card>
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

