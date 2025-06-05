import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MagicCard } from "@/components/magicui/magic-card";

// Types pour les études de cas
type ClientType =
  | "Grande entreprise"
  | "PME"
  | "Association"
  | "Indépendant"
  | "Tous";
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null;
type Year = number | null;

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  clientType: ClientType;
  clientName: string;
  date: {
    month: Month;
    year: Year;
  };
  tags: string[];
  objectives: string[];
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    position: string;
  };
  gallery: {
    url: string;
    alt: string;
  }[];
  detailedDescription: string;
  technologies: string[];
  duration: string;
  website?: string;
}

// Données d'exemple (à remplacer par vos vraies données)
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "proditec",
    title: "Refonte du site corporate multilingue",
    description:
      "Création d'un site moderne et performant pour une entreprise de l'industrie robotique internationale.",
    imageUrl: "/img/logo-proditec.webp",
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
        "J'ai eu le plaisir de collaborer avec Agathe pour la refonte de notre site multilingue, et je ne peux que recommander ses services. Agathe se distingue par sa capacité à comprendre rapidement les enjeux business et à les traduire en solutions techniques efficaces. Pour notre projet, elle a su créer une landing page sur mesure qui reflète parfaitement notre identité de marque, tout en intégrant un système multilingue fluide et intuitif.",
      author: "Christophe Riboulet",
      position: "PDG, Proditec",
    },
    gallery: {
      url: "/img/desktop-screen-proditec.jpg",
      alt: "Page d'accueil du site Proditec",
    },
    detailedDescription: `Proditec, une entreprise spécialisée dans la robotique industrielle, avait besoin d'une refonte complète de son site web pour 
      refléter son travail et sa reconnaissance internationale. Leur ancien site était obsolète, difficile à naviguer et à administrer et ne prenait 
      pas en charge le multilingue.\n\nNous avons créé un site WordPress avec un design responsive et une interface 
      utilisateur et administrateur technique et efficace pour être utilisées par tous.
      Le site est entièrement multilingue grâce à l'intégration de Polylang, 
      permettant aux visiteurs de choisir leur langue préférée.
      \n\nLe nouveau site met en avant les produits phares de Proditec avec des détails précis sur leurs machines.
      Des optimisations techniques ont été mises en place pour améliorer la vitesse de chargement du site, 
      ce qui a permis d'atteindre un score PageSpeed de 98 sur mobile et desktop.`,
    technologies: [
      "WordPress",
      "LiteSpeed",
      "Polylang",
      "elementor",
      "Hostinger",
    ],
    duration: "1 mois",
    website: "https://proditec.com",
  },
  {
    id: "2",
    slug: "doleances",
    title: "Site vitrine de l'Association des Doléances",
    description:
      "Création d'un site vitrine inspiré de Wikipédia destiné à promouvoir l'action de l'association.",
    imageUrl: "/img/logo-doleances.png",
    clientType: "Association",
    clientName: "Association Les Doléances",
    date: {
      month: 5,
      year: 2025,
    },
    tags: ["site vitrine", "WordPress", "Next.js", "headless"],
    objectives: [
      "Présenter les actions et les projets de l'association",
      "S'inspirer de Wikipédia pour communiquer l'idée de participation libre",
      "Inciter à l'engagement citoyen",
    ],
    results: [
      "Cartographie interactive des groupes locaux",
      "Section Agenda pour les événements",
      "Administration simplifiée via WordPress en Headless",
    ],
    gallery: {
      url: "/img/desktop-screen-lesdoleances.jpg",
      alt: "Page d'accueil du site Les Doléances",
    },
    detailedDescription:
      "L'association Les Doléances, nouvellement créée a pour vocation de mettre à disposition des citoyens les Doléances de 2018-2019. Pour évoquer l'esprit communautaire et participatif, ainsi que la liberté d'accès à l'information, un template très largement inspiré de Wikipédia a été choisi.\n\nLe site est construit sur WordPress en Headless avec Next.js, permettant une expérience utilisateur fluide et rapide. Le design est épuré, mettant en avant l'action et la démarche.\n\nLe site comprend une cartographie de ses groupes locaux et une section d'articles catégorisés.\n\nLe site est entièrement responsive et optimisé pour le référencement naturel, afin d'attirer un maximum de visiteurs et de sensibiliser le public aux actions de l'association.",
    technologies: [
      "WordPress",
      "Next.js",
      "Tailwind CSS",
      "Headless CMS",
      "Vercel",
    ],
    duration: "2 mois",
    website: "https://lesdoleances.fr",
  },
  {
    id: "3",
    slug: "french-touch-seeds",
    title: "Ecommerce pour la vente de produits CBD",
    description:
      "Refonte d'une boutique en ligne multilingue pour la vente de produits CBD.",
    imageUrl: "/img/logo_french-touch-seeds.avif",
    clientType: "PME",
    clientName: "French Touch Seeds",
    date: {
      month: 3,
      year: 2025,
    },
    tags: ["ecommerce", "Woocommerce", "multilingue"],
    objectives: [
      "Créer rapidement une boutique en ligne",
      "Garder un design épuré et moderne",
      "Optimiser les performances du site",
      "Faciliter la mise à jour du contenu",
    ],
    results: [
      "Augmentation des backlinks de 150%",
      "Mise en valeur des produits phares",
      "Stabilité et rapidité du site grandement améliorées",
      "Augmentation du temps passé sur le site",
    ],
    gallery: {
      url: "/img/desktop-screen-frenchtouchseeds.jpg",
      alt: "Interface de la boutique en ligne French Touch Seeds",
    },
    detailedDescription:
      "French Touch Seeds, une entreprise spécialisée dans la vente de produits CBD, avait besoin d'une refonte complète de sa boutique en ligne pour améliorer l'expérience utilisateur et optimiser les performances du site.\n\nNous avons créé un site e-commerce sur mesure avec WooCommerce, en mettant l'accent sur un design épuré et moderne. Le site est entièrement multilingue, permettant aux clients internationaux de naviguer facilement.\n\nLe site met en avant les produits phares avec des descriptions détaillées et des photos haute qualité. Un système de filtrage avancé permet aux clients de trouver rapidement les produits qui les intéressent.",
    technologies: ["WordPress", "Woocommerce", "Polylang"],
    duration: "10 jours",
    website: "https://https://frenchtouchseeds.com/",
  },
  {
    id: "4",
    slug: "sowee",
    title: "Section blog pour le portail de l'entreprise Sowee",
    description:
      "Création d'une section blog pour le portail de l'entreprise Sowee, spécialisée dans les solutions énergétiques.",
    imageUrl: "/img/logo-sowee.jpeg",
    clientType: "Grande entreprise",
    clientName: "Sowee",
    date: {
      month: 11,
      year: 2023,
    },
    tags: ["blog", "thème custom", "WordPress"],
    objectives: [
      "Créer un thème WordPress personnalisé pour le blog",
      "Respecter les maquettes fournies par l'équipe marketing",
      "Réaliser le projet dans un délai de 10 jours",
    ],
    results: [
      "Intégration réussie du thème personnalisé",
      "Respect des maquettes et de l'identité visuelle",
      "Tenue du délai de 10 jours",
      "Administration simplifiée pour l'équipe marketing",
    ],
    gallery: {
      url: "/img/desktop-screen-sowee.png",
      alt: "Interface de la section blog Sowee",
    },
    detailedDescription:
      "Sowee, une entreprise spécialisée dans les solutions énergétiques, souhaitait créer une section blog pour son portail Drupal tout en utilisant WordPress. L'objectif était de fournir un espace où l'équipe marketing pourrait publier des articles sur les tendances du secteur, les innovations et les conseils pour les consommateurs.\n\nNous avons développé un thème WordPress personnalisé en respectant les maquettes fournies par l'équipe marketing. Le design est moderne et épuré, avec une navigation intuitive pour les lecteurs.\n\nLa section blog permet à l'équipe de publier facilement des articles, d'ajouter des images et de gérer les catégories.",
    technologies: [
      "GeneratePress",
      "WordPress",
      "Figma (maquettes)",
      "PHP",
      "GitHub Actions (CI/CD)",
    ],
    duration: "5 jours",
    website: "https://sowee.fr/conseils",
  },
  {
    id: "5",
    slug: "salon-de-la-carrosserie",
    title: "Site vitrine du Salon de la Carrosserie 2024",
    description:
      "Création d'un site vitrine pour le Salon de la Carrosserie 2024, avec un design moderne et un espace d'inscription pour exposants.",
    imageUrl: "/img/logo-salondelacarrosserie.webp",
    clientType: "PME",
    clientName: "Salon de la Carrosserie",
    date: {
      month: 2,
      year: 2024,
    },
    tags: ["événementiel", "WordPress", "espace membres"],
    objectives: [
      "Communiquer sur l'événement et ses exposants",
      "Créer un espace d'inscription pour les exposants",
      "Mettre en avant les partenaires et sponsors",
      "Optimiser le référencement naturel pour attirer les visiteurs",
      "Faciliter la navigation et l'accès aux informations",
    ],
    results: [
      "Informations claires sur l'événement et les exposants",
      "Espace d'inscription pour les exposants avec gestion des disponibilités",
      "Partenaires et sponsors mis en avant sur la page d'accueil",
    ],
    testimonial: {
      content:
        "Du professionnalisme, un réel esprit d’initiative, le sens du conseil et une réactivité totale ! Ajouter un bon état d’esprit d’une personne qui n’hésite pas à « dépasser » la charge de travail et sa fonction pour améliorer la qualité de la prestation.",
      author: "Luc Poigniez",
      position: "Fondateur, Agence Créaclic",
    },
    gallery: {
      url: "/img/desktop-screen-salondelacarrosserie.jpg",
      alt: "Page d'accueil du site Salon de la Carrosserie",
    },
    detailedDescription:
      "Le Salon de la Carrosserie, un événement majeur pour les professionnels du secteur, avait besoin d'un site vitrine pour promouvoir l'événement et faciliter l'inscription des exposants. L'objectif était de créer un site moderne et fonctionnel qui reflète l'importance de l'événement.\n\nNous avons développé un site WordPress avec un design épuré et une navigation intuitive. La page d'accueil présente les informations clés sur l'événement, les exposants et les partenaires.\n\nUn espace d'inscription pour les exposants a été mis en place, permettant aux entreprises de s'inscrire facilement et de gérer leurs disponibilités. Le site est entièrement responsive et optimisé pour le référencement naturel.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Ultimate Member",
    ],
    duration: "15 jours",
    website: "https://salondelacarrosserie.com",
  },
  {
    id: "6",
    slug: "eco-protect",
    title: "Plateforme de dons pour ONG environnementale",
    description:
      "Développement d'une plateforme de dons sécurisée avec rapports d'impact.",
    imageUrl:
      "/placeholder.svg?height=600&width=1200&query=environmental+ngo+donation+platform",
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
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "SendGrid",
      "Vercel",
    ],
    duration: "3 mois",
    website: "https://eco-protect.org",
  },
];

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
];

// Fonction pour obtenir les études de cas similaires
function getSimilarCaseStudies(
  currentStudy: CaseStudy,
  limit = 3
): CaseStudy[] {
  // Filtrer pour exclure l'étude de cas actuelle et trouver des études similaires
  // basées sur le type de client ou les tags communs
  return CASE_STUDIES.filter((study) => {
    if (study.id === currentStudy.id) return false;

    // Vérifier si le type de client est le même
    const sameClientType = study.clientType === currentStudy.clientType;

    // Vérifier s'il y a des tags communs
    const commonTags = study.tags.filter((tag) =>
      currentStudy.tags.includes(tag)
    );

    return sameClientType || commonTags.length > 0;
  }).slice(0, limit);
}

// Fonction pour générer les métadonnées de la page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = CASE_STUDIES.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    return {
      title: "Étude de cas non trouvée - Next Impact Digital",
      description: "L'étude de cas que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${caseStudy.title} - Next Impact Digital`,
    description: caseStudy.description,
  };
}

// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  // Trouver l'étude de cas correspondant au slug
  const caseStudy = CASE_STUDIES.find((study) => study.slug === params.slug);

  // Si l'étude de cas n'existe pas, afficher une page 404
  if (!caseStudy) {
    notFound();
  }

  // Obtenir des études de cas similaires
  const similarCaseStudies = getSimilarCaseStudies(caseStudy);

  return (
    <main className="min-h-screen">
      {/* Hero section avec image et titre */}
      <div className="container relative h-full flex flex-col justify-end py-16 px-4 md:px-6">
        <Link
          href="/etudes-de-cas"
          className="text-regularblue/70 mb-4 flex items-center hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux réalisations
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-regularblue mb-4">
          {caseStudy.title}
        </h1>
        <p className="text-xl max-w-3xl text-regularblue/70">
          {caseStudy.description}
        </p>
      </div>

      {/* Contenu principal */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-10">
            {/* Présentation du projet */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-regularblue">
                Présentation du projet
              </h2>
              <div className="prose max-w-none">
                {caseStudy.detailedDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-regularblue/80 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </section>

            {/* Objectifs et résultats */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-regularblue">
                  Objectifs
                </h2>
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
                <h2 className="text-2xl font-bold mb-6 text-regularblue">
                  Résultats
                </h2>
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
              <h2 className="text-2xl font-bold mb-6 text-regularblue">
                Aperçu du projet
              </h2>
              <div className="rounded-lg border overflow-hidden">
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
              <section className="bg-extralightblue/10 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-regularblue">
                  Témoignage client
                </h2>
                <blockquote className="relative">
                  <div className="text-lg italic text-mediumblue mb-4">
                    "{caseStudy.testimonial.content}"
                  </div>
                  <footer className="flex items-center">
                    <div className="h-12 w-12 flex items-center justify-center mr-4">
                      <Image
                        src={caseStudy.imageUrl}
                        alt={caseStudy.testimonial.author}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-adobetitre">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-regularblue">
                        {caseStudy.testimonial.position}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </section>
            )}
          </div>

          {/* Sidebar avec informations du projet */}
          <div className="lg:col-span-1">
            <MagicCard className="rounded-2xl bg-white border-none">
              <div className="p-6 top-8">
                <h2 className="text-xl font-bold mb-6 text-regularblue">
                  Informations du projet
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-1">
                      Client
                    </h3>
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="bg-lightblue/10 text-regularblue font-medium"
                      >
                        {caseStudy.clientType}
                      </Badge>
                      <span className="ml-2 font-medium font-googletitre text-lg">
                        {caseStudy.clientName}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-1">
                      Date de réalisation
                    </h3>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-lightblue" />
                      <span className="font-medium font-googletitre text-lg">
                        {caseStudy.date.month &&
                          monthNames[caseStudy.date.month - 1]}{" "}
                        {caseStudy.date.year}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-1">
                      Durée du projet
                    </h3>
                    <span className="font-medium font-googletitre text-lg">
                      {caseStudy.duration}
                    </span>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-2">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-lightblue/10 text-regularblue font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-regularblue mb-2">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-lightblue/10 text-regularblue font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {caseStudy.website && (
                    <div>
                      <h3 className="text-sm font-medium text-regularblue mb-2">
                        Site web
                      </h3>
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
                    <Button
                      className="md:flex gap-1 rounded-full px-6 bg-regularblue hover:bg-regularblue/80 hover:text-white transition-all duration-900 ease-in-out"
                      asChild
                    >
                      <Link
                        target="_blank"
                        href="https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress"
                      >
                        Discuter de votre projet
                      </Link>
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
        <section className="mt-16 bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl text-regularblue font-bold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-lg text-regularblue/80 mb-6 max-w-2xl mx-auto">
            Discutons ensemble de votre projet et voyons comment nous pouvons
            vous aider à atteindre vos objectifs.
          </p>
          <Button
            size="lg"
            className="gap-1 rounded-full bg-regularblue/90 hover:bg-regularblue/80"
          >
            <Link
              target="_blank"
              href="https://calendly.com/agat-dev/brief-de-creation-de-site-web-wordpress"
              className="text-white hover:text-white"
            >
              Contactez-nous
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
