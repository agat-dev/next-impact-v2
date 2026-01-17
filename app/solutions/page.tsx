"use client"

import PageHero from "@/components/page-hero"
import SolutionsOffers from "@/components/solutions/SolutionsOffers"
import SolutionsHeadless from "@/components/solutions/SolutionsHeadless"
import SolutionsGuide from "@/components/solutions/SolutionsGuide"
import SolutionsProcess from "@/components/solutions/SolutionsProcess"
import SolutionsFAQ from "@/components/solutions/SolutionsFAQ"
import SolutionsCTA from "@/components/solutions/SolutionsCTA"
import { ArrowRight, CheckCircle2, ChevronDown, Zap, Shield, Users, TrendingUp, Rocket, Smartphone, Monitor, Code, Settings, FileSearch, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  // ...existing code...

  const offers = [
    {
      name: "ESSENTIEL",
      tech: "WordPress Standard",
      target: "Pour les TPE/PME et créateurs",
      concept: "Un site robuste et 100% administrable en autonomie.",
      icon: "/icons/wordpress-icon.svg",
      color: "#719ED9",
      features: ["Budget maîtrisé", "Mise en ligne rapide", "Évolutif via plugins", "Formation incluse"],
      recommended: false,
    },
    {
      name: "PERFORMANCE",
      tech: "WordPress + Astro",
      target: "Pour les médias et sites de contenu",
      concept: "La rapidité absolue pour dominer le SEO.",
      icon: "/icons/speed-icon.svg",
      color: "#F29F05",
      features: [
        "Score PageSpeed 100/100",
        "Sécurité maximale (statique)",
        "Expérience mobile fluide",
        "SEO optimisé nativement",
      ],
      recommended: true,
    },
    {
      name: "SUR-MESURE",
      tech: "WordPress + Next.js",
      target: "Pour les startups et services SaaS",
      concept: "Une expérience utilisateur fluide d'une application.",
      icon: "/icons/saas-features-icon.svg",
      color: "#FF6B6B",
      features: [
        "Interactions dynamiques",
        "Espace client complexe",
        "Flexibilité totale du design",
        "Intégrations API illimitées",
      ],
      recommended: false,
    },
  ]

  const headlessReasons = [
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Votre base de données WordPress est isolée, rendant le site quasi impossible à pirater.",
    },
    {
      icon: Zap,
      title: "Vitesse fulgurante",
      description: "Les pages se chargent instantanément, réduisant le taux de rebond de 40%.",
    },
    {
      icon: Users,
      title: "Expérience éditeur préservée",
      description: "Vos équipes continuent d'écrire leurs articles sur l'interface WordPress qu'elles connaissent.",
    },
  ]

  const needsGuide = [
    {
      need: "Je veux changer mes menus et mon design seul",
      solution: "WordPress Classique",
      icon: Monitor,
    },
    {
      need: "Mon site actuel est trop lent et mon SEO stagne",
      solution: "Astro + Headless",
      icon: TrendingUp,
    },
    {
      need: "Je veux un portail client avec des filtres complexes",
      solution: "Next.js + Headless",
      icon: Smartphone,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Analyse",
      description: "Étude de vos besoins et choix de l'architecture.",
      icon: FileSearch,
    },
    {
      step: 2,
      title: "Développement",
      description: "Montage du back-end (WP) et du front-end (Astro/Next/PHP).",
      icon: Code,
    },
    {
      step: 3,
      title: "Optimisation",
      description: "Tests de performance et SEO.",
      icon: Settings,
    },
    {
      step: 4,
      title: "Formation",
      description: "Prise en main de votre interface d'administration.",
      icon: GraduationCap,
    },
  ]

  const faqs = [
    {
      question: "Est-ce que je pourrai toujours modifier mes textes ?",
      answer:
        "Oui, pour les 3 solutions. Vous conservez l'interface WordPress que vous connaissez pour gérer tous vos contenus, images et pages. Aucune compétence technique n'est requise.",
    },
    {
      question: "Le Headless est-il plus cher à maintenir ?",
      answer:
        "Légèrement, car il y a deux systèmes à maintenir (WordPress + front-end). Cependant, la sécurité renforcée et les performances accrues réduisent souvent les coûts d'intervention d'urgence et de perte de trafic.",
    },
    {
      question: "Combien de temps prend la mise en place ?",
      answer:
        "Comptez 2-4 semaines pour un site WordPress classique, 4-6 semaines pour une solution Astro, et 6-10 semaines pour une architecture Next.js complète, selon la complexité du projet.",
    },
    {
      question: "Mes plugins WordPress fonctionneront-ils encore ?",
      answer:
        "Les plugins front-end (sliders, formulaires affichés) sont remplacés par des équivalents plus performants. Les plugins back-end (SEO, analytics, sécurité) continuent de fonctionner normalement.",
    },
  ]

  return (
    <main>

                  <div className="min-h-screen font-googletexte text-foreground">
                    <PageHero
                      badge="Solutions web sur-mesure"
                      titre1="Des sites web performants,"
                      titre2="adaptés à vos ambitions"
                      sousTitre="Du site vitrine administrable à l'application web haute performance, nous choisissons l'architecture qui sert vos objectifs de croissance."
                      cta1Text="Découvrir nos offres"
                      cta1Link="#offres"
                      cta2Text="Demander un audit gratuit"
                      cta2Link="/contact"
                      illustration="/img/illustrations/solutions-hero.svg"
                    />
                    <SolutionsOffers offers={offers} />
                    <SolutionsHeadless headlessReasons={headlessReasons} />
                    <SolutionsGuide needsGuide={needsGuide} />
                    <SolutionsProcess processSteps={processSteps} />
                    <SolutionsFAQ faqs={faqs} />
                    <SolutionsCTA />
                  </div>

    </main>
)}
                                     