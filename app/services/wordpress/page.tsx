"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Database,
  Code,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { CTASection } from "@/components/cta-section";
import { CMSQuizCard, PriceQuizCard } from "@/components/tools";
import Process from "@/components/process";
import { DecisionHelper } from "@/components/decision-helper";

const applications = [
  {
    key: "corporate",
    image: "/img/site-corporate.jpg",
    title: "Sites corporate",
    description: "Présentation d'entreprise, services, équipes",
    examples: ["Groupes industriels", "PME", "Artisans"],
  },
  {
    key: "institutionnel",
    image: "/img/site-institutionnel.jpg",
    title: "Sites institutionnels",
    description: "Collectivités, associations, fondations",
    examples: ["Mairies", "ESS", "Associations"],
  },
  {
    key: "services",
    image: "/img/site-services.jpg",
    title: "Sites de services",
    description: "Cabinets, consultants, professions libérales",
    examples: ["Avocats", "Consultants", "Médecins"],
  },
  {
    key: "portail",
    image: "/img/portail-infos.jpg",
    title: "Portails d'information",
    description: "Actualités, documentation, ressources",
    examples: ["Centres de formation", "Médias", "Écoles"],
  },
];

export default function SitesCorporate() {
  const [tab, setTab] = useState(applications[0].key);
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-regularblue/20 text-regularblue"
          >
            Solution recommandée pour 90% des projets
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Sites Corporate <span className="text-regularblue">WordPress</span>
          </h1>
          <p className="text-xl text-regularblue/80 max-w-3xl mx-auto mb-8">
            L'efficacité d'une solution intégrée pour vos besoins web
            classiques. WordPress traditionnel unit la gestion de contenu et
            l'affichage dans une solution complète.
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

        {/* When to Choose */}        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-regularblue">
              Quand est-ce la solution optimale ?
            </h2>
            <p className="text-lg text-regularblue/80 max-w-2xl mx-auto">
              WordPress traditionnel excelle pour les projets web classiques
              nécessitant efficacité et simplicité.
            </p>
            <CMSQuizCard />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl">
            {[
              {
                icon: <Users className="h-8 w-8 text-lightblue" />,
                title: "Équipes non-techniques",
                description:
                  "Vos équipes doivent gérer le contenu facilement sans formation complexe",
              },
              {
                icon: <Clock className="h-8 w-8 text-lightblue" />,
                title: "Mise en ligne rapide",
                description:
                  "Vous souhaitez une mise en ligne rapide (4-8 semaines)",
              },
              {
                icon: <Shield className="h-8 w-8 text-lightblue" />,
                title: "Budget maîtrisé",
                description:
                  "Votre budget est maîtrisé avec un ROI rapide attendu",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-transparent border-none text-center shadow-none"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">{item.icon}</div>
                  <CardTitle className="text-2xl font-adobetitre text-regularblue font-medium">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mediumblue">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications en Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-regularblue mb-4">
                Applications concrètes
              </h2>
              <p className="text-lg text-regularblue/80">
                Des solutions éprouvées pour tous les secteurs d'activité
              </p>
            </div>

            <Tabs value={tab} onValueChange={setTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="bg-white p-1 rounded-full flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <TabsTrigger
                      key={app.key}
                      value={app.key}
                      className="rounded-full px-6 py-2 font-medium data-[state=active]:bg-background/10"
                    >
                      {app.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div style={{ minHeight: 340, position: "relative" }}>
                <AnimatePresence mode="wait">
                  {applications.map((app) =>
                    tab === app.key ? (
                      <TabsContent
                        key={app.key}
                        value={app.key}
                        forceMount
                        className="mt-0 absolute left-0 top-0 w-full h-[340px] flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          layout
                          className="h-full flex items-center justify-center"
                        >
                          <Card className="w-max flex rounded-2xl mx-auto h-[300px]">
                            <div className="w-1/4 lg:block h-full">
                              <Image
                                src={app.image}
                                alt={app.title}
                                className="h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                                width={300}
                                height={300}
                              />
                            </div>
                            <div className="flex flex-col justify-between h-full">
                              <CardHeader>
                                <CardTitle className="text-3xl text-regularblue font-adobetitre font-medium">
                                  {app.title}
                                </CardTitle>
                                <CardDescription className="text-regularblue">
                                  {app.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="h-full flex items-start gap-4 pl-2">
                                  {app.examples.map((example) => (
                                    <div
                                      key={example}
                                      className="w-max font-adobetitre text-regularblue bg-lightblue/10 px-3 py-1 rounded-full"
                                    >
                                      {example}
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        </motion.div>
                      </TabsContent>
                    ) : null
                  )}
                </AnimatePresence>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Services Details */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1700px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <section id="services" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-regularblue mb-4">
              Nos services détaillés
            </h2>
            <p className="text-lg text-regularblue/80">
              Une approche complète pour votre réussite web
            </p>
          </div>

          <div className="rounded-2xl grid gap-12">
            {[
              {
                icon: <Zap className="h-6 w-6 text-lightblue" />,
                image: "/img/design-sur-mesure.jpg",
                title: "Design sur-mesure",
                problem:
                  "Avoir un site unique sans les coûts d'un développement from scratch",
                features: [
                  "Thème personnalisé respectant votre charte graphique",
                  "Responsive natif avec adaptation automatique",
                  "Composants modulaires réutilisables",
                  "Templates spécialisés optimisés",
                  "Évolutivité visuelle facilitée",
                ],
              },
              {
                icon: <Database className="h-6 w-6 text-lightblue" />,
                image: "/img/organisation-contenu.jpg",
                title: "Organisation des contenus dédiée",
                problem:
                  "Structurer l'information pour vos utilisateurs et les moteurs de recherche",
                features: [
                  "Architecture de l'information pensée UX et SEO",
                  "Types de contenus personnalisés",
                  "Navigation intuitive avec menus optimisés",
                  "Hiérarchisation selon vos priorités business",
                  "Parcours utilisateur de la découverte à la conversion",
                ],
              },
              {
                icon: <Code className="h-6 w-6 text-lightblue" />,
                image: "/img/fonctionnalites.jpg",
                title: "Fonctionnalités adaptées",
                problem:
                  "Obtenir les fonctionnalités nécessaires sans complexité inutile",
                features: [
                  "Formulaires intelligents avec notifications",
                  "Gestion multimédia complète",
                  "Blog/actualités avec système de publication",
                  "Pages dynamiques (équipe, services)",
                  "Intégrations légères (newsletters, analytics, chat)",
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
        </section>

        {/* Pricing */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[2600px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[3100px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>
        <section id="tarifs" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-regularblue mb-4">
                Investissement transparent
              </h2>
              <p className="text-lg text-regularblue/80">
                Budgétisation claire sans surprise
              </p>
            </div>

			      <PriceQuizCard />

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl font-adobetitre font-medium text-regularblue">
                    Site Vitrine
                  </CardTitle>
                  <CardDescription className="text-mediumblue">
                    Solution complète pour PME
                  </CardDescription>
                  <div className="text-3xl font-medium font-adobetitre text-regularblue">
                    2.1k€ - 3k€
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-mediumblue">
                    {[
                      "Design sur-mesure",
                      "5-10 pages optimisées",
                      "Formulaire de contact",
                      "SEO de base",
                      "Formation incluse",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-regularblue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-6 gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80"
                  >
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-lightblue/30 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-regularblue"></div>
                <CardHeader>
                  <Badge className="w-fit mb-4 font-medium uppercase bg-lightblue/10 text-mediumblue">
                    Populaire
                  </Badge>
                  <CardTitle className="text-2xl font-adobetitre font-medium text-regularblue">
                    Site Corporate
                  </CardTitle>
                  <CardDescription className=" text-mediumblue">
                    Solution avancée pour entreprises
                  </CardDescription>
                  <div className="text-3xl font-medium text-regularblue font-adobetitre">
                    2.4k€ - 5k€
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2  text-mediumblue">
                    {[
                      "Design premium personnalisé",
                      "15-30 pages structurées",
                      "Blog et actualités",
                      "SEO avancé",
                      "Intégrations tierces",
                      "Formation équipe complète",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-regularblue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-6 gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80"
                  >
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl font-adobetitre font-medium text-regularblue">
                    Portail Institutionnel
                  </CardTitle>
                  <CardDescription className="text-mediumblue">
                    Solution complète multi-niveaux
                  </CardDescription>
                  <div className="text-3xl font-medium text-regularblue font-adobetitre">
                    3.5k€ - 6k€
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-mediumblue">
                    {[
                      "Architecture complexe",
                      "Multi-langues",
                      "Gestion utilisateurs",
                      "Modules spécialisés",
                      "Intégrations avancées",
                      "Support 12 mois",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-regularblue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="mt-6 gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80"
                  >
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[3000px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[3500px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
        </div>
        <Process />

        {/* Decision Helper */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[4400px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
            <div className="absolute top-[4900px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-5 blur-3xl"></div>
          </div>
        <DecisionHelper />

        {/* CTA Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[5200px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-5 blur-3xl"></div>
          <div className="absolute top-[5800px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-10 blur-3xl"></div>
        </div>
        <CTASection />

        {/* Navigation */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <Link
              href="/cms-headless"
              className="inline-flex items-center text-regularblue hover:text-regularblue/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Faire le test
            </Link>
            <Link
              href="/services/applications-headless"
              className="inline-flex items-center text-regularblue hover:text-regularblue/80"
            >
              Découvrir les Applications Headless
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link
            href="/cms-headless"
            className="inline-flex items-center text-regularblue hover:text-regularblue/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Choisir entre WordPress CMS et Headless
          </Link>
          <Link href="/services/headless" className="inline-flex items-center text-regularblue hover:text-regularblue/80">
            Découvrir le Headless
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>


      </div>
    </>
  );
}
