import Hero from "@/components/hero";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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


  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Détails techniques */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-6 py-12">
          <div className="mb-6 text-center">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4 line-clamp-5">
              Services de développement
            </h2>
          </div>

          <div className="flex justify-evenly py-8">
            <div className="flex flex-col gap-6 py-6 px-8 justify-between bg-white rounded-2xl border border-extrlightblue/30">           
              <img
                src="/img/logo-wordpress.png"
                alt="WordPress Logo"
                className="h-14 my-4 mx-auto object-contain"
              />
              <p className="text-regularblue text-left mt-4 text-lg font-googletitre">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                <span className="text-regularblue text-2xl font-googletitre font-medium">WordPress headless</span><br/><span className="text-mediumblue/80 text-base">pour des interfaces modernes et performantes</span>
              </p>
              
              <p className="text-left mt-4 text-lg font-googletitre">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                <span className="text-regularblue text-2xl font-googletitre font-medium">WordPress classique</span><br/><span className="text-mediumblue/80 text-base">pour des sites simples et fonctionnels</span>
              </p>
              <Link
                href="/services"
                className="mt-4 text-blue-500 hover:underline mx-auto"
              >
                <Button className="text-sm rounded-full bg-regularblue text-white px-4 py-2 hover:bg-regularblue/90">
                  En savoir plus
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-6 py-6 px-8 justify-between bg-white rounded-2xl border border-extrlightblue/30">           
              <img
                src="/img/logo-nextjs.png"
                alt="Next.js Logo"
                className="h-10 my-4 mx-auto object-contain"
              />
              <p className="text-regularblue text-left mt-4 text-lg font-googletitre">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                <span className="text-regularblue text-2xl font-googletitre font-medium">Headless Next.js</span><br/><span className="text-mediumblue/80 text-base">pour des interfaces modernes et performantes</span>
              </p>
              
              <p className="text-left mt-4 text-lg font-googletitre">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                <span className="text-regularblue text-2xl font-googletitre font-medium">Next.js classique</span><br/><span className="text-mediumblue/80 text-base">pour des sites visuels et rapides</span>
              </p>
              <Link
                href="/services"
                className="mt-4 text-blue-500 hover:underline mx-auto"
              >
                <Button className="text-sm rounded-full bg-regularblue text-white px-4 py-2 hover:bg-regularblue/90">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Realisation Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[3200px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[3600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="pb-12 text-center">
            <h2 className="text-4xl md:text-5xl text-regularblue mb-6">
              Réalisations
            </h2>
            <p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
              Chaque projet est unique et conçu pour répondre aux besoins
              spécifiques de mes clients.
            </p>
          </div>
          <Realisations count={3} />
        </div>

        {/* Testimonials Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[4000px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[4300px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
