"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<null | {
    solution: string
    alternativeSolution: string
    frontend?: string
    cms?: string
    description: string
  }>(null)

  const questions = [
    {
      id: "type",
      question: "Quel type de projet souhaitez-vous créer ?",
      options: [
        { value: "vitrine", label: "Site vitrine / présentation" },
        { value: "blog", label: "Blog / Magazine" },
        { value: "ecommerce", label: "Site e-commerce" },
        { value: "application", label: "Application web" },
        { value: "marketplace", label: "Place de marché / Plateforme multi-vendeurs" },
      ],
    },
    {
      id: "budget",
      question: "Quel est votre budget approximatif ?",
      options: [
        { value: "small", label: "Moins de 3 000 €" },
        { value: "medium", label: "3 000 € - 10 000 €" },
        { value: "large", label: "10 000 € - 30 000 €" },
        { value: "enterprise", label: "Plus de 30 000 €" },
      ],
    },
    {
      id: "content",
      question: "À quelle fréquence mettrez-vous à jour le contenu ?",
      options: [
        { value: "rarely", label: "Rarement (quelques fois par an)" },
        { value: "monthly", label: "Régulièrement (quelques fois par mois)" },
        { value: "weekly", label: "Fréquemment (plusieurs fois par semaine)" },
        { value: "daily", label: "Quotidiennement" },
      ],
    },
    {
      id: "complexity",
      question: "Quelle est la complexité fonctionnelle de votre projet ?",
      options: [
        { value: "simple", label: "Simple (présentation, formulaires basiques)" },
        { value: "medium", label: "Moyenne (e-commerce simple, espace membre)" },
        { value: "complex", label: "Complexe (fonctionnalités personnalisées)" },
        { value: "very-complex", label: "Très complexe (application métier, intégrations multiples)" },
      ],
    },
    {
      id: "performance",
      question: "Quelle importance accordez-vous aux performances ?",
      options: [
        { value: "low", label: "Peu importante" },
        { value: "medium", label: "Moyennement importante" },
        { value: "high", label: "Très importante" },
        { value: "critical", label: "Critique (SEO, UX, conversion)" },
      ],
    },
    {
      id: "self_build",
      question: "Je souhaite réaliser :",
      options: [
        { value: "self", label: "Mon site moi-même" },
        { value: "self_with_help", label: "Mon site moi-même avec de l'aide ponctuelle" },
        { value: "agency", label: "Faire appel à une agence/freelance pour tout" },
        { value: "collaboration", label: "Collaborer étroitement avec des développeurs" },
      ],
    },
    {
      id: "customization",
      question: "Quel niveau de personnalisation recherchez-vous ?",
      options: [
        { value: "low", label: "Faible (templates standards)" },
        { value: "medium", label: "Moyen (personnalisation visuelle)" },
        { value: "high", label: "Élevé (fonctionnalités sur mesure)" },
      ],
    },
    {
      id: "seo_importance",
      question: "Quelle importance accordez-vous au référencement (SEO) ?",
      options: [
        { value: "low", label: "Peu importante" },
        { value: "medium", label: "Importante" },
        { value: "high", label: "Très importante / Critique" },
      ],
    },
    {
      id: "multilingual",
      question: "Votre site doit-il être multilingue ?",
      options: [
        { value: "no", label: "Non" },
        { value: "yes", label: "Oui" },
      ],
    },
    {
      id: "content_editors",
      question: "Combien de personnes éditeront le contenu du site ?",
      options: [
        { value: "single", label: "Une seule personne" },
        { value: "small", label: "Petite équipe (2-5 personnes)" },
        { value: "large", label: "Grande équipe (plus de 5 personnes)" },
      ],
    },
    {
      id: "time_to_market",
      question: "Quel est votre délai de mise en ligne souhaité ?",
      options: [
        { value: "urgent", label: "Urgent (moins d'un mois)" },
        { value: "normal", label: "Normal (1-3 mois)" },
        { value: "flexible", label: "Flexible (plus de 3 mois)" },
      ],
    },
    {
      id: "scalability",
      question: "Quelle importance accordez-vous à l'évolutivité future du site ?",
      options: [
        { value: "low", label: "Faible (projet à court terme)" },
        { value: "medium", label: "Moyenne (évolutions modérées prévues)" },
        { value: "high", label: "Élevée (croissance importante anticipée)" },
      ],
    },
  ]

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Calculer le résultat
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [questions[step].id]: value,
    })
  }

  // Remplacer la fonction calculateResult() par cette version améliorée avec des pondérations plus précises et techniquement pertinentes

  const calculateResult = () => {
    // Logique plus sophistiquée pour déterminer la solution recommandée
    const {
      type,
      budget,
      content,
      complexity,
      performance,
      self_build,
      customization,
      seo_importance,
      multilingual,
      content_editors,
      time_to_market,
      scalability,
    } = answers

    // Initialiser le score pour chaque solution
    const solutions = {
      WordPress: 0,
      Webflow: 0,
      Prestashop: 0,
      Squarespace: 0,
      Shopify: 0,
      Bubble: 0,
      "WordPress Woocommerce": 0,
      Magento: 0,
      "Strapi + Next.js": 0,
      "Strapi + Astro": 0,
      "WordPress Headless + Next.js": 0,
      "WordPress Headless + Astro": 0,
      "Prismic + Next.js": 0,
      "Prismic + Astro": 0,
      "Sanity + Next.js": 0,
      "Sanity + Astro": 0,
      "Contentful + Next.js": 0,
      "Next.js uniquement": 0,
      "Astro uniquement": 0,
      "Nuxt uniquement": 0,
    }

    // Type de projet - Pondérations ajustées selon les forces réelles de chaque technologie
    if (type === "vitrine") {
      solutions["WordPress"] += 7
      solutions["Webflow"] += 9
      solutions["Squarespace"] += 8
      solutions["Astro uniquement"] += 9 // Excellent pour les sites statiques
      solutions["Next.js uniquement"] += 6
      solutions["Nuxt uniquement"] += 6
      solutions["WordPress Headless + Astro"] += 8 // Combinaison idéale pour sites vitrines performants
      solutions["Prismic + Astro"] += 9 // Excellent pour les sites vitrines avec contenu structuré
      solutions["Sanity + Astro"] += 9
    } else if (type === "blog") {
      solutions["WordPress"] += 10 // WordPress reste le meilleur pour les blogs
      solutions["Webflow"] += 6
      solutions["Squarespace"] += 7
      solutions["WordPress Headless + Astro"] += 9 // Excellent pour blogs performants
      solutions["WordPress Headless + Next.js"] += 7
      solutions["Prismic + Astro"] += 8
      solutions["Sanity + Astro"] += 8
      solutions["Astro uniquement"] += 8 // Très bon pour les blogs statiques
    } else if (type === "ecommerce") {
      solutions["Shopify"] += 10 // Leader e-commerce SaaS
      solutions["WordPress Woocommerce"] += 8
      solutions["Prestashop"] += 9 // Spécialisé e-commerce
      solutions["Magento"] += 8 // Pour e-commerce complexe
      solutions["Next.js uniquement"] += 5 // Nécessite beaucoup de développement custom
      solutions["Nuxt uniquement"] += 5
    } else if (type === "application") {
      solutions["Next.js uniquement"] += 10 // Framework idéal pour applications
      solutions["Nuxt uniquement"] += 9
      solutions["Bubble"] += 7 // Bon pour prototypes mais limité pour applications complexes
      solutions["Strapi + Next.js"] += 10 // Excellente combinaison pour applications avec contenu
      solutions["WordPress Headless + Next.js"] += 6
      solutions["Prismic + Next.js"] += 7
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 9
    } else if (type === "marketplace") {
      solutions["Magento"] += 9 // Spécialisé pour marketplaces complexes
      solutions["WordPress Woocommerce"] += 6 // Possible mais avec extensions
      solutions["Shopify"] += 5 // Limité pour les vraies marketplaces
      solutions["Next.js uniquement"] += 8 // Bonne flexibilité pour marketplace custom
      solutions["Strapi + Next.js"] += 9 // Excellente combinaison pour marketplace avec API
    }

    // Budget - Ajusté pour refléter les coûts réels de développement et maintenance
    if (budget === "small") {
      solutions["WordPress"] += 8
      solutions["Webflow"] += 7
      solutions["Squarespace"] += 10 // Le moins cher à mettre en place
      solutions["Shopify"] += 8 // Abordable pour petits e-commerces
      solutions["WordPress Woocommerce"] += 7
      solutions["Astro uniquement"] += 4 // Nécessite des compétences techniques
    } else if (budget === "medium") {
      solutions["WordPress"] += 9
      solutions["Webflow"] += 8
      solutions["Shopify"] += 9
      solutions["WordPress Woocommerce"] += 9
      solutions["Prestashop"] += 8
      solutions["WordPress Headless + Astro"] += 5 // Coût de développement initial plus élevé
      solutions["Prismic + Astro"] += 5
      solutions["Next.js uniquement"] += 6
      solutions["Astro uniquement"] += 6
      solutions["Nuxt uniquement"] += 6
    } else if (budget === "large") {
      solutions["WordPress Headless + Next.js"] += 8
      solutions["WordPress Headless + Astro"] += 8
      solutions["Strapi + Next.js"] += 9
      solutions["Strapi + Astro"] += 8
      solutions["Prismic + Next.js"] += 9
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 8 // Contentful peut être coûteux
      solutions["Magento"] += 8
    } else if (budget === "enterprise") {
      solutions["WordPress Headless + Next.js"] += 8
      solutions["Strapi + Next.js"] += 9
      solutions["Prismic + Next.js"] += 8
      solutions["Sanity + Next.js"] += 8
      solutions["Contentful + Next.js"] += 10 // Idéal pour entreprises avec budget conséquent
      solutions["Magento"] += 10 // Solution enterprise e-commerce
    }

    // Fréquence de mise à jour du contenu - Ajusté selon la facilité réelle d'édition
    if (content === "rarely") {
      solutions["Squarespace"] += 8
      solutions["Webflow"] += 7
      solutions["Astro uniquement"] += 8 // Parfait pour contenu statique rarement mis à jour
    } else if (content === "monthly") {
      solutions["WordPress"] += 8
      solutions["Webflow"] += 8
      solutions["Prismic + Astro"] += 7
      solutions["Sanity + Astro"] += 7
    } else if (content === "weekly") {
      solutions["WordPress"] += 9 // Interface d'édition mature
      solutions["WordPress Headless + Next.js"] += 7
      solutions["WordPress Headless + Astro"] += 7
      solutions["Prismic + Next.js"] += 9 // Excellent pour édition de contenu
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 9
    } else if (content === "daily") {
      solutions["WordPress"] += 10 // Le meilleur pour édition fréquente
      solutions["WordPress Headless + Next.js"] += 8
      solutions["Strapi + Next.js"] += 7
      solutions["Contentful + Next.js"] += 10 // Excellent workflow éditorial
      solutions["Sanity + Next.js"] += 9 // Excellent pour édition collaborative
    }

    // Complexité - Ajusté pour refléter les capacités réelles de chaque solution
    if (complexity === "simple") {
      solutions["WordPress"] += 8
      solutions["Webflow"] += 9
      solutions["Squarespace"] += 10
      solutions["Shopify"] += 9
      solutions["Astro uniquement"] += 8
    } else if (complexity === "medium") {
      solutions["WordPress"] += 9
      solutions["WordPress Woocommerce"] += 8
      solutions["Webflow"] += 6 // Limites atteintes avec complexité moyenne
      solutions["Prestashop"] += 8
      solutions["WordPress Headless + Astro"] += 7
      solutions["Next.js uniquement"] += 8
      solutions["Nuxt uniquement"] += 8
    } else if (complexity === "complex") {
      solutions["WordPress Headless + Next.js"] += 9
      solutions["Strapi + Next.js"] += 10
      solutions["Prismic + Next.js"] += 8
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 9
      solutions["Next.js uniquement"] += 10 // Excellent pour applications complexes
      solutions["Nuxt uniquement"] += 9
      solutions["Magento"] += 8 // Pour e-commerce complexe
    } else if (complexity === "very-complex") {
      solutions["Strapi + Next.js"] += 10 // API flexible + framework puissant
      solutions["WordPress Headless + Next.js"] += 7 // WordPress peut devenir limitant
      solutions["Prismic + Next.js"] += 8
      solutions["Sanity + Next.js"] += 9 // Modèle de contenu très flexible
      solutions["Contentful + Next.js"] += 9
      solutions["Next.js uniquement"] += 10 // Maximum de flexibilité
      solutions["Nuxt uniquement"] += 9
    }

    // Performance - Ajusté selon les benchmarks réels
    if (performance === "low") {
      // Pas de bonus particulier
    } else if (performance === "medium") {
      solutions["WordPress"] += 6
      solutions["Webflow"] += 7
      solutions["Shopify"] += 7
    } else if (performance === "high") {
      solutions["WordPress Headless + Astro"] += 9
      solutions["Prismic + Astro"] += 9
      solutions["Sanity + Astro"] += 9
      solutions["Astro uniquement"] += 10 // Le meilleur pour performance
      solutions["Next.js uniquement"] += 8
      solutions["Nuxt uniquement"] += 8
    } else if (performance === "critical") {
      solutions["WordPress Headless + Astro"] += 10
      solutions["Prismic + Astro"] += 10
      solutions["Sanity + Astro"] += 10
      solutions["Astro uniquement"] += 10 // Spécialement conçu pour performance maximale
      solutions["Next.js uniquement"] += 8 // Bon mais pas aussi optimisé qu'Astro pour sites statiques
      solutions["Nuxt uniquement"] += 8
    }

    // Volonté de réaliser soi-même
    if (self_build === "self") {
      solutions["WordPress"] += 9
      solutions["Webflow"] += 8
      solutions["Squarespace"] += 10 // Le plus simple pour non-techniciens
      solutions["Shopify"] += 9
      solutions["Bubble"] += 7 // Nécessite apprentissage de la plateforme
    } else if (self_build === "self_with_help") {
      solutions["WordPress"] += 10 // Excellent avec aide ponctuelle
      solutions["WordPress Woocommerce"] += 8
      solutions["Webflow"] += 9
      solutions["Prestashop"] += 6
      solutions["Shopify"] += 8
    } else if (self_build === "agency") {
      // Toutes les solutions sont viables avec une agence, donc pas de bonus particulier
      // Mais on peut légèrement favoriser les solutions qui offrent une bonne collaboration client/agence
      solutions["WordPress"] += 7 // Facile pour le client de faire des mises à jour après
      solutions["Prismic + Next.js"] += 7 // Bonne interface pour le client
      solutions["Sanity + Next.js"] += 7
      solutions["Contentful + Next.js"] += 7
    } else if (self_build === "collaboration") {
      solutions["WordPress Headless + Next.js"] += 8 // Bon pour collaboration technique/contenu
      solutions["Strapi + Next.js"] += 9
      solutions["Prismic + Next.js"] += 9
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 9
      solutions["Next.js uniquement"] += 8
      solutions["Astro uniquement"] += 8
      solutions["Nuxt uniquement"] += 8
    }

    // Personnalisation - Ajusté selon les limitations réelles
    if (customization === "low") {
      solutions["Squarespace"] += 10 // Parfait pour utilisation de templates
      solutions["Shopify"] += 9
      solutions["Webflow"] += 8
    } else if (customization === "medium") {
      solutions["WordPress"] += 9
      solutions["WordPress Woocommerce"] += 8
      solutions["Webflow"] += 9 // Excellent pour personnalisation visuelle
      solutions["Prestashop"] += 7
    } else if (customization === "high") {
      solutions["WordPress Headless + Next.js"] += 9
      solutions["WordPress Headless + Astro"] += 9
      solutions["Strapi + Next.js"] += 10 // Liberté totale de personnalisation
      solutions["Strapi + Astro"] += 10
      solutions["Prismic + Next.js"] += 8 // Certaines limitations du modèle de contenu
      solutions["Prismic + Astro"] += 8
      solutions["Sanity + Next.js"] += 9
      solutions["Sanity + Astro"] += 9
      solutions["Contentful + Next.js"] += 8
      solutions["Next.js uniquement"] += 10 // Liberté totale
      solutions["Astro uniquement"] += 9
      solutions["Nuxt uniquement"] += 10
    }

    // Importance du SEO - Ajusté selon les capacités réelles SEO
    if (seo_importance === "low") {
      // Pas de bonus particulier
    } else if (seo_importance === "medium") {
      solutions["WordPress"] += 8 // Bon SEO avec plugins
      solutions["Webflow"] += 7
      solutions["Shopify"] += 7
    } else if (seo_importance === "high") {
      solutions["WordPress"] += 8 // Bon mais pas parfait
      solutions["WordPress Headless + Astro"] += 10 // Contrôle total + performance
      solutions["Prismic + Astro"] += 10
      solutions["Sanity + Astro"] += 10
      solutions["Astro uniquement"] += 10 // Conçu pour SEO optimal
      solutions["Next.js uniquement"] += 9 // Très bon SEO avec SSG/ISR
      solutions["Nuxt uniquement"] += 9
    }

    // Multilingue - Ajusté selon la facilité réelle d'implémentation
    if (multilingual === "yes") {
      solutions["WordPress"] += 6 // Possible mais pas toujours élégant
      solutions["WordPress Headless + Next.js"] += 9 // Excellente gestion i18n
      solutions["WordPress Headless + Astro"] += 8
      solutions["Strapi + Next.js"] += 9 // Support multilingue natif
      solutions["Strapi + Astro"] += 8
      solutions["Prismic + Next.js"] += 10 // Excellent support multilingue
      solutions["Prismic + Astro"] += 10
      solutions["Sanity + Next.js"] += 9
      solutions["Sanity + Astro"] += 9
      solutions["Contentful + Next.js"] += 10 // Support multilingue enterprise-grade
      solutions["Next.js uniquement"] += 8 // Bon support i18n
      solutions["Astro uniquement"] += 7 // Support i18n en amélioration
      solutions["Nuxt uniquement"] += 9 // Excellent support i18n
    }

    // Nombre d'éditeurs de contenu - Ajusté selon les capacités réelles de collaboration
    if (content_editors === "single") {
      // Pas de bonus particulier
    } else if (content_editors === "small") {
      solutions["WordPress"] += 8
      solutions["Prismic + Next.js"] += 9 // Bon workflow éditorial
      solutions["Prismic + Astro"] += 9
      solutions["Sanity + Next.js"] += 9
      solutions["Sanity + Astro"] += 9
      solutions["Contentful + Next.js"] += 9
    } else if (content_editors === "large") {
      solutions["WordPress"] += 6 // Limité pour grandes équipes
      solutions["WordPress Headless + Next.js"] += 6
      solutions["WordPress Headless + Astro"] += 6
      solutions["Strapi + Next.js"] += 8 // Bon système de rôles
      solutions["Prismic + Next.js"] += 9 // Workflow éditorial avancé
      solutions["Sanity + Next.js"] += 10 // Excellent pour collaboration
      solutions["Contentful + Next.js"] += 10 // Solution enterprise pour grandes équipes
    }

    // Délai de mise en marché - Ajusté selon la vitesse réelle de déploiement
    if (time_to_market === "urgent") {
      solutions["WordPress"] += 8
      solutions["Webflow"] += 9
      solutions["Squarespace"] += 10 // Le plus rapide à déployer
      solutions["Shopify"] += 9
      solutions["Bubble"] += 7 // Rapide mais nécessite configuration
    } else if (time_to_market === "normal") {
      solutions["WordPress"] += 9
      solutions["WordPress Woocommerce"] += 8
      solutions["Webflow"] += 8
      solutions["Prestashop"] += 7
      solutions["WordPress Headless + Astro"] += 6 // Développement initial plus long
      solutions["Prismic + Astro"] += 6
    } else if (time_to_market === "flexible") {
      solutions["WordPress Headless + Next.js"] += 8
      solutions["Strapi + Next.js"] += 9
      solutions["Prismic + Next.js"] += 8
      solutions["Sanity + Next.js"] += 8
      solutions["Contentful + Next.js"] += 8
      solutions["Next.js uniquement"] += 9
      solutions["Astro uniquement"] += 8
      solutions["Nuxt uniquement"] += 9
      solutions["Magento"] += 6 // Déploiement complexe et long
    }

    // Évolutivité - Ajusté selon les capacités réelles de scaling
    if (scalability === "low") {
      solutions["WordPress"] += 8
      solutions["Webflow"] += 8
      solutions["Squarespace"] += 9
      solutions["Shopify"] += 8
    } else if (scalability === "medium") {
      solutions["WordPress"] += 7 // Peut devenir difficile à scale
      solutions["WordPress Woocommerce"] += 6 // Limitations avec catalogue important
      solutions["WordPress Headless + Astro"] += 8
      solutions["WordPress Headless + Next.js"] += 8
      solutions["Prismic + Astro"] += 8
      solutions["Prismic + Next.js"] += 8
    } else if (scalability === "high") {
      solutions["WordPress Headless + Next.js"] += 8 // WordPress peut être limitant
      solutions["Strapi + Next.js"] += 10 // Architecture très scalable
      solutions["Prismic + Next.js"] += 9
      solutions["Sanity + Next.js"] += 9
      solutions["Contentful + Next.js"] += 10 // Solution enterprise très scalable
      solutions["Next.js uniquement"] += 10 // Excellente scalabilité
      solutions["Nuxt uniquement"] += 9
      solutions["Magento"] += 7 // Peut être lourd à très grande échelle
    }

    // Filtrer les solutions en fonction du type de projet
    if (type === "ecommerce") {
      // Pour l'e-commerce, ne garder que les solutions e-commerce spécifiques
      const ecommerceSolutions = [
        "Shopify",
        "WordPress Woocommerce",
        "Prestashop",
        "Magento",
        "Next.js uniquement",
        "Nuxt uniquement",
      ]

      // Mettre à zéro le score des solutions non e-commerce
      for (const solution in solutions) {
        if (!ecommerceSolutions.includes(solution)) {
          solutions[solution] = 0
        }
      }
    } else if (type === "marketplace") {
      // Pour les marketplaces, ne garder que les solutions adaptées
      const marketplaceSolutions = [
        "Magento",
        "WordPress Woocommerce",
        "Shopify",
        "Next.js uniquement",
        "Strapi + Next.js",
      ]

      // Mettre à zéro le score des solutions non adaptées aux marketplaces
      for (const solution in solutions) {
        if (!marketplaceSolutions.includes(solution)) {
          solutions[solution] = 0
        }
      }
    }

    // Trouver la solution avec le score le plus élevé
    let maxScore = 0
    let recommendedSolution = ""
    let secondSolution = ""
    let secondScore = 0

    for (const [solution, score] of Object.entries(solutions)) {
      if (score > maxScore) {
        secondScore = maxScore
        secondSolution = recommendedSolution
        maxScore = score
        recommendedSolution = solution
      } else if (score > secondScore) {
        secondScore = score
        secondSolution = solution
      }
    }

    // Déterminer le frontend pour les solutions headless
    let frontend = undefined
    if (recommendedSolution.includes("Next.js")) {
      frontend = "Next.js"
    } else if (recommendedSolution.includes("Astro")) {
      frontend = "Astro"
    } else if (recommendedSolution.includes("Nuxt")) {
      frontend = "Nuxt"
    }

    // Déterminer le CMS pour les solutions headless
    let cms = undefined
    if (recommendedSolution.includes("WordPress Headless")) {
      cms = "WordPress"
    } else if (recommendedSolution.includes("Strapi")) {
      cms = "Strapi"
    } else if (recommendedSolution.includes("Prismic")) {
      cms = "Prismic"
    } else if (recommendedSolution.includes("Sanity")) {
      cms = "Sanity"
    } else if (recommendedSolution.includes("Contentful")) {
      cms = "Contentful"
    }

    setResult({
      solution: recommendedSolution,
      alternativeSolution: secondSolution,
      frontend,
      cms,
      description: getResultDescription(recommendedSolution),
    })
  }

  // Remplacer la fonction getResultDescription par cette version plus précise et techniquement détaillée

  const getResultDescription = (solution: string) => {
    // Descriptions détaillées pour chaque solution
    const descriptions: Record<string, string> = {
      WordPress:
        "WordPress est un CMS mature et flexible qui alimente plus de 40% du web. Avec son vaste écosystème de plugins (60,000+) et thèmes, il permet de créer rapidement des sites sans code. Idéal pour les blogs et sites de contenu grâce à son éditeur Gutenberg et son workflow éditorial éprouvé.",

      Webflow:
        "Webflow est une plateforme de création visuelle qui génère du code propre (HTML, CSS, JS) sans compromettre la qualité. Son Designer offre un contrôle précis sur le design et les interactions, tout en proposant un CMS structuré pour les contenus dynamiques. Parfait pour les designers qui veulent éviter le code.",

      Prestashop:
        "PrestaShop est une solution e-commerce open source particulièrement populaire en Europe. Avec plus de 300 fonctionnalités natives et 5,000+ modules, elle offre un excellent rapport fonctionnalités/prix pour les boutiques de taille moyenne. Sa communauté active et son architecture MVC en font une solution durable.",

      Squarespace:
        "Squarespace est une plateforme SaaS tout-en-un optimisée pour la simplicité. Ses templates design de qualité professionnelle et son interface WYSIWYG permettent de créer des sites élégants sans aucune connaissance technique. Idéale pour les portfolios, petits sites vitrines et blogs avec mise en place en quelques heures.",

      Shopify:
        "Shopify est la solution e-commerce SaaS leader du marché avec plus de 1,7 million de marchands. Son infrastructure robuste gère les pics de trafic et les transactions sécurisées sans configuration. Avec son App Store de 6,000+ extensions, il s'adapte à la plupart des besoins e-commerce tout en minimisant la maintenance technique.",

      Bubble:
        "Bubble est une plateforme no-code avancée pour créer des applications web interactives sans programmation. Son éditeur visuel permet de définir des workflows complexes, des bases de données et des interfaces utilisateur réactives. Idéal pour prototyper rapidement ou créer des MVP fonctionnels avant d'investir dans du développement custom.",

      "WordPress Woocommerce":
        "WordPress avec WooCommerce forme la solution e-commerce open source la plus utilisée au monde (28% des boutiques en ligne). Cette combinaison offre une flexibilité exceptionnelle avec des milliers d'extensions compatibles. Idéale pour les boutiques nécessitant des fonctionnalités personnalisées ou un contenu riche autour des produits.",

      Magento:
        "Magento (Adobe Commerce) est une plateforme e-commerce enterprise-grade conçue pour les catalogues complexes et les opérations multi-boutiques. Son architecture sophistiquée permet une personnalisation poussée et gère efficacement des milliers de produits avec attributs complexes. Recommandée pour les grands e-commerçants avec équipe technique dédiée.",

      "Strapi + Next.js":
        "Strapi (CMS headless open source) combiné à Next.js offre une architecture JAMstack puissante et flexible. Strapi fournit une API REST/GraphQL personnalisable et une interface d'administration intuitive, tandis que Next.js apporte le rendu hybride (SSG/SSR/ISR) et une expérience développeur optimale. Idéal pour les applications web performantes nécessitant un contrôle total.",

      "Strapi + Astro":
        "Strapi avec Astro combine un CMS headless flexible avec un framework frontend ultra-performant. Cette stack privilégie le contenu statique avec un minimum de JavaScript côté client, résultant en des temps de chargement exceptionnels et un excellent SEO. Parfaite pour les sites orientés contenu où la performance est critique.",

      "WordPress Headless + Next.js":
        "WordPress en mode headless avec Next.js combine la puissance éditoriale de WordPress (via WP REST API ou WPGraphQL) avec les performances et la flexibilité de React. Cette architecture découplée permet d'utiliser l'interface familière de WordPress pour la gestion de contenu tout en bénéficiant d'un frontend moderne, rapide et évolutif.",

      "WordPress Headless + Astro":
        "WordPress headless avec Astro offre une solution hybride idéale pour les sites riches en contenu nécessitant des performances exceptionnelles. Cette approche conserve l'expérience éditoriale de WordPress tout en générant un site majoritairement statique avec un minimum de JavaScript, optimisant ainsi vitesse de chargement et SEO.",

      "Prismic + Next.js":
        "Prismic avec Next.js forme une solution headless robuste avec une excellente expérience éditoriale. Prismic excelle dans la modélisation de contenu structuré avec son système de tranches (Slices) et son éditeur visuel, tandis que Next.js offre flexibilité et performance. Idéal pour les projets nécessitant un contenu riche et une interface utilisateur dynamique.",

      "Prismic + Astro":
        "Prismic combiné à Astro est parfait pour les sites axés sur le contenu nécessitant des performances optimales. L'API de prévisualisation de Prismic et son système de publication planifiée s'intègrent bien avec Astro, offrant une expérience éditoriale complète tout en générant un site statique ultra-rapide avec un excellent score Core Web Vitals.",

      "Sanity + Next.js":
        "Sanity avec Next.js forme une combinaison puissante pour les projets nécessitant une gestion de contenu flexible. Le schéma de contenu personnalisable en JavaScript de Sanity et son éditeur WYSIWYG temps réel (Portable Text) s'associent parfaitement avec la versatilité de Next.js pour créer des expériences web dynamiques et performantes.",

      "Sanity + Astro":
        "Sanity couplé à Astro est excellent pour les sites orientés contenu avec des besoins de performance élevés. Le système de requêtes GROQ de Sanity permet d'extraire précisément les données nécessaires, tandis qu'Astro génère un HTML statique optimisé avec hydratation partielle, résultant en des sites extrêmement rapides et bien référencés.",

      "Contentful + Next.js":
        "Contentful avec Next.js est une solution enterprise-ready pour les projets d'envergure. L'architecture multi-tenant de Contentful, ses API performantes et ses fonctionnalités avancées de localisation s'intègrent parfaitement avec Next.js pour créer des applications web évolutives, multilingues et hautement performantes.",

      "Next.js uniquement":
        "Next.js est un framework React complet qui excelle dans la création d'applications web performantes grâce à son rendu hybride (SSG/SSR/ISR). Avec son système de routage basé sur les fichiers, son optimisation automatique des images, et son support API intégré, il offre une expérience développeur exceptionnelle pour construire des interfaces utilisateur complexes et réactives.",

      "Astro uniquement":
        "Astro est un framework moderne optimisé pour la création de sites web rapides avec une approche 'zéro JavaScript par défaut'. Son système d'îlots (Islands Architecture) permet d'utiliser n'importe quelle UI framework (React, Vue, Svelte) uniquement où nécessaire, résultant en des performances exceptionnelles et un SEO optimal pour les sites orientés contenu.",

      "Nuxt uniquement":
        "Nuxt est un framework Vue.js qui simplifie la création d'applications web universelles. Avec son architecture modulaire, son rendu hybride et ses composants automatiquement importés, il offre une expérience de développement fluide et productive. Sa communauté active et son écosystème riche en font un excellent choix pour les projets nécessitant une interface utilisateur interactive et performante.",
    }

    return descriptions[solution] || "Solution recommandée en fonction de vos besoins spécifiques."
  }

  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Quelle solution pour mon projet ?</h1>

      {!result ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              Question {step + 1}/{questions.length}
            </CardTitle>
            <CardDescription>
              <Progress value={progress} className="mt-2" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
            <RadioGroup value={answers[currentQuestion.id] || ""} onValueChange={handleAnswerChange}>
              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={step === 0}>
              Précédent
            </Button>
            <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
              {step < questions.length - 1 ? "Suivant" : "Voir le résultat"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Résultat de l'analyse</CardTitle>
            <CardDescription className="text-center">Basé sur vos réponses, voici notre recommandation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">{result.solution}</h2>
              {result.cms && result.frontend && (
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    CMS: {result.cms}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Frontend: {result.frontend}
                  </span>
                </div>
              )}
              <p className="text-gray-700">{result.description}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Alternative recommandée</h3>
              <p className="text-sm mb-2">
                Une autre solution qui pourrait convenir à votre projet : <strong>{result.alternativeSolution}</strong>
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold mb-2">Pourquoi cette solution ?</h3>
              <p className="text-sm">
                Cette recommandation est basée sur votre type de projet, budget, besoins en performance et complexité
                fonctionnelle. Pour une analyse plus détaillée, n'hésitez pas à me contacter pour un conseil
                personnalisé.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" asChild>
              <Link href="/contact">Discuter de cette solution</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setStep(0)
                setResult(null)
              }}
            >
              Recommencer le quiz
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  )
}
