"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Smartphone, Database, Code, ArrowLeft, TrendingUp } from "lucide-react"
import TechnicalComparison from "@/components/technical-comparaison"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { CMSQuizCard } from "@/components/tools"
import { MagicCard } from "@/components/magicui/magic-card"

export default function ApplicationsHeadless() {
  // Ajout du state pour le tab sélectionné
  const [tab, setTab] = useState("tous")

  return (
    <div className="min-h-screen">

      {/* Hero Section */}      
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="outline" className="mb-4 border-regularblue/20 text-regularblue">
          Architecture moderne pour projets ambitieux
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Applications Web <span className="text-blue-600">Headless</span>
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
          <h2 className="text-3xl font-bold mb-4 text-regularblue">Quand est-ce nécessaire ?</h2>
          <p className="text-lg text-regularblue/80 max-w-2xl mx-auto">
            WordPress headless répond aux besoins techniques avancés que l'architecture traditionnelle ne peut
            satisfaire.
          </p>
          <CMSQuizCard />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap className="h-8 w-8 text-lightblue" />,
              title: "Performances critiques",
              description: "Votre site nécessite des temps de chargement < 2 secondes",
            },
            {
              icon: <Code className="h-8 w-8 text-lightblue" />,
              title: "Interfaces complexes",
              description: "Vous avez besoin d'interfaces utilisateur avancées et interactives",
            },
            {
              icon: <Smartphone className="h-8 w-8 text-lightblue" />,
              title: "Multi-canal",
              description: "Votre contenu doit être diffusé sur plusieurs canaux (web, mobile, kiosques)",
            },
            {
              icon: <Database className="h-8 w-8 text-lightblue" />,
              title: "Intégrations système",
              description: "Vous devez intégrer étroitement vos systèmes métier (CRM, ERP, APIs)",
            },
          ].map((item, index) => (
            <Card key={index} className="max-w-3xs col-span-1 bg-transparent border-none text-center shadow-none">
              <CardHeader>
                <div className="mx-auto mb-4">{item.icon}</div>
                <CardTitle className="text-2xl font-adobetitre text-regularblue font-medium">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mediumblue">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications (en tabs) */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-regularblue mb-4">Applications concrètes</h2>
          <p className="text-lg text-regularblue/80">
            Des solutions techniques avancées pour des besoins spécifiques
          </p>
        </div>

        {(() => {
          const APPLICATIONS = [
            {
              type: "ecommerce",
              image: "/img/ecommerce.jpeg",
              title: "E-commerce avancé",
              description: "Catalogues avec filtres complexes, configurateurs produit",
              examples: ["Configurateurs", "Filtres avancés", "Performance critique"],
            },
            {
              type: "b2b",
              image: "/img/b2b.jpeg",
              title: "Portails clients B2B",
              description: "Dashboards, espaces de commande, suivi de projets",
              examples: ["Tableaux de bord", "Intégrations ERP", "Espaces privés"],
            },
            {
              type: "saas",
              image: "/img/saas.jpeg",
              title: "Applications SaaS",
              description: "Interfaces de gestion, tableaux de bord analytiques",
              examples: ["Analytics temps réel", "Interfaces complexes", "Multi-tenant"],
            },
            {
              type: "mobile",
              image: "/img/mobile.jpeg",
              title: "Applications mobiles",
              description: "Apps iOS/Android consommant du contenu WordPress",
              examples: ["React Native", "APIs REST", "Synchronisation"],
            },
          ];

          const TABS = [
            { value: "ecommerce", label: "E-commerce" },
            { value: "b2b", label: "Portails B2B" },
            { value: "saas", label: "SaaS" },
            { value: "mobile", label: "Mobile" },
          ];

            // Affiche le premier tab par défaut
            if (tab === "tous") setTab(TABS[0].value);

            const getAppsByTab = (tab: string) =>
            APPLICATIONS.filter((app) => app.type === tab);

          return (
            <Tabs value={tab} onValueChange={setTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="bg-white p-1 rounded-full">
                  {TABS.map((tabItem) => (
                    <TabsTrigger
                      key={tabItem.value}
                      value={tabItem.value}
                      className="rounded-full data-[state=active]:bg-background/10"
                    >
                      {tabItem.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <AnimatePresence mode="wait">
                {TABS.map((tabItem) =>
                  tab === tabItem.value ? (
                    <TabsContent key={tabItem.value} value={tabItem.value} forceMount className="mt-0">
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                          {getAppsByTab(tabItem.value).map((app, index) => (
                            <Card key={index} className="w-max flex rounded-2xl mx-auto">
                              <div className="w-1/4 lg:block">
                                <Image
                                  src={app.image}
                                  alt={app.title}
                                  className="h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                                  width={300}
                                  height={300}
                                />
                                </div>
                              <div>
                              <CardHeader>
                                <CardTitle className="text-3xl text-regularblue font-adobetitre font-medium">{app.title}</CardTitle>
                                <CardDescription className="text-regularblue">{app.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="h-full flex flex-col items-start gap-4 pl-2">
                                  {app.examples.map((example, i) => (
                                    <div key={i} className="w-max text-sm font-adobetitre text-regularblue bg-lightblue/10 px-3 py-1 rounded-full">
                                      {example}
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                              </div>
                            </Card>
                          ))}
                      </motion.div>
                    </TabsContent>
                  ) : null
                )}
              </AnimatePresence>
            </Tabs>
          );
        })()}
      </section>

      {/* Technical Services */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1700px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-regularblue mb-4">Services techniques détaillés</h2>
            <p className="text-lg text-regularblue/80">Une expertise technique complète pour votre projet</p>
          </div>

          <div className="rounded-2xl grid gap-12">
            {[
              {
                icon: <Zap className="h-6 w-6 text-lightblue" />,
                image: "/img/performances.jpeg",
                title: "Performances Accrues",
                problem: "WordPress traditionnel charge l'ensemble du CMS à chaque page",
                features: [
                  "Génération statique pour chargement instantané",
                  "Cache intelligent au niveau composant",
                  "CDN global pour distribution optimale",
                  "Lazy loading et bundle optimization",
                  "Monitoring performance temps réel",
                ],
              },
              {
                icon: <Code className="h-6 w-6 text-lightblue" />,
                image: "/img/ui.jpeg",
                title: "Design et Expérience Utilisateur Modernes",
                problem: "Les thèmes WordPress limitent les possibilités d'interface",
                features: [
                  "Frameworks modernes (React, Vue.js, Angular)",
                  "Composants interactifs avec animations",
                  "Progressive Web App (PWA)",
                  "Responsive avancé multi-dispositifs",
                  "Accessibilité native WCAG intégrée",
                ],
              },
              {
                icon: <Database className="h-6 w-6 text-lightblue" />,
                image: "/img/fonctionnalites.jpg",
                title: "Intégrations Système Avancées",
                problem: "Connecter WordPress à vos outils métier de façon fiable",
                features: [
                  "APIs RESTful et GraphQL",
                  "Synchronisation bidirectionnelle CRM/ERP",
                  "Webhooks et actions automatiques",
                  "Single Sign-On (SSO)",
                  "Middleware custom pour protocoles propriétaires",
                ],
              },
            ].map((service, index) => (
              <MagicCard>
              <Card key={index} className="flex overflow-hidden border-pink-200/40 rounded-2xl shadow-none">
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="h-full max-h-64 object-cover"
                      width={100}
                      height={300}
                    />
                    </div>
                  <div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-8">
                    {service.icon}
                    <CardTitle className="text-xl text-regularblue font-googletitre font-medium">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-regularblue">
                    <strong>Le problème résolu :</strong> {service.problem}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lightblue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-mediumblue">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
              </Card>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}      
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[2600px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[3100px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="ext-4xl font-bold text-regularblue mb-4">Comment ça fonctionne concrètement</h2>
          <p className="text-lg text-muted-foregroundtext-lg text-regularblue/80">
            Architecture technique découplée pour une flexibilité maximale
          </p>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-regularblue" />
              </div>
              <h3 className="font-semibold text-regularblue">Backend WordPress</h3>
              <ul className="text-sm text-regularblue/80 space-y-2">
                <li>• Gestion contenu familière</li>
                <li>• Plugins de champs personnalisés</li>
                <li>• Configuration API et sécurité</li>
                <li>• Équipes existantes conservées</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-regularblue" />
              </div>
              <h3 className="font-semibold text-regularblue">Couche API</h3>
              <ul className="text-sm text-regularblue/80 space-y-2">
                <li>• Endpoints REST automatiques</li>
                <li>• GraphQL pour requêtes optimisées</li>
                <li>• Cache Redis/Memcached</li>
                <li>• Authentification JWT sécurisée</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-8 w-8 text-regularblue" />
              </div>
              <h3 className="font-semibold text-regularblue">Frontend Découplé</h3>
              <ul className="text-sm text-regularblue/80 space-y-2">
                <li>• Framework JavaScript moderne</li>
                <li>• Build tools optimisés</li>
                <li>• Déploiement CDN global</li>
                <li>• Monitoring performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[3800px] left-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-10 blur-3xl"></div>
          <div className="absolute top-[4200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-10 blur-3xl"></div>
        </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cas d'usage détaillés</h2>
            <p className="text-lg text-muted-foreground">Exemples concrets d'applications réalisées</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: "📊 Dashboard Analytics B2B",
                need: "Interface complexe avec graphiques temps réel",
                solution: "WordPress pour paramétrage, React pour dataviz",
                result: "Chargement < 1s, mise à jour temps réel",
                metrics: ["Performance +300%", "UX moderne", "Données temps réel"],
              },
              {
                icon: <Smartphone className="h-6 w-6 text-blue-600" />,
                title: "🛒 E-commerce Multi-Marques",
                need: "Même catalogue, 3 sites différents",
                solution: "WordPress central, frontends spécialisés",
                result: "Gestion centralisée, identités distinctes",
                metrics: ["3 sites = 1 gestion", "Identités préservées", "Coûts optimisés"],
              },
              {
                icon: <Code className="h-6 w-6 text-blue-600" />,
                title: "📱 Application Mobile + Web",
                need: "Contenu synchronisé web/mobile",
                solution: "WordPress headless + React Native",
                result: "Une seule base de contenu, 2 interfaces",
                metrics: ["Sync parfaite", "Développement accéléré", "Maintenance simplifiée"],
              },
              {
                icon: <Database className="h-6 w-6 text-blue-600" />,
                title: "🏢 Intranet Évolutif",
                need: "Portail collaboratif haute performance",
                solution: "WordPress + Next.js + intégrations métier",
                result: "Interface moderne, données unifiées",
                metrics: ["Adoption +200%", "Productivité +150%", "Satisfaction équipes"],
              },
            ].map((caseStudy, index) => (
              <Card key={index} className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {caseStudy.icon}
                    <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong className="text-sm text-blue-600">Besoin :</strong>
                    <p className="text-sm text-muted-foreground">{caseStudy.need}</p>
                  </div>
                  <div>
                    <strong className="text-sm text-blue-600">Solution :</strong>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <strong className="text-sm text-blue-600">Résultat :</strong>
                    <p className="text-sm text-muted-foreground">{caseStudy.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {caseStudy.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investissement réaliste</h2>
            <p className="text-lg text-muted-foreground">Budgétisation transparente pour projets techniques avancés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Application Métier</CardTitle>
                <CardDescription>Interface utilisateur avancée</CardDescription>
                <div className="text-3xl font-bold text-blue-600">20k€ - 40k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture headless",
                    "Interface React/Vue.js",
                    "APIs personnalisées",
                    "Intégrations système",
                    "Performance optimisée",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Demander un devis</Button>
              </CardContent>
            </Card>

            <Card className="relative border-blue-200 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-700">Recommandé</Badge>
                <CardTitle className="text-xl">Plateforme E-commerce</CardTitle>
                <CardDescription>Solution haute performance</CardDescription>
                <div className="text-3xl font-bold text-blue-600">30k€ - 60k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture scalable",
                    "Interface e-commerce avancée",
                    "Intégrations paiement",
                    "Gestion stock temps réel",
                    "Analytics avancées",
                    "Support technique dédié",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Demander un devis</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Système Multi-Canal</CardTitle>
                <CardDescription>Web + Mobile + APIs</CardDescription>
                <div className="text-3xl font-bold text-blue-600">40k€ - 80k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture microservices",
                    "Applications web + mobile",
                    "APIs publiques",
                    "Intégrations complexes",
                    "Évolutivité maximale",
                    "Maintenance évolutive",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Demander un devis</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>ROI typique :</strong> 12-36 mois selon les gains de performance •
              <strong> Coûts récurrents :</strong> Hébergement performant +30% vs standard + maintenance technique
              spécialisée
            </p>
          </div>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment déterminer si le headless vous convient</h2>
          <p className="text-lg text-muted-foreground">Critères de décision pour une architecture headless</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700">✅ Headless recommandé si :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Performance critique (< 2 secondes impératif)",
                  "Interface utilisateur complexe requise",
                  "Multi-canal prévu (web + mobile + autres)",
                  "Intégrations système nombreuses",
                  "Équipe technique disponible",
                  "Budget conséquent acceptable",
                  "Évolutivité long terme prioritaire",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700">❌ WordPress traditionnel si :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Site vitrine ou institutionnel classique",
                  "Équipe non technique",
                  "Budget limité",
                  "Mise en ligne rapide nécessaire",
                  "Fonctionnalités standard suffisantes",
                  "Maintenance simple souhaitée",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Évaluons ensemble la pertinence technique</h2>
          <p className="text-xl mb-8 opacity-90">
            Une architecture headless nécessite une analyse approfondie de vos besoins réels
          </p>

          <div className="bg-white/10 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Audit technique gratuit de 30 minutes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Analyse de vos contraintes actuelles
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Évaluation technique headless vs traditionnel
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Estimation budgétaire personnalisée
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Recommandations d'architecture
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Planifier l'audit technique
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Télécharger le guide de décision
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link
            href="/services/sites-corporate"
            className="inline-flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Découvrir les Sites Corporate
          </Link>
          <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            Retour à la comparaison
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
