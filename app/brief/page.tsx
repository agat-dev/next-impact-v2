"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BriefPage() {
  const [step, setStep] = useState(1)
  const [briefData, setBriefData] = useState({
    projectName: "",
    projectType: "",
    businessDescription: "",
    objectives: "",
    targetAudience: "",
    competitors: "",
    features: "",
    design: "",
    timeline: "",
    budget: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setBriefData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>MarketingDocs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
              Documentation
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/brief" className="text-sm font-medium hover:underline underline-offset-4">
              Create Brief
            </Link>
            <Link href="/freelancers" className="text-sm font-medium hover:underline underline-offset-4">
              Find Freelancers
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Create Your Project Brief
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Transform your ideas into a detailed project specification that you can share with freelancers or
                  agencies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      1
                    </div>
                    <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Project Basics</span>
                  </div>
                  <div className="hidden sm:block w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      2
                    </div>
                    <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Requirements</span>
                  </div>
                  <div className="hidden sm:block w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      3
                    </div>
                    <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Details</span>
                  </div>
                  <div className="hidden sm:block w-16 h-0.5 bg-muted"></div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      4
                    </div>
                    <span className={step >= 4 ? "font-medium" : "text-muted-foreground"}>Review</span>
                  </div>
                </div>
              </div>

              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Project Basics</CardTitle>
                    <CardDescription>Let's start with the fundamental information about your project.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name</Label>
                      <Input
                        id="projectName"
                        placeholder="E.g., Company Website Redesign"
                        value={briefData.projectName}
                        onChange={(e) => handleInputChange("projectName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        value={briefData.projectType}
                        onValueChange={(value) => handleInputChange("projectType", value)}
                      >
                        <SelectTrigger id="projectType">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website-new">New Website</SelectItem>
                          <SelectItem value="website-redesign">Website Redesign</SelectItem>
                          <SelectItem value="e-commerce">E-commerce Website</SelectItem>
                          <SelectItem value="landing-page">Landing Page</SelectItem>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Business Description</Label>
                      <Textarea
                        id="businessDescription"
                        placeholder="Describe your business, products, or services..."
                        value={briefData.businessDescription}
                        onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="objectives">Project Objectives</Label>
                      <Textarea
                        id="objectives"
                        placeholder="What are the main goals of this project? E.g., increase sales, improve brand awareness..."
                        value={briefData.objectives}
                        onChange={(e) => handleInputChange("objectives", e.target.value)}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled>
                      Back
                    </Button>
                    <Button onClick={nextStep}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Project Requirements</CardTitle>
                    <CardDescription>Tell us about your target audience and competitors.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="targetAudience">Target Audience</Label>
                      <Textarea
                        id="targetAudience"
                        placeholder="Describe your ideal customers or users (age, interests, behaviors, etc.)..."
                        value={briefData.targetAudience}
                        onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="competitors">Competitors</Label>
                      <Textarea
                        id="competitors"
                        placeholder="List your main competitors and what you like/dislike about their websites..."
                        value={briefData.competitors}
                        onChange={(e) => handleInputChange("competitors", e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="features">Key Features</Label>
                      <Textarea
                        id="features"
                        placeholder="What specific features or functionality do you need? E.g., contact form, blog, online store..."
                        value={briefData.features}
                        onChange={(e) => handleInputChange("features", e.target.value)}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>Let's get into the specifics of your project.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="design">Design Preferences</Label>
                      <Textarea
                        id="design"
                        placeholder="Describe your design preferences, including colors, style, examples of sites you like..."
                        value={briefData.design}
                        onChange={(e) => handleInputChange("design", e.target.value)}
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Textarea
                        id="timeline"
                        placeholder="When do you need this project completed? Any specific milestones or deadlines?"
                        value={briefData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <Select value={briefData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under €1,000</SelectItem>
                          <SelectItem value="1000-5000">€1,000 - €5,000</SelectItem>
                          <SelectItem value="5000-10000">€5,000 - €10,000</SelectItem>
                          <SelectItem value="10000-20000">€10,000 - €20,000</SelectItem>
                          <SelectItem value="over-20000">Over €20,000</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep}>
                      Review Brief
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review Your Brief</CardTitle>
                    <CardDescription>
                      Here's a summary of your project brief. Review and make any necessary changes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="summary" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="summary">Summary</TabsTrigger>
                        <TabsTrigger value="full">Full Brief</TabsTrigger>
                      </TabsList>
                      <TabsContent value="summary" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">Project Name</h3>
                          <p className="text-sm text-muted-foreground">{briefData.projectName || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Project Type</h3>
                          <p className="text-sm text-muted-foreground">
                            {briefData.projectType === "website-new" && "New Website"}
                            {briefData.projectType === "website-redesign" && "Website Redesign"}
                            {briefData.projectType === "e-commerce" && "E-commerce Website"}
                            {briefData.projectType === "landing-page" && "Landing Page"}
                            {briefData.projectType === "web-app" && "Web Application"}
                            {briefData.projectType === "other" && "Other"}
                            {!briefData.projectType && "Not specified"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Key Objectives</h3>
                          <p className="text-sm text-muted-foreground">{briefData.objectives || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Budget</h3>
                          <p className="text-sm text-muted-foreground">
                            {briefData.budget === "under-1000" && "Under €1,000"}
                            {briefData.budget === "1000-5000" && "€1,000 - €5,000"}
                            {briefData.budget === "5000-10000" && "€5,000 - €10,000"}
                            {briefData.budget === "10000-20000" && "€10,000 - €20,000"}
                            {briefData.budget === "over-20000" && "Over €20,000"}
                            {briefData.budget === "not-sure" && "Not sure yet"}
                            {!briefData.budget && "Not specified"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Timeline</h3>
                          <p className="text-sm text-muted-foreground">{briefData.timeline || "Not specified"}</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="full" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">Project Name</h3>
                          <p className="text-sm text-muted-foreground">{briefData.projectName || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Project Type</h3>
                          <p className="text-sm text-muted-foreground">
                            {briefData.projectType === "website-new" && "New Website"}
                            {briefData.projectType === "website-redesign" && "Website Redesign"}
                            {briefData.projectType === "e-commerce" && "E-commerce Website"}
                            {briefData.projectType === "landing-page" && "Landing Page"}
                            {briefData.projectType === "web-app" && "Web Application"}
                            {briefData.projectType === "other" && "Other"}
                            {!briefData.projectType && "Not specified"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Business Description</h3>
                          <p className="text-sm text-muted-foreground">
                            {briefData.businessDescription || "Not specified"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Project Objectives</h3>
                          <p className="text-sm text-muted-foreground">{briefData.objectives || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Target Audience</h3>
                          <p className="text-sm text-muted-foreground">{briefData.targetAudience || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Competitors</h3>
                          <p className="text-sm text-muted-foreground">{briefData.competitors || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Key Features</h3>
                          <p className="text-sm text-muted-foreground">{briefData.features || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Design Preferences</h3>
                          <p className="text-sm text-muted-foreground">{briefData.design || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Timeline</h3>
                          <p className="text-sm text-muted-foreground">{briefData.timeline || "Not specified"}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Budget</h3>
                          <p className="text-sm text-muted-foreground">
                            {briefData.budget === "under-1000" && "Under €1,000"}
                            {briefData.budget === "1000-5000" && "€1,000 - €5,000"}
                            {briefData.budget === "5000-10000" && "€5,000 - €10,000"}
                            {briefData.budget === "10000-20000" && "€10,000 - €20,000"}
                            {briefData.budget === "over-20000" && "Over €20,000"}
                            {briefData.budget === "not-sure" && "Not sure yet"}
                            {!briefData.budget && "Not specified"}
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="flex w-full justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button>
                        <FileText className="mr-2 h-4 w-4" />
                        Generate PDF
                      </Button>
                    </div>
                    <div className="w-full pt-4 border-t">
                      <div className="text-center space-y-2">
                        <h3 className="font-medium">Need expert help with your project?</h3>
                        <p className="text-sm text-muted-foreground">
                          Book a consultation with one of our digital marketing specialists to refine your brief and get
                          matched with the perfect freelancers.
                        </p>
                        <Link href="/services">
                          <Button variant="outline" className="mt-2">
                            Book a Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              )}
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

