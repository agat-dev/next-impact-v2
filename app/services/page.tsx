import Link from "next/link"
import { BookOpen, Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TextAnimate } from "@/components/magicui/text-animate"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
                <div className="container px-4 md:px-6">             
                  <div className="flex justify-center space-y-4 pt-8">
                      <TextAnimate animation="blurInUp" by="character" once>
                          Conseils d'experts
                      </TextAnimate>
                  </div>
                  <div className="flex justify-center space-y-4 py-8">                      
                </div>
              </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>30-Minute Quick Consultation</CardTitle>
                  <CardDescription>Get answers to your specific questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">€49</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">30-minute video call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Focused on specific questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Email summary of recommendations</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>1-Hour Strategy Session</CardTitle>
                    <div className="px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      Popular
                    </div>
                  </div>
                  <CardDescription>Deep dive into your marketing strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">€89</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">60-minute video call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Comprehensive strategy review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Actionable recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Follow-up email with resources</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Website Audit & Recommendations</CardTitle>
                  <CardDescription>Comprehensive review of your existing site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">€149</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">90-minute video call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Complete website audit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">SEO, UX, and content analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Detailed report with action items</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">2-week email support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Premium Packages</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive solutions for businesses looking for ongoing support and guidance.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Strategy Support</CardTitle>
                    <CardDescription>Ongoing guidance for your digital marketing efforts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">€299/month</div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Two 60-minute video calls per month</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Priority email support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Monthly performance review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Access to premium documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Discounted freelancer matching</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Website Launch Package</CardTitle>
                    <CardDescription>Comprehensive support for launching a new website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">€599</div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Pre-launch strategy session (90 min)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Complete SEO setup guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Content strategy development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Launch day support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">Post-launch review (60 min)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">30 days of email support</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Package
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Simple process to get the expert guidance you need for your digital marketing projects.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Book a Session</h3>
                  <p className="text-center text-muted-foreground">
                    Choose the consultation type that best fits your needs and select a convenient time slot.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Prepare for the Call</h3>
                  <p className="text-center text-muted-foreground">
                    Fill out a brief questionnaire to help our experts prepare for your specific needs.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Get Expert Advice</h3>
                  <p className="text-center text-muted-foreground">
                    Connect via video call and receive personalized guidance and actionable recommendations.
                  </p>
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
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our consultation services.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">How do I prepare for my consultation?</h3>
                  <p className="mt-2 text-muted-foreground">
                    After booking, you'll receive a questionnaire to help our experts understand your needs. Complete
                    this before your call and have your website and any relevant materials ready to share.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">What happens if I need to reschedule?</h3>
                  <p className="mt-2 text-muted-foreground">
                    You can reschedule your appointment up to 24 hours before the scheduled time through the
                    confirmation email you received.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">Do I need technical knowledge for these consultations?</h3>
                  <p className="mt-2 text-muted-foreground">
                    No technical knowledge is required. Our experts will explain concepts in clear, accessible language
                    and provide guidance that matches your level of expertise.
                  </p>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="text-lg font-bold">How soon can I expect results after implementing your advice?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Results vary depending on the recommendations and how quickly they're implemented. Some changes may
                    show immediate improvements, while others (like SEO) may take weeks or months to fully realize their
                    impact.
                  </p>
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

