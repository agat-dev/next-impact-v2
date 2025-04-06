
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Star } from "lucide-react";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import DocTabs from "@/components/documentation/doc-tabs"
import LottieAnimation1 from "@/components/ui/lottie-animation";
import { LottieAnimation2, LottieAnimation3, LottieAnimation4 } from "@/components/ui/lottie-animation";
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
import dynamic from "next/dynamic";
import { BentoFeatures } from "@/components/bentos";


export default function Home() {

  return (
    <>
      <main className="flex-1 bg-white w-10/12 mx-auto">

       {/* Hero Section */}
        <section className="flex align-center justify-center w-full pt-36 pb-24">
          <div className="h-full grid grid-cols-6 justify-center px-4 md:px-6">
              <div className="col-span-1 space-y-4 place-self-center align-self-end">
              <LottieAnimation2 />
              </div>
              <div className="grid col-span-4 align-self-center place-self-center space-y-8">
                <div className="space-y-2 text-center">
                  <TextAnimate className="text-regularblue font-googletitre" animation="blurIn" as="h1">Mener votre projet web</TextAnimate>
                  <TextAnimate className="text-regularblue font-googletitre" animation="blurIn" as="h1">en toute sérénité</TextAnimate>
                <div className="w-2/3 mx-auto">               
                  <h2 className="text-xl font-googletitre">
                  Notre plateforme vous accompagne à chaque étape pour passer de l'idée à un site web concret, pertinent et techniquement bien pensé.
                  </h2>
                </div>
                </div>
                <div className="flex justify-center gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 rounded-lg bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                    <Link href="/diagnostic" className="text-lg font-regular">Outils gratuits</Link>
                  </Button>
                  <Button size="lg" className="gap-1 rouded-lg bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">               
                    <Link href="/services" className="text-lg font-regular">Services</Link>
                  </Button>
                </div>
              </div>
            <div className="col-span-1 space-y-4">
              <LottieAnimation1 />
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex align-center justify-center w-full p-12">
            <BentoFeatures />
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-regular tracking-tighter md:text-4xl/tight">
                    Trouver le meilleur CMS pour son projet
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Répondez à quelques questions simples et découvrez la solution idéale pour votre projet web.
                  </p>
                   
                  <Button size="lg" className="gap-1">
                    <Link href="/quizz" className="text-xl font-regular">Commencer le quiz</Link>
                  </Button>
                  <LottieAnimation4 />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                              
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Image
                          src="/placeholder.svg?height=24&width=24&text=WP"
                          width={24}
                          height={24}
                          alt="WordPress"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="font-regular">WordPress</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Idéal pour les sites avec beaucoup de contenu et une grande flexibilité.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Image
                          src="/placeholder.svg?height=24&width=24&text=SB"
                          width={24}
                          height={24}
                          alt="Shopify"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="font-regular">Shopify</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Parfait pour les boutiques en ligne avec des fonctionnalités e-commerce avancées.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Image
                          src="/placeholder.svg?height=24&width=24&text=WX"
                          width={24}
                          height={24}
                          alt="Webflow"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="font-regular">Webflow</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Simple d'utilisation avec des templates modernes pour les débutants.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Image
                          src="/placeholder.svg?height=24&width=24&text=CS"
                          width={24}
                          height={24}
                          alt="Headless CMS"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="font-regular">Headless CMS</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Développement personnalisé pour des besoins spécifiques et des performances optimales.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Section */}
        <section id="audit" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-regular tracking-tighter md:text-4xl/tight">
                    Audit de votre site web
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Découvrez les points forts et les axes d'amélioration de votre site web avec notre audit en ligne.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Analyse technique complète</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Évaluation du SEO</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Analyse de l'expérience utilisateur</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Recommandations personnalisées</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Plan d'action détaillé</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Tester son site <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <LottieAnimation2 />

              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-regular tracking-tighter md:text-4xl/tight">
                  Services de conseil personnalisés
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Un accompagnement sur mesure pour vous aider à atteindre vos objectifs en ligne.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Basic"
                  width={300}
                  height={400}
                  alt="Basic Plan"
                  className="w-full object-cover absolute inset-0 h-full"
                />
                <CardContent className="p-6 relative z-20 mt-auto pt-24">
                  <h3 className="text-2xl font-regular">Consultation Simple</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Session vidéo de 30 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Analyse de votre projet</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Recommandations personnalisées</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold">99€</p>
                    <p className="text-sm text-muted-foreground">Session unique</p>
                  </div>
                  <Button className="mt-6 w-full">Réserver</Button>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-primary">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Populaire
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Pro"
                  width={300}
                  height={400}
                  alt="Pro Plan"
                  className="w-full object-cover absolute inset-0 h-full"
                />
                <CardContent className="p-6 relative z-20 mt-auto pt-24">
                  <h3 className="text-2xl font-regular">Conseil Créa</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">3 sessions vidéo de 30 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Analyse approfondie du besoin</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Formalisation d'un cahier des charges</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Conseil sur la solution technique</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Conseil au choix de prestataire</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold">399€</p>
                    <p className="text-sm text-muted-foreground">Pack de 3 sessions</p>
                  </div>
                  <Button className="mt-6 w-full">Réserver</Button>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Premium"
                  width={300}
                  height={400}
                  alt="Premium Plan"
                  className="w-full object-cover absolute inset-0 h-full"
                />
                <CardContent className="p-6 relative z-20 mt-auto pt-24">
                  <h3 className="text-2xl font-regular">Conseil Refonte</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">5 sessions vidéo de 30 minutes</span>
                    </div>
                    
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Audit personnalisé du site web</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Analyse approfondie du besoin</span>
                    </div>                    
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Formalisation d'un cahier des charges</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Conseil sur la solution technique</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Conseil au choix d'un prestataire</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold">499€</p>
                    <p className="text-sm text-muted-foreground">Pack de 5 sessions</p>
                  </div>
                  <Button className="mt-6 w-full">Réserver</Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <div className="mx-auto max-w-3xl rounded-lg border bg-muted p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Témoignage client</h3>
                    <p className="mt-2 text-muted-foreground">
                      "Grâce aux conseils de WebCreation, j'ai pu transformer mon site web et augmenter mes conversions
                      de 150% en seulement 3 mois. L'accompagnement était personnalisé et les recommandations
                      parfaitement adaptées à mon secteur d'activité."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Client"
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">Sophie Martin</p>
                        <p className="text-sm text-muted-foreground">Fondatrice, Boutique en ligne</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="w-full pb-12 md:py-24 lg:py-32 bg-background">
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

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="relative">
                <LottieAnimation3 />
                
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">À propos de notre expertise</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Avec plus de 10 ans d'expérience dans la création de sites web et le marketing digital, nous avons
                    aidé des centaines d'entreprises à réussir en ligne.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Notre équipe d'experts combine des compétences techniques pointues et une vision stratégique pour
                    vous offrir des solutions adaptées à vos besoins spécifiques.
                  </p>
                  <p>
                    Nous sommes certifiés par les plus grandes plateformes web et maintenons constamment nos
                    connaissances à jour pour vous proposer les meilleures pratiques du marché.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex h-12 w-auto items-center justify-center rounded-md border p-2">
                    <Image
                      src="/placeholder.svg?height=40&width=100&text=WordPress"
                      width={100}
                      height={40}
                      alt="WordPress"
                      className="h-8"
                    />
                  </div>
                  <div className="flex h-12 w-auto items-center justify-center rounded-md border p-2">
                    <Image
                      src="/placeholder.svg?height=40&width=100&text=Shopify"
                      width={100}
                      height={40}
                      alt="Shopify"
                      className="h-8"
                    />
                  </div>
                  <div className="flex h-12 w-auto items-center justify-center rounded-md border p-2">
                    <Image
                      src="/placeholder.svg?height=40&width=100&text=Google"
                      width={100}
                      height={40}
                      alt="Google"
                      className="h-8"
                    />
                  </div>
                  <div className="flex h-12 w-auto items-center justify-center rounded-md border p-2">
                    <Image
                      src="/placeholder.svg?height=40&width=100&text=Meta"
                      width={100}
                      height={40}
                      alt="Meta"
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ce que nos clients disent</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Découvrez comment nous avons aidé nos clients à transformer leur présence en ligne.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Grâce à l'audit marketing et aux conseils personnalisés, nous avons pu augmenter notre trafic de
                      200% en seulement 6 mois. Un investissement qui a largement porté ses fruits."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=Client${i}`}
                        width={40}
                        height={40}
                        alt={`Client ${i}`}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">Client {i}</p>
                        <p className="text-sm text-muted-foreground">Entreprise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Case+Study"
                    width={300}
                    height={300}
                    alt="Case Study"
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold">Étude de cas : E-commerce de mode</h3>
                  <p className="mt-2 text-muted-foreground">
                    Une boutique en ligne de mode a vu ses ventes augmenter de 300% après avoir suivi nos
                    recommandations et mis en place notre stratégie de marketing digital.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-primary">+300%</p>
                      <p className="text-sm text-muted-foreground">Augmentation des ventes</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">-40%</p>
                      <p className="text-sm text-muted-foreground">Réduction du coût d'acquisition</p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Lire l'étude complète
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Questions fréquentes</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Tout ce que vous devez savoir sur nos services et notre accompagnement.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Comment se déroule une consultation vidéo ?</AccordionTrigger>
                  <AccordionContent>
                    Nos consultations se déroulent via Zoom ou Google Meet. Avant la session, nous vous envoyons un
                    questionnaire pour mieux comprendre vos besoins. Pendant la session, nous analysons votre situation
                    actuelle, identifions les axes d'amélioration et vous proposons des solutions concrètes. Après la
                    session, vous recevez un résumé des points abordés et un plan d'action.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quel pack choisir pour mon projet ?</AccordionTrigger>
                  <AccordionContent>
                    Si vous débutez ou avez besoin d'un avis ponctuel, la consultation simple est idéale. Pour un projet
                    en cours de développement ou une refonte, le pack accompagnement vous permettra de bénéficier d'un
                    suivi sur plusieurs semaines. Pour les projets complexes ou stratégiques, l'accompagnement premium
                    offre un support complet et personnalisé.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Combien de temps faut-il pour voir des résultats ?</AccordionTrigger>
                  <AccordionContent>
                    Les premiers résultats sont généralement visibles dans les 4 à 8 semaines suivant la mise en place
                    des recommandations. Cependant, cela dépend de nombreux facteurs comme votre secteur d'activité, la
                    concurrence, et la nature des changements effectués. Nous définissons ensemble des objectifs
                    réalistes et un calendrier adapté à votre situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Proposez-vous des services de développement web ?</AccordionTrigger>
                  <AccordionContent>
                    Nous nous concentrons sur le conseil et l'accompagnement stratégique. Nous ne développons pas
                    directement les sites web, mais nous pouvons vous recommander des partenaires de confiance selon vos
                    besoins spécifiques. Notre expertise vous aide à définir précisément vos besoins pour obtenir un
                    site parfaitement adapté à vos objectifs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Comment fonctionne l'audit marketing ?</AccordionTrigger>
                  <AccordionContent>
                    Notre audit marketing comprend une analyse approfondie de votre site web, de votre stratégie de
                    contenu, de votre référencement, et de votre expérience utilisateur. Nous utilisons des outils
                    professionnels pour évaluer les performances techniques et marketing de votre site. Vous recevez
                    ensuite un rapport détaillé avec des recommandations concrètes et un plan d'action prioritaire.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Prêt à transformer votre présence en ligne ?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Réservez une consultation gratuite de 15 minutes pour discuter de votre projet et découvrir comment
                  nous pouvons vous aider.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Réserver ma consultation gratuite <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm">Ou inscrivez-vous à notre newsletter pour recevoir nos conseils et astuces</p>
              <div className="w-full max-w-sm">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                  />
                  <Button type="submit" variant="secondary">
                    S'inscrire
                  </Button>
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
    </>
  );
}
