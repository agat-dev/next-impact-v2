import Link from "next/link"
import { BookOpen, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FreelancersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find the Perfect Freelancer
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  After your consultation, we'll match you with verified professionals who can bring your project to
                  life.
                </p>
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

