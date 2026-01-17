import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
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
        <ServicesSection />


        {/* Advantages Section */}
        <section className="w-full mx-auto px-6 py-24 mt-24 mb-36 backdrop-blur-lg border-y border-yellow-100/70 bg-yellow-100/5">
        <Advantages />
        </section>


        {/* Realisation Section */}

        <div className="w-full mx-auto px-6 py-24 my-24 bg-white/5 backdrop-blur-lg border-y border-extralightblue/30">
          <div className="pb-12 text-center">
            <h2 className="text-4xl md:text-5xl text-regularblue mb-6 font-medium">
              Etudes de cas
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

      </main>
    </>
  );
}
