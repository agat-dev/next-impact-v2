import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Smartphone, Database, Code, ArrowLeft, TrendingUp } from "lucide-react"
import { PriceQuizCard } from "@/components/tools"
import { CMSQuizCard } from "@/components/tools"
import Process from "@/components/process"
import { CTASection } from "@/components/cta-section"
import { DecisionHelper } from "@/components/decision-helper"
import { ApplicationsTabs } from "@/components/applications-tabs"
import { FeaturesTabs } from "@/components/services/features"
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Service de création de site web WordPress Headless Next.js | Next Impact",
    description: "Service de création de site web WordPress Headless Next.js pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigeances de qualité ou appplications web.",
    openGraph: {
      title: "Service de création de site web WordPress Headless Next.js | Next Impact",
      url: "https://next-impact.digital/services/headless",
      siteName: "Next Impact - Développeuse WordPress Freelance",
      description: "Service de création de site web WordPress pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigeances de qualité ou appplications web.",
      type: "website",
      images: [
        {
          url: "/img/avatar.png",
          width: 1200,
          height: 630,
          alt: "Next Impact - Développeuse WordPress Freelance",
        },
      ],
    },
  };
}

export default function ApplicationsHeadless() {

  const applications = [
            {
              key: "intranet",
              image: "/img/intranet.jpeg",
              title: "Intranets et Portails Collaboratifs",
              description: "Interfaces modernes pour la collaboration interne",
              examples: ["Tableaux de bord", "Gestion de projet", "Réseaux sociaux d'entreprise"],
            },
            {
              key: "b2b",
              image: "/img/b2b.jpeg",
              title: "Portails clients B2B",
              description: "Dashboards, espaces de commande, suivi de projets",
              examples: ["Tableaux de bord", "Intégrations ERP", "Espaces privés"],
            },
            {
              key: "saas",
              image: "/img/saas.jpeg",
              title: "Applications SaaS",
              description: "Interfaces de gestion, tableaux de bord analytiques",
              examples: ["Analytics temps réel", "Interfaces complexes", "Multi-tenant"],
            },
            {
              key: "mobile",
              image: "/img/mobile.jpeg",
              title: "Applications mobiles",
              description: "Apps iOS/Android consommant du contenu WordPress",
              examples: ["React Native", "APIs REST", "Synchronisation"],
            },
          ];
const features = [
  {
    title: "Intégrations Système Avancées",
    description: "APIs, synchronisation CRM/ERP",
    detailedDescription: "Intégration transparente avec vos systèmes métier pour une gestion centralisée.",
    benefits: ["Webhooks", "Connexion API externes", "Authentification sécurisée"],
    color: "transparent",
  },
  {
    title: "Design et Expérience Utilisateur Modernes",
    description: "Interfaces avancées avec animations ",
    detailedDescription: "Création d'interfaces utilisateur modernes et interactives pour une expérience optimale.",
    benefits: ["Animations fluides", "Composants réutilisables", "Accessibilité renforcée"],  
    color: "transparent",
  },
  {
    title: "Administration WordPress personnalisée",
    description: "Interface d'administration sur mesure pour les équipes",
    detailedDescription: "Personnalisation de l'interface d'administration WordPress pour une gestion simplifiée.",
    benefits: ["Champs personnalisés", "Menus simplifiés", "Rôles et permissions avancés"],
    color: "transparent",
  },
  {
    title: "Performances Accrues",
    description: "Chargement instantané, cache intelligent, CDN global",
    detailedDescription: "Optimisation des performances pour un chargement ultra-rapide et une expérience utilisateur fluide.",
    benefits: ["Génération statique", "Lazy loading", "Monitoring temps réel"],
    color: "transparent",
  },
]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}      
      <section className="container mx-auto px-4 md:py-16 pt-16 text-center">
        <Badge variant="outline" className="mb-4 border-regularblue/20 text-regularblue">
          Architecture moderne pour projets ambitieux
        </Badge>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
          Sites web <span className="text-regularblue/80">Headless</span>
        </h1>
        <p className="text-xl text-regularblue/80 max-w-3xl mx-auto mb-8">
          L'architecture qui libère votre contenu de ses contraintes d'affichage. WordPress headless sépare la gestion
          de contenu de son affichage pour une flexibilité maximale.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#services">
              <Button
                size="lg"
                className="gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80"
              >
                Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#tarifs">
              <Button
                size="lg"
                className="gap-1 rounded-full text-regularblue bg-extralightblue/40 hover:bg-extralightblue/30"
              >
                Tarifs
              </Button>
            </Link>
          </div>
      </section>

      {/* When Necessary */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4 text-regularblue">Quand est-ce nécessaire ?</h2>
          <p className="text-lg text-regularblue/80 max-w-2xl mx-auto">
            WordPress headless répond aux besoins techniques avancés que l'architecture traditionnelle ne peut
            satisfaire.
          </p>
          <CMSQuizCard />
        </div>

        {/*<div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Performances critiques",
              description: "Votre site nécessite des temps de chargement < 2 secondes",
            },
            {
              title: "Interfaces complexes",
              description: "Vous avez besoin d'interfaces utilisateur avancées et interactives",
            },
            {
              title: "Multi-canal",
              description: "Votre contenu doit être diffusé sur plusieurs canaux (web, mobile, kiosques)",
            },
            {
              title: "Intégrations système",
              description: "Vous devez intégrer étroitement vos systèmes métier (CRM, ERP, APIs)",
            },
          ].map((item, index) => (
            <Card key={index} className="max-w-3xs col-span-1 bg-transparent border-none text-center shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-googletitre text-regularblue font-medium">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mediumblue">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </section>

      {/* Applications (en tabs) */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-regularblue mb-4">Applications concrètes</h2>
          <p className="text-lg text-regularblue/80">
            Des solutions techniques avancées pour des besoins spécifiques
          </p>
        </div>
       <ApplicationsTabs applications={applications} />
      </section>

      {/* Technical Services */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1700px] left-0 h-[300px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[300px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
      <section className="pt-16" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium text-regularblue mb-4">Services techniques détaillés</h2>
            <p className="text-lg text-regularblue/80">Une expertise technique complète pour votre projet</p>
          </div>

          <FeaturesTabs features={features} />
        </div>
      </section>


      {/* Case Studies */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[2800px] left-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-10 blur-3xl"></div>
          <div className="absolute top-[3200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-10 blur-3xl"></div>
        </div>
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium text-regularblue mb-4">Cas d'usage détaillés</h2>
            <p className="text-lg text-regularblue/80">Exemples concrets d'applications réalisées</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dashboard Analytics B2B",
                need: "Interface complexe avec graphiques temps réel",
                solution: "WordPress pour paramétrage, React pour dataviz",
                result: "Chargement < 1s, mise à jour temps réel",
                metrics: ["Performance +300%", "UX moderne", "Données temps réel"],
              },
              {
                title: "Multisites Corporate",
                need: "Même données, 3 sites différents",
                solution: "WordPress central, Next.js pour chaque site",
                result: "Gestion centralisée, identités distinctes",
                metrics: ["3 sites = 1 gestion", "Identités préservées", "Coûts optimisés"],
              },
              {
                title: "Application Mobile + Web",
                need: "Contenu synchronisé web/mobile",
                solution: "WordPress headless + React Native",
                result: "Une seule base de contenu, 2 interfaces",
                metrics: ["Sync parfaite", "Développement accéléré", "Maintenance simplifiée"],
              },
              {
                title: "Intranet Évolutif",
                need: "Portail collaboratif haute performance",
                solution: "WordPress + Next.js + intégrations métier",
                result: "Interface moderne, données unifiées",
                metrics: ["Adoption +200%", "Productivité +150%", "Satisfaction équipes"],
              },
            ].map((caseStudy, index) => (
              <Card key={index} className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl font-googletitre text-regularblue font-medium">{caseStudy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong className="text-sm font-googletitre text-regularblue">Besoin :</strong>
                    <p className="text-sm text-regularblue/80">{caseStudy.need}</p>
                  </div>
                  <div>
                    <strong className="text-sm font-googletitre text-regularblue">Solution :</strong>
                    <p className="text-sm text-regularblue/80">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <strong className="text-sm font-googletitre text-regularblue">Résultat :</strong>
                    <p className="text-sm text-regularblue/80">{caseStudy.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {caseStudy.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-lightblue/10 text-regularblue">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[4800px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[5400px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>
      <section className="py-16" id="tarifs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium text-regularblue mb-4">Investissement réaliste</h2>
            <p className="text-lg text-regularblue/80">Budgétisation transparente pour projets techniques avancés</p>
          </div>

          <PriceQuizCard />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl font-googletitre font-medium text-regularblue">Headless</CardTitle>
                <CardDescription className="text-mediumblue">Fonctionnalités dédiées</CardDescription>
                <div className="text-3xl font-medium text-regularblue font-googletitre">2 500€ - 4 500k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture headless WordPress",
                    "Interface Next.js",
                    "Structure de contenus dédiée",
                    "Performance optimisée",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-mediumblue">
                      <CheckCircle className="h-4 w-4 text-regularblue font-googletitre" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full">
                <Button className="w-full mt-6 rounded-full bg-regularblue hover:bg-regularblue/80">Demander un devis</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative border-regularblue shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-lightblue"></div>
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-regularblue">Recommandé</Badge>
                <CardTitle className="text-2xl font-googletitre font-medium text-regularblue">Plateforme Corporate</CardTitle>
                <CardDescription className="text-mediumblue">Intégration d'outils externes</CardDescription>
                <div className="text-3xl font-medium text-regularblue font-googletitre">3 500€ - 6 000€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture scalable",
                    "Composants réutilisables",
                    "APIs REST/GraphQL",
                    "Intégration CRM/ERP",
                    "Performance avancée",
                    "Applications web + mobile",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-mediumblue">
                      <CheckCircle className="h-4 w-4 text-regularblue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full">
                <Button className="w-full mt-6 rounded-full bg-regularblue hover:bg-regularblue/80">Demander un devis</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl font-googletitre font-medium text-regularblue">Appli web & Mobile</CardTitle>
                <CardDescription className="text-mediumblue">Web + Mobile + APIs</CardDescription>
                <div className="text-3xl font-medium text-regularblue font-googletitre">Sur devis</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture microservices",
                    "APIs publiques",
                    "Application mobile React Native",
                    "Évolutivité maximale",
                    "Maintenance évolutive",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-mediumblue">
                      <CheckCircle className="h-4 w-4 text-regularblue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <Link href="/contact" className="w-full">
                <Button className="w-full mt-6 rounded-full bg-regularblue hover:bg-regularblue/80">Demander un devis</Button>
                </Link>              
                </CardContent>
            </Card>
          </div>

       </div>
      </section>

      {/* Process */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[5600px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[5900px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>

      <Process />

      {/* Decision Helper */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[6800px] left-0 h-[300px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[6900px] right-0 h-[300px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>
      <DecisionHelper />

      {/* CTA Section */}
      <CTASection />

      {/* Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link
            href="/services/wordpress"
            className="inline-flex items-center text-regularblue hover:text-regularblue/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Découvrir les Sites Corporate
          </Link>
          <Link href="/cms-headless" className="inline-flex items-center text-regularblue hover:text-regularblue/80">
            Choisir entre WordPress CMS et Headless
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
