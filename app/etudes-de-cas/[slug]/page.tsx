import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MagicCard } from "@/components/magicui/magic-card"

// Types pour les études de cas
type ClientType = "PME" | "Association" | "Indépendant" | "Tous"
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null
type Year = number | null

interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  imageUrl: string
  clientType: ClientType
  clientName: string
  date: {
    month: Month
    year: Year
  }
  tags: string[]
  objectives: string[]
  results: string[]
  testimonial?: {
    content: string
    author: string
    position: string
  }
  gallery: {
    url: string
    alt: string
  }[]
  detailedDescription: string
  technologies: string[]
  duration: string
  website?: string
}

// Données d'exemple (à remplacer par vos vraies données)
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "proditec",
    title: "Refonte du site corporate multilingue",
    description: "Création d'un site moderne et performant pour une entreprise de l'industrie robotique internationale.",
    imageUrl: "/placeholder.svg?key=yvs6q",
    clientType: "PME",
    clientName: "Proditec",
    date: {
      month: 5,
      year: 2025,
    },
    tags: ["Corporate", "WordPress", "Polylang"],
    objectives: [
      "Améliorer l'expérience mobile",
      "Gérer le contenu multilingue",
      "Optimiser la vitesse de chargement du site",
    ],
    results: [
      "Amélioration du score d'accessibilité de 30%",
      "Prise en charge de 5 langues",
      "Amélioration du score PageSpeed de 45 à 98",
    ],
    testimonial: {
      content:
        "L'équipe de Next Impact a complètement transformé notre site e-commerce. La navigation est fluide, le design est moderne et nos ventes ont considérablement augmenté depuis la mise en ligne.",
      author: "Sophie Martin",
      position: "Directrice Marketing, ModeShop",
    },
    gallery: {
      url: "/placeholder.svg?key=ozcgx",
      alt: "Page produit du site ModeShop",
    },
    detailedDescription:
      `Proditec, une entreprise spécialisée dans la robotique industrielle, avait besoin d'une refonte complète de son site web pour 
      refléter son travail et sa reconnaissance internationale. Leur ancien site était obsolète, difficile à naviguer et à administrer et ne prenait 
      pas en charge le multilingue.\n\nNous avons créé un site WordPress avec un design responsive et une interface 
      utilisateur et administrateur technique et efficace pour être utilisées par tous.
      Le site est entièrement multilingue grâce à l'intégration de Polylang, 
      permettant aux visiteurs de choisir leur langue préférée.
      \n\nLe nouveau site met en avant les produits phares de Proditec avec des détails précis sur leurs machines.
      Des optimisations techniques ont été mises en place pour améliorer la vitesse de chargement du site, 
      ce qui a permis d'atteindre un score PageSpeed de 98 sur mobile et desktop.`,
    technologies: ["WordPress", "LiteSpeed", "Polylang", "elementor", "Hostinger"],
    duration: "1 mois",
    website: "https://proditec.com",
  },
  {
    id: "2",
    slug: "acl",
    title: "Site vitrine pour l'Association Culturelle de Lyon",
    description: "Création d'un site vitrine moderne avec calendrier d'événements et système de don en ligne.",
    imageUrl: "/placeholder.svg?key=u072i",
    clientType: "Association",
    clientName: "Association Culturelle de Lyon",
    date: {
      month: 6,
      year: 2023,
    },
    tags: ["site vitrine", "WordPress", "événements"],
    objectives: [
      "Créer une présence en ligne moderne et attrayante",
      "Faciliter la gestion des événements culturels",
      "Mettre en place un système de dons en ligne",
      "Améliorer la communication avec les membres",
    ],
    results: [
      "Augmentation de la participation aux événements de 45%",
      "Collecte de dons en ligne multipliée par 3",
      "Réduction du temps de gestion administrative de 60%",
      "Augmentation du nombre de membres de 28%",
    ],
    testimonial: {
      content:
        "Notre nouveau site a transformé notre façon de communiquer avec notre communauté. La gestion des événements est devenue un jeu d'enfant et les dons en ligne ont considérablement augmenté nos ressources.",
      author: "Jean Dupont",
      position: "Président, Association Culturelle de Lyon",
    },
    gallery: {
      url: "/placeholder.svg?key=6haaw",
      alt: "Calendrier d'événements de l'ACL",
    },
    detailedDescription:
      "L'Association Culturelle de Lyon, qui organise plus de 50 événements par an, avait besoin d'un site web moderne pour remplacer leur solution obsolète. Leur ancien site ne permettait pas une gestion efficace des événements et n'offrait pas la possibilité de faire des dons en ligne.\n\nNous avons créé un site WordPress sur mesure avec un thème personnalisé qui met en valeur l'identité visuelle de l'association. Le site intègre un calendrier d'événements interactif, un système de billetterie en ligne, et une plateforme de dons sécurisée.\n\nUne attention particulière a été portée à l'accessibilité du site pour garantir que tous les membres de la communauté puissent y accéder facilement. Nous avons également mis en place un système de newsletter pour améliorer la communication avec les membres et les sympathisants.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Stripe Donations", "The Events Calendar"],
    duration: "2 mois",
    website: "https://acl-exemple.fr",
  },
  {
    id: "3",
    slug: "photo-portfolio",
    title: "Portfolio pour photographe freelance",
    description: "Conception d'un portfolio élégant avec galerie photos et système de prise de rendez-vous.",
    imageUrl: "/placeholder.svg?key=s9x32",
    clientType: "Indépendant",
    clientName: "Marie Dubois Photography",
    date: {
      month: 9,
      year: 2023,
    },
    tags: ["portfolio", "galerie", "réservation"],
    objectives: [
      "Créer un portfolio visuellement impressionnant",
      "Mettre en place un système de réservation de séances photo",
      "Optimiser le chargement des images haute résolution",
      "Faciliter la mise à jour du contenu",
    ],
    results: [
      "Augmentation des demandes de séances photo de 75%",
      "Réduction du temps de gestion des rendez-vous de 80%",
      "Amélioration de la visibilité en ligne (1ère page Google)",
      "Augmentation du temps passé sur le site de 120%",
    ],
    testimonial: {
      content:
        "Mon nouveau portfolio a complètement transformé mon activité. Les clients peuvent facilement parcourir mon travail et réserver directement une séance. Le design élégant reflète parfaitement mon style photographique.",
      author: "Marie Dubois",
      position: "Photographe professionnelle",
    },
    gallery: {
      url: "/placeholder.svg?height=400&width=600&query=photography+gallery+website+elegant",
      alt: "Galerie photo du portfolio",
    },
    detailedDescription:
      "Marie Dubois, photographe professionnelle spécialisée dans les portraits et les mariages, avait besoin d'un portfolio en ligne qui mettrait en valeur son travail tout en facilitant la prise de rendez-vous pour ses clients.\n\nNous avons conçu un site minimaliste et élégant qui place ses photographies au premier plan. Le site utilise un système de chargement progressif des images pour garantir une expérience fluide même avec des dizaines de photos haute résolution.\n\nLe portfolio est organisé par catégories (portraits, mariages, événements, etc.) avec une navigation intuitive. Un système de réservation personnalisé permet aux clients de vérifier les disponibilités et de réserver directement une séance photo, avec paiement d'acompte intégré.\n\nLe site inclut également un blog où Marie peut partager des conseils photo et présenter ses dernières séances, ce qui améliore son référencement naturel.",
    technologies: ["React", "Gatsby", "GraphQL", "Netlify", "Calendly", "Cloudinary"],
    duration: "1,5 mois",
    website: "https://mariedubois-photographie.fr",
  },
  {
    id: "4",
    slug: "resto-booking",
    title: "Plateforme de réservation pour restaurant",
    description: "Développement d'une plateforme de réservation en ligne avec menu interactif.",
    imageUrl: "/placeholder.svg?height=600&width=1200&query=restaurant+booking+website+modern",
    clientType: "PME",
    clientName: "Restaurant La Table d'Or",
    date: {
      month: 11,
      year: 2023,
    },
    tags: ["réservation", "restaurant", "menu"],
    objectives: [
      "Créer un système de réservation en ligne intuitif",
      "Présenter le menu de façon interactive et attrayante",
      "Réduire la charge de travail liée à la gestion des réservations",
      "Améliorer l'expérience client avant même la visite au restaurant",
    ],
    results: [
      "Réduction des no-shows de 60%",
      "Augmentation des réservations en ligne de 85%",
      "Économie de 15 heures par semaine sur la gestion des réservations",
      "Augmentation du panier moyen de 12% grâce aux suggestions du menu",
    ],
    testimonial: {
      content:
        "La plateforme de réservation a révolutionné notre façon de travailler. Nos clients adorent pouvoir réserver en quelques clics et explorer notre menu en ligne. Notre équipe peut désormais se concentrer sur l'accueil et le service plutôt que sur la gestion des appels téléphoniques.",
      author: "Pierre Moreau",
      position: "Chef et propriétaire, La Table d'Or",
    },
    gallery: {
      url: "/placeholder.svg?height=400&width=600&query=restaurant+menu+digital+elegant",
      alt: "Menu interactif du restaurant",
    },
    detailedDescription:
      "La Table d'Or, un restaurant gastronomique réputé, cherchait à moderniser son système de réservation et à présenter son menu de manière plus attrayante en ligne. Le restaurant recevait plus de 100 appels par jour pour des réservations, ce qui mobilisait une personne à temps plein.\n\nNous avons développé une plateforme sur mesure qui permet aux clients de réserver une table en fonction des disponibilités réelles, avec prise en compte du nombre de couverts, des horaires et des zones du restaurant. Le système envoie des confirmations et des rappels automatiques, ce qui a considérablement réduit les no-shows.\n\nLe menu interactif permet aux clients de découvrir les plats avec des photos haute qualité, des descriptions détaillées et des informations sur les allergènes. Les plats peuvent être filtrés par catégorie, régime alimentaire ou allergènes.\n\nUn tableau de bord administrateur permet au personnel du restaurant de gérer facilement les réservations, les tables et le menu en temps réel.",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Twilio (SMS)", "AWS"],
    duration: "2,5 mois",
    website: "https://latabledor-exemple.fr",
  },
  {
    id: "5",
    slug: "legal-experts",
    title: "Site web pour cabinet d'avocats",
    description: "Création d'un site professionnel avec prise de rendez-vous et blog juridique.",
    imageUrl: "/placeholder.svg?height=600&width=1200&query=law+firm+website+professional",
    clientType: "PME",
    clientName: "Cabinet Juridique Legalis",
    date: {
      month: 2,
      year: 2024,
    },
    tags: ["juridique", "rendez-vous", "blog"],
    objectives: [
      "Créer une présence en ligne professionnelle et rassurante",
      "Faciliter la prise de rendez-vous pour les consultations",
      "Mettre en place un blog juridique pour le référencement",
      "Présenter clairement les domaines d'expertise et l'équipe",
    ],
    results: [
      "Augmentation des demandes de consultation de 65%",
      "Positionnement dans le top 3 des résultats Google pour les mots-clés ciblés",
      "Réduction du temps de qualification des prospects de 40%",
      "Augmentation de la notoriété grâce au blog (25 000 visites mensuelles)",
    ],
    testimonial: {
      content:
        "Notre nouveau site web a transformé notre image en ligne et nous a permis d'attirer une clientèle plus qualifiée. Le système de prise de rendez-vous nous fait gagner un temps précieux et le blog nous positionne comme experts dans nos domaines de prédilection.",
      author: "Maître Claire Leroy",
      position: "Associée fondatrice, Cabinet Legalis",
    },
    gallery: {
      url: "/placeholder.svg?height=400&width=600&query=law+firm+team+professional",
      alt: "Présentation de l'équipe d'avocats",
    },
    detailedDescription:
      "Le Cabinet Juridique Legalis, spécialisé en droit des affaires et droit immobilier, souhaitait moderniser son image en ligne et attirer une clientèle plus ciblée. Leur ancien site statique ne reflétait pas le professionnalisme du cabinet et n'offrait aucune fonctionnalité interactive.\n\nNous avons conçu un site élégant et rassurant, avec une palette de couleurs sobres et une typographie professionnelle. Le site présente clairement les domaines d'expertise du cabinet, avec des pages détaillées pour chaque service juridique proposé.\n\nLa section équipe met en valeur les avocats avec leurs parcours, spécialités et publications. Un système de prise de rendez-vous intelligent permet aux prospects de réserver une consultation initiale en fonction des disponibilités et des spécialités de chaque avocat.\n\nLe blog juridique, mis à jour régulièrement avec des articles de fond sur des sujets d'actualité, a considérablement amélioré le référencement naturel du site et positionné le cabinet comme une référence dans ses domaines d'expertise.",
    technologies: ["WordPress", "Elementor Pro", "WooCommerce (paiements)", "Yoast SEO", "Google Analytics 4"],
    duration: "2 mois",
    website: "https://cabinet-legalis.fr",
  },
  {
    id: "6",
    slug: "eco-protect",
    title: "Plateforme de dons pour ONG environnementale",
    description: "Développement d'une plateforme de dons sécurisée avec rapports d'impact.",
    imageUrl: "/placeholder.svg?height=600&width=1200&query=environmental+ngo+donation+platform",
    clientType: "Association",
    clientName: "Éco-Protect",
    date: {
      month: 4,
      year: 2024,
    },
    tags: ["dons", "environnement", "impact"],
    objectives: [
      "Créer une plateforme de dons sécurisée et transparente",
      "Mettre en place un système de rapports d'impact pour les donateurs",
      "Faciliter les dons récurrents et les dons dédiés à des projets spécifiques",
      "Optimiser l'expérience mobile pour les donateurs",
    ],
    results: [
      "Augmentation des dons en ligne de 120%",
      "Augmentation des dons récurrents de 85%",
      "Réduction des coûts de traitement des dons de 35%",
      "Amélioration de l'engagement des donateurs (taux de rétention +40%)",
    ],
    testimonial: {
      content:
        "Notre nouvelle plateforme de dons a transformé notre capacité à collecter des fonds et à communiquer sur l'impact de nos actions. Les donateurs apprécient particulièrement la transparence et la facilité d'utilisation du site.",
      author: "Lucas Bertrand",
      position: "Directeur, Éco-Protect",
    },
    gallery: {
      url: "/placeholder.svg?height=400&width=600&query=environmental+project+impact+report",
      alt: "Rapport d'impact de projet environnemental",
    },
    detailedDescription:
      "Éco-Protect, une ONG dédiée à la protection de l'environnement et à la reforestation, avait besoin d'une plateforme moderne pour collecter des dons et communiquer sur l'impact de ses projets. Leur système précédent était complexe et peu transparent, ce qui limitait la confiance des donateurs.\n\nNous avons développé une plateforme complète qui permet aux visiteurs de découvrir les différents projets de l'ONG, de faire des dons ponctuels ou récurrents, et de suivre l'impact de leurs contributions.\n\nChaque projet dispose d'une page détaillée avec des objectifs clairs, un budget transparent et des mises à jour régulières sur les avancées. Les donateurs peuvent choisir de soutenir un projet spécifique ou de faire un don général à l'organisation.\n\nUn tableau de bord personnalisé permet aux donateurs réguliers de suivre l'historique de leurs contributions et l'impact cumulé de leurs dons (arbres plantés, émissions de CO2 évitées, etc.).\n\nLa plateforme intègre également un blog, une newsletter et des fonctionnalités de partage sur les réseaux sociaux pour amplifier la portée des campagnes de l'ONG.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "SendGrid", "Vercel"],
    duration: "3 mois",
    website: "https://eco-protect.org",
  },
]

// Noms des mois en français
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]

// Fonction pour obtenir les études de cas similaires
function getSimilarCaseStudies(currentStudy: CaseStudy, limit = 3): CaseStudy[] {
  // Filtrer pour exclure l'étude de cas actuelle et trouver des études similaires
  // basées sur le type de client ou les tags communs
  return CASE_STUDIES.filter((study) => {
    if (study.id === currentStudy.id) return false

    // Vérifier si le type de client est le même
    const sameClientType = study.clientType === currentStudy.clientType

    // Vérifier s'il y a des tags communs
    const commonTags = study.tags.filter((tag) => currentStudy.tags.includes(tag))

    return sameClientType || commonTags.length > 0
  }).slice(0, limit)
}

// Fonction pour générer les métadonnées de la page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = CASE_STUDIES.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    return {
      title: "Étude de cas non trouvée - Next Impact Digital",
      description: "L'étude de cas que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${caseStudy.title} - Next Impact Digital`,
    description: caseStudy.description,
  }
}

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Trouver l'étude de cas correspondant au slug
  const caseStudy = CASE_STUDIES.find((study) => study.slug === params.slug)

  // Si l'étude de cas n'existe pas, afficher une page 404
  if (!caseStudy) {
    notFound()
  }

  // Obtenir des études de cas similaires
  const similarCaseStudies = getSimilarCaseStudies(caseStudy)

  return (
    <main className="min-h-screen">
      {/* Hero section avec image et titre */}
        <div className="container relative h-full flex flex-col justify-end py-16 px-4 md:px-6">
          <Link href="/etudes-de-cas" className="text-regularblue/70 mb-4 flex items-center hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux études de cas
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-regularblue mb-4">{caseStudy.title}</h1>
          <p className="text-xl max-w-3xl text-regularblue/70">{caseStudy.description}</p>
        </div>

      {/* Contenu principal */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-10">
            {/* Présentation du projet */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-regularblue">Présentation du projet</h2>
              <div className="prose max-w-none">
                {caseStudy.detailedDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-regularblue/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Objectifs et résultats */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-regularblue">Objectifs</h2>
                <ul className="space-y-3">
                  {caseStudy.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-lightblue/10 text-lightblue/70 flex items-center justify-center mr-3 mt-0.5">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className=" text-regularblue/80">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-regularblue">Résultats</h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-lightblue/10 text-lightblue/70 flex items-center justify-center mr-3 mt-0.5">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className=" text-regularblue/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Galerie */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-regularblue">Aperçu du projet</h2>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.gallery.url || "/placeholder.svg"}
                  alt={caseStudy.gallery.alt}
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Témoignage client */}
            {caseStudy.testimonial && (
              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-regularblue">Témoignage client</h2>
                <blockquote className="relative">
                  <div className="text-xl italic text-gray-700 mb-4">"{caseStudy.testimonial.content}"</div>
                  <footer className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{caseStudy.testimonial.position}</div>
                    </div>
                  </footer>
                </blockquote>
              </section>
            )}
          </div>

          {/* Sidebar avec informations du projet */}
          <div className="lg:col-span-1">
            <MagicCard >
            <div className="bg-white p-6 rounded-lg sticky top-8">
              <h2 className="text-xl font-bold mb-6 text-regularblue">Informations du projet</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-regularblue mb-1">Client</h3>
                  <div className="flex items-center">
                    <Badge
                      variant="outline"
                      className="bg-lightblue/10 text-regularblue font-medium"
                    >
                      {caseStudy.clientType}
                    </Badge>
                    <span className="ml-2 font-medium font-googletitre text-lg">{caseStudy.clientName}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-regularblue mb-1">Date de réalisation</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-lightblue" />
                    <span className="font-medium font-googletitre text-lg">
                      {caseStudy.date.month && monthNames[caseStudy.date.month - 1]} {caseStudy.date.year}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-regularblue mb-1">Durée du projet</h3>
                  <span className="font-medium font-googletitre text-lg">{caseStudy.duration}</span>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-regularblue mb-2">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-lightblue/10 text-regularblue font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-regularblue mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-lightblue/10 text-regularblue font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {caseStudy.website && (
                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-2">Site web</h3>
                    <a
                      href={caseStudy.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-regularblue font-adobetitre hover:underline"
                    >
                      {caseStudy.website}
                    </a>
                  </div>
                )}

                <Separator />

                <div>
                  <Button className="md:flex gap-1 rounded-full px-6 bg-regularblue hover:bg-regularblue/80 hover:text-white transition-all duration-900 ease-in-out" asChild>
                    <Link href="/contact">Discuter de votre projet</Link>
                  </Button>
                </div>
              </div>
            </div>
            </MagicCard>
          </div>
        </div>

        {/* Autres projets similaires 
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Projets similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarCaseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/etudes-de-cas/${study.slug}`}
                className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded-lg"
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={study.imageUrl || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <Badge
                        variant="outline"
                        className={
                          study.clientType === "PME"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : study.clientType === "Association"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-purple-50 text-purple-700 border-purple-200"
                        }
                      >
                        {study.clientType}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {study.date.month && monthNames[study.date.month - 1]} {study.date.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>*/}

        {/* Call to action */}
        <section className="mt-16 bg-emerald-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous avez un projet similaire ?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Discutons ensemble de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
