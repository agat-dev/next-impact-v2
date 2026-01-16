import Hero from "@/components/hero";
import Advantages from "@/components/advantages";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logos } from "@/components/logos";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Développeuse WordPress Freelance | Next Impact",
    description:
      "Développeuse WordPress freelance spécialisée en sites web corporate et applications web Headless. Création, refonte, audit et conseil pour des projets sur-mesure.",
    openGraph: {
      title: "Développeuse WordPress Freelance | Next Impact",
      url: "https://next-impact.digital",
      description:
        "Développeuse WordPress freelance spécialisée en sites web corporate et applications web Headless. Création, refonte, audit et conseil pour des projets sur-mesure.",
      type: "website",
      siteName: "Next Impact - Développeuse WordPress Freelance",
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

export default function Home() {
  const wordpressFeatures = [
    {
      id: "1",
      title: "Sites Vitrine",
      description:
        "Présentation de l'entreprise, services, équipes et réalisations.",
      image: "/img/tourisme-valeur.jpg?height=400&width=400",
      badge: "WordPress",
      details: [
        "Artisans et professions libérales",
        "PME et TPE",
        "Associations et ESS",
      ],
    },
    {
      id: "2",
      title: "Sites Institutionnels",
      description: "Collectivités, associations, fondations.",
      image: "/img/asso-solidarite.jpg?height=400&width=400",
      badge: "WordPress",
      details: ["Mairies", "ONG", "Établissements publics"],
    },
    {
      id: "3",
      title: "Sites Corporate",
      description:
        "Site vitrine et fonctionnalités complémentaires.",
      image: "/img/pme-indus-homepage.jpg",
      badge: "WordPress",
      details: ["PME commerciales", "PME industrielles", "Sociétés de services"],
    },
    {
      id: "4",
      title: "Portails d'Information",
      description: "Actualités, documentation, ressources",
      image: "/img/portail-infos.jpg?height=400&width=600",
      badge: "WordPress",
      details: ["Centres de formation", "Médias locaux", "Portails RH"],
    },
    {
      id: "5",
      title: "Plateformes collaboratives",
      description: "Wikis, forums, intranets et extranets.",
      image: "/img/intranet.jpg?height=400&width=600",
      badge: "Headless WordPress",
      details: ["Wikis", "Forums", "Intranets et Extranets"],
    },
  ];

  {
  }

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Logos Section */}
      <Logos className="max-w-6xl mx-auto grid gap-8" />

        {/* Détails offre */}
        <div className="w-full max-w-7xl mx-auto mt-24 px-6 py-12">
          <div className="mb-6 text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-extralightblue/30">
            <h2 className="text-4xl tracking-tight text-coral/80 font-googletexte mb-4 line-clamp-5">
              <div className="text-5xl text-regularblue font-googletitre font-medium">Services</div> WordPress & Headless
            </h2>
            <p className="text-regularblue/80 text-lg max-w-3xl mx-auto">
              Grâce à des développements spécifiques alignés sur vos besoins,
              nous créons des sites web WordPress, WordPress custom et des
              WordPress Headless qui allient performance, design actuel,
              puissance et évolutivité.
            </p>
            <h3 className="text-2xl mb-8">
              <strong>Résultat</strong> : Un site alliant performance et le
              back-office le plus utilisé
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {/* Première carte */}
            <div className="flex flex-col p-6 justify-start items-start bg-white/10 backdrop-blur-lg rounded-2xl border border-extrlightblue/30">
              <img
                src="/icons/frontend-icon-light.svg"
                alt="WordPress Logo"
                className="h-24 mb-5 object-contain"
              />
              <h3 className="text-3xl font-semibold text-regularblue ">
                Site vitrine standard
              </h3>
              <p className="text-coral font-googletitre text-2xl font-medium pb-12">
                WordPress
              </p>
              <div className="text-mediumblue/80">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-coral pb-1 mb-4">
                  Type d'entreprise
                </div>
                <p>
                  TPE, PME, blogueurs, ou services marketing souhaitant une autonomie totale.
                </p>
              </div>
              <div className="mt-8 text-mediumblue/80">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-orange pb-1 mb-4">
                  Type de projets
                </div>
                <p>
                  Blogs classiques, E-commerce avec WooCommerce (le plus simple à mettre en place), Projets avec un budget limité et des délais courts.
                </p>
              </div>
            </div>
            {/* Deuxième carte */}
            <div className="flex flex-col p-6 justify-start items-start bg-white/10 backdrop-blur-lg rounded-2xl border border-extralightblue/30">
              <img
                src="/icons/brand-reach-icon-light.svg"
                alt="Astro Logo"
                className="h-24 mb-5 object-contain"
              />
              <h3 className="text-3xl font-semibold text-regularblue ">
                Sites vitrines Premium
              </h3>
              <p className="text-coral font-googletitre text-2xl font-medium pb-12">
                WordPress Headless + Astro
              </p>
              <div className="text-mediumblue/70">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-coral pb-1 mb-4">
                  Idéal pour
                </div>
                <p>
                  Entreprises soucieuses de leur image, du SEO et de la vitesse de chargement
                </p>
              </div>
              <div className="mt-8 text-mediumblue/80">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-orange pb-1 mb-4">
                  Type de projets
                </div>
                <p>
                  Sites vitrines haut de gamme où l'expérience visuelle est centrale, Projets à gros volumes de contenus à charger rapidement.
                </p>
              </div>
            </div>
            {/* Troisième carte */}
            <div className="flex flex-col p-6 justify-start items-start bg-white/10 backdrop-blur-lg rounded-2xl border border-extralightblue/30">
              <img
                src="/icons/saas-features-icon-light.svg"
                alt="Next.js Logo"
                className="h-24 mb-5 object-contain"
              />
              <h3 className="text-3xl font-semibold text-regularblue ">
                Web Applications
              </h3>
              <p className="text-coral font-googletitre text-2xl font-medium pb-12">
                WordPress Headless + Next.js
              </p>
              <div className="text-mediumblue/80">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-coral pb-1 mb-4">
                  Idéal pour
                </div>
                <p>
                  Entreprises ayant besoin de fonctionnalités sur-mesure très spécifiques
                </p>
              </div>
              <div className="mt-8 text-mediumblue/80">
                <div className="text-xl font-medium font-googletitre text-regularblue border-b border-orange pb-1 mb-4">
                  Type de projets
                </div>
                <p>
                  Sites hybrides avec éléments d'interaction avancés (recherche temps réel, compte client), Web Apps complexes avec portails clients, simulateurs ou tableaux de bord etc.
                </p>
              </div>
            </div>
          </div>

{/*
          <div id="quiz-niveau-wordpress">
            <QuizNiveauWordpress />
          </div> */}
        </div>


        {/* Advantages Section */}
        <section className="w-full mx-auto px-6 py-24 mt-24 mb-36 bg-white/10 backdrop-blur-lg border-y border-extralightblue/30">
        <Advantages />
        </section>


        {/* Realisation Section */}

        <div className="w-full mx-auto px-6 py-24 my-24 bg-white/10 backdrop-blur-lg border-y border-extralightblue/30">
          <div className="pb-12 text-center">
            <h2 className="text-4xl md:text-5xl text-regularblue mb-6 font-medium">
              Réalisations
            </h2>
            <p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
              Chaque projet est unique et conçu pour répondre aux besoins
              spécifiques de mes clients.
            </p>
          </div>
          <Realisations count={6} />
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}

        <div className="w-full mx-auto px-6 py-24 my-24 bg-white/10 backdrop-blur-lg border-y border-extralightblue/30">
        <FAQ />
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
