
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
import LottieAnimation from "@/components/ui/lottie-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import Question from "@/components/ui/questions-list"; // Ensure this path is correct and the component exists
import { ExpandableCardNIP } from "@/components/ui/expandable-cards";
import { LoadingCarousel } from "@/components/ui/loading-carousel";
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
import { Timeline } from "@/components/ui/timeline";
import FeatureCarousel from "@/components/ui/feature-carousel";


export default function Home() {

  return (
    <>
      <main className="flex-1">

       {/* Hero Section */}
        <section className="grid grid-cols-12 w-full h-full min-h-[92vh]">
              <div className="col-span-3 place-items-end mt-[30vh]">
              <LottieAnimation animationPath="/lotties/astronaut-need-help.json" width="30rem"/>
              </div>
              <div className="col-span-6 place-content-center">
                <div className="text-center">
                  <Image
                    src="/img/logo.png"
                    width={170}
                    height={100}
                    alt="Logo Next Impact"
                    className="mx-auto mb-16"
                  />                  
                  <TextAnimate animation="blurIn" as="h1">Conseil & Services en création de site web</TextAnimate>
                </div>
                <div className="w-10/12 pt-2 pb-6 space-y-2 mx-auto text-center">  
                  <p className="text-lg font-regular font-googletitre text-regularblue">
                  Que vous réalisiez votre site web vous-même ou que vous vouliez faire 
                  appel à un prestataire, nous vous accompagnons dans votre projet dans la jungle des technos, 
                  des bonnes pratiques et du marché des sites web.
                  </p> 
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <Link href="/learning-paths/ux">
                    <Button className="gap-1 rounded-3xl bg-regularblue text-base text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">Je veux un site web</Button>
                  </Link>
                  <Link href="/learning-paths/seo">
                    <Button variant="outline" className="gap-1 rounded-3xl border border-regularblue/30 text-base hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">Je veux du conseil</Button>
                  </Link>
                </div>
              </div>
            <div className="col-span-3 place-items-start mt-[20vh]">
              <LottieAnimation animationPath="/lotties/astronaut-sitting-planet-waving-hand.json" width="22rem"/>
              </div>

        </section>


      {/* Personas Section */}
        <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 pb-12">
              <TextAnimate animation="blurIn" as="h2">Pour ceux qui veulent maîtriser leur projet</TextAnimate>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <LottieAnimation animationPath="/lotties/astronaut-in-pencil.json" width="8rem" height="8rem"/>
                    <h3 className="text-2xl font-bold text-regularblue">Associations et ESS</h3>
                    <p className="text-base font-regular font-googletitre text-regularblue">
                      Vous avez besoin d'un site web efficace mais facile à gérer ?<br />
                    </p>
                  </div>
                  <Link href="/learning-paths/seo">
                    <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">Solutions web pour l'ESS</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <LottieAnimation animationPath="/lotties/super-astronaut.json" width="8rem" height="8rem"/>
                    <h3 className="text-2xl font-bold text-regularblue">Indépendants</h3>
                    <p className="text-base font-regular font-googletitre text-regularblue">
                      Vous voulez un site web professionnel tout simplement ?<br />
                    </p>
                  </div>
                  <Link href="/learning-paths/ux">
                    <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">Solutions web pour TPE</Button>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                  <LottieAnimation animationPath="/lotties/astronaut-in-rocket.json" width="8rem" height="8rem"/>
                    <h3 className="text-2xl font-bold text-regularblue">Entreprises</h3>
                    <p className="text-base font-regular font-googletitre text-regularblue">
                      Votre site web doit être à votre image et performant ?
                    </p>
                  </div>
                  <Link href="/learning-paths/content">
                    <Button className="gap-1 rounded-3xl bg-white border border-regularblue/30 hover:bg-regularblue/80 text-darkblue-600 hover:text-white transition-all duration-900 ease-in-out">Solutions pour Entreprises</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Tools section */}
        <section className="py-12 md:py-24 lg:py-32">
            <div className="pb-12 text-center">
              <TextAnimate animation="blurIn" as="h2">Des outils en ligne gratuits</TextAnimate>
              </div>
            <div className="flex justify-center align-center px-4 md:px-6">              
              <ExpandableCardNIP />
            </div>
          </section>
      

      {/* Services Section */}
      <section className="w-full py-12 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <TextAnimate animation="blurIn" as="h2">
                Des services personnalisés
              </TextAnimate>
              <p className="text-lg font-regular font-googletitre text-regularblue">
                Un accompagnement conçu sur votre besoin pour vous aider à atteindre vos objectifs en ligne.
              </p> 
            </div>
          </div>
          <div className="mx-auto grid grid-cols-2 max-w-5xl items-start gap-12 py-12">
            <Card className="relative col-span-1">
              <CardContent className="gap-6 p-6 relative z-20 mt-auto pt-4">
                <div className="h-full mb-4 p-4 flex flex-col items-center justify-center">
                  {
                <Image
                  src="/img/astronauts-meeting.png"
                  width={100}
                  height={200}
                  alt="Consultation"
                  className="object-contain"
                />
                }
                <h3 className="text-2xl font-bold text-center text-regularblue uppercase">Conseil</h3>
                </div>
                <div className="p-4">
                  <div>
                    <Image
                      src="/img/pack-creation-conseil.png"
                      alt="Meeting animation"
                      width={97}
                      height={120} 
                      className="mb-4 col-span-2 object-contain"
                      />
                      <div className="col-span-6 flex flex-col gap-3 pt-4">
                        <div className="flex items-center">
                        <Image 
                            src="/img/meet.gif"
                            alt="Meeting animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">3 sessions vidéo de 30 minutes</span>
                        </div>
                        <div className="flex items-center">
                        <Image 
                            src="/img/settings.gif"
                            alt="Analyse du besoin animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Analyse approfondie du besoin</span>
                        </div>
                        <div className="flex items-center">
                        <Image 
                            src="/img/folder.gif"
                            alt="Cahier des charges animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Formalisation d'un cahier des charges</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/code.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Conseil sur la solution technique</span>
                        </div>  
                      </div> 
                  </div>
                  <div className="mt-16">
                    <Image
                      src="/img/pack-refonte-conseil.png"
                      alt="Meeting animation"
                      width={88}
                      height={120} 
                      className="mb-4 col-span-2 object-contain"
                      />
                      <div className="col-span-6 flex flex-col gap-3 pt-4">
                        <div className="flex items-center">
                        <Image 
                            src="/img/meet.gif"
                            alt="Meeting animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">4 sessions vidéo de 30 minutes</span>
                        </div>
                        <div className="flex items-center">
                        <Image 
                            src="/img/settings.gif"
                            alt="Analyse du besoin animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Analyse approfondie du besoin</span>
                        </div>
                        <div className="flex items-center">
                        <Image 
                            src="/img/tools.gif"
                            alt="Audit animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Audit du site actuel</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/folder.gif"
                            alt="Cahier des charges animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Formalisation d'un cahier des charges</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/code.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Conseil sur la solution technique</span>
                        </div>  
                      </div> 
                  </div>
                </div>
                {/*}
                <div className="mt-6">
                  <p className="text-3xl font-bold">99€</p>
                  <p className="text-sm text-muted-foreground">Session unique</p>
                </div>
                */}
                <div className="w-full flex justify-center mt-10">
                  <Link href="/learning-paths/seo">
                    <Button className="gap-1 rounded-3xl bg-regularblue  hover:bg-regularblue/80 text-white transition-all duration-900 ease-in-out">Accompagnements</Button>
                  </Link>
                  </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-1">
              <CardContent className="gap-6 p-6 relative z-20 mt-auto pt-4 bg-white">
                <div className="h-full p-4 mb-4 flex flex-col items-center justify-center">
                <Image
                  src="/img/astronauts-meeting.png"
                  width={100}
                  height={200}
                  alt="Consultation"
                  className="object-contain"
                /> 
                <h3 className="text-2xl font-bold text-center text-regularblue uppercase">Développement web</h3>
                </div>
                <div className="p-4">
                  <div>
                    <Image
                      src="/img/wordpress-dev.png"
                      alt="Meeting animation"
                      width={124}
                      height={120} 
                      className="mb-4 col-span-2 object-contain"
                      />
                        <div className="col-span-6 flex flex-col gap-3 pt-4">
                        <div className="flex items-center">
                        <Image 
                            src="/img/site-vitrine.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Site vitrine - 5 à 10 pages</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/site-corporate.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Site corporate - 15 à 50 pages</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/media.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Blog / Média en ligne</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/e-learning.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">E-learning</span>
                        </div>   
                      </div> 
                  </div>
                  <div className="mt-16">
                    <Image
                      src="/img/headless-dev.png"
                      alt="Meeting animation"
                      width={109}
                      height={120} 
                      className="mb-4 col-span-2 object-contain"
                      />
                        <div className="col-span-6 flex flex-col gap-3 pt-4">
                        <div className="flex items-center">
                        <Image 
                            src="/img/site-corporate.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Site corporate</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/info-doc.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Plateforme d'information</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/media.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Blog / Média en ligne</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/e-learning.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">E-learning</span>
                        </div>  
                        <div className="flex items-center">
                        <Image 
                            src="/img/web-app.gif"
                            alt="Solution technique animation"
                            width={20}
                            height={20}
                            className="mr-2 text-primary" />
                          <span className="text-sm">Applications web</span>
                        </div>  
                      </div> 
                  </div>
                </div>
                {/*}
                <div className="mt-6">
                  <p className="text-3xl font-bold">99€</p>
                  <p className="text-sm text-muted-foreground">Session unique</p>
                </div>
                */}
                <div className="w-full flex justify-center mt-10">
                  <Link href="/learning-paths/seo">
                    <Button className="gap-1 rounded-3xl bg-regularblue  hover:bg-regularblue/80 text-white transition-all duration-900 ease-in-out">Créations et refontes</Button>
                  </Link>
                  </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-2 overflow-hidden">
              <CardContent className="gap-6 p-6 relative z-20 mt-auto pt-4 bg-white">
                <div className="h-full p-4 mb-4 flex flex-col items-center justify-center">
                {/*<Image
                  src="/img/astronauts-meeting.png"
                  width={100}
                  height={200}
                  alt="Consultation"
                  className="object-contain"
                /> */}
                <h3 className="text-2xl font-bold text-center text-regularblue uppercase">consultation</h3>
                <span className="text-base text-center">Session vidéo unique de 30 minutes</span>
                </div>
                {/*}
                <div className="mt-6">
                  <p className="text-3xl font-bold">99€</p>
                  <p className="text-sm text-muted-foreground">Session unique</p>
                </div>
                */}
                <div className="w-full flex justify-center">
                  <Link href="/learning-paths/seo">
                    <Button className="gap-1 rounded-3xl bg-regularblue  hover:bg-regularblue/80 text-white transition-all duration-900 ease-in-out">Prendre RDV</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
           
          </div>
          <div className="mt-8">
            <div className="mx-auto max-w-3xl rounded-lg border p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-regularblue">Témoignage client</h3>
                  <p className="mt-2">
                    "Échanges constructifs, livrable impeccable, délai respecté ! Combo parfait."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-[70px] w-[70px] flex justify-center align-center rounded-full overflow-hidden bg-white">
                    <Image
                      src="/img/geofit-logo.jpg"
                      width={60}
                      height={60}
                      alt="logo client Geofit"
                      className="object-contain"
                    />
                    </div>
                    <div>
                      <p className="font-medium">Justine Denechere</p>
                      <p className="text-sm text-muted-foreground">Communicante, Geofit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base de connaissances Section */}
      <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <div className="pb-12">
              <TextAnimate animation="blurIn" as="h2">Des infos pour décider</TextAnimate>
              </div>
                  <DocTabs />

            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="relative">
                
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                <TextAnimate animation="blurIn" as="h2">Expertise et éthique</TextAnimate>
                  <p className="max-w-[600px] text-lg font-regular font-googletitre text-regularblue">
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
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <TextAnimate animation="blurIn" as="h2">Nos clients en parlent</TextAnimate>
                <p className="mx-auto max-w-[700px] text-lg font-regular font-googletitre text-regularblue">
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <TextAnimate animation="blurIn" as="h2">Questions fréquentes</TextAnimate>
                <p className="mx-auto max-w-[700px] text-lg font-regular font-googletitre text-regularblue">
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
        <section className="w-full py-12 md:py-24 lg:py-32 ">
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

     {/* Carousel Section 
        <section className="flex align-center justify-center w-4/6 m-auto p-4 mt-8 mb-12">         
          <FeatureCarousel
            title=""
            description=""
            image={{
              step1light1: "", // Replace with the actual path to your image
              step1light2: "/path/to/image2.jpg", // Replace with the actual path to your image
              step2light1: "/path/to/image3.jpg", // Replace with the actual path to your image
              step2light2: "/path/to/image4.jpg", // Replace with the actual path to your image
              step3light: "/path/to/image5.jpg", // Replace with the actual path to your image
              step4light: "/path/to/image6.jpg", // Replace with the actual path to your image
              alt: "Feature showcase",
            }}
          />
        </section>
        */}

        {/* Features Section 
        <section className="flex align-center justify-center w-10/12 mx-auto py-24">
            <Timeline data={[
              { title: "Prendre les bonnes infos", content:                   
                  <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                  <div className="grid grid-cols-4 row-span-1 gap-4">  
                    <div className='grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS personnalisé
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    Headless CMS
                    </div>
                  </a> 
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    Développement personnalisé
                    </div>
                  </a> 
              </div>  
              <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                    <Link href="/documentation" className="text-base font-regular">Auditer mon site web</Link>
                  </Button>
                </div>
                  </div>
                  
                  </div>},
              { title: "Explorer les meilleures solutions", content: 
              <div className="grid py-6 md:w-[600px] lg:w-[800px]">
              <div className="grid grid-cols-4 row-span-1 gap-4">
                <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                  <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                  <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                    <Link href="/quizz" className="text-base font-regular">Choisir mon CMS</Link>
                  </Button>
                </div>
              <div className='grid col-span-2 row-span-1 row h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS pour vitrines
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS pour site de contenus
                    </div>
                  </a>
                  <a href="/audit" title="Audit de site web">
                    <div className="bg-white h-max rounded-md p-4">
                    CMS E-commerce
                    </div>
                  </a> 
              </div>  



              </div>
              </div>},
              { title: "Préparer son projet", content: 
                <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                <div className="grid grid-cols-4 row-span-1 gap-4">
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Faire mon cahier des charges</Link>
                    </Button>
                  </div>  
  
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Estimer le coût</Link>
                    </Button>
                  </div>  
  
  
                </div>
                </div>
               },              
              { title: "Lancer son projet web", content: 
                <div className="grid py-6 md:w-[600px] lg:w-[800px]">
                <div className="grid grid-cols-4 row-span-1 gap-4">
                  <div className="grid col-span-2 row-span-1 h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md">
                    <LottieAnimation animationPath="/lotties/thoughtful-astronaut.json" width="10rem" height="10rem"/>
                    <Button size="sm" className="gap-1 rounded-3xl bg-regularblue text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out">
                      <Link href="/quizz" className="text-base font-regular">Faire appel à un prestataire</Link>
                    </Button>
                  </div>
                <div className='grid col-span-2 row-span-1 row h-full rounded-md bg-gradient-to-b from-lightblue/10 to-lightblue/10 p-6 no-underline outline-none focus:shadow-md'>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS pour vitrines
                      </div>
                    </a>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS pour site de contenus
                      </div>
                    </a>
                    <a href="/audit" title="Audit de site web">
                      <div className="bg-white h-max rounded-md p-4">
                      CMS E-commerce
                      </div>
                    </a> 
                </div>  
  
  
  
                </div>
                </div>
               },
            ]} />
        </section>
        */}







    </>
  );
}
