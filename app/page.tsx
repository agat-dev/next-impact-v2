import Hero from "@/components/hero";
import Tools from "@/components/tools";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import FeatureCarousel from "@/components/services/features-carousel";
import { Metadata } from "next";
import Advantages from "@/components/advantages";
import StrategiePrix from "@/components/strategie-prix";
import QuizNiveauWordpress from "@/components/quiz-niveau-wordpress";
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

  {
    /*
  
  {
    id: "6",
    title: "Applications Web",
    description: "Solutions sur-mesure, intégrations API, gestion de données.",
    image: "/img/desktop-screen-application-web.jpg?height=400&width=600",
    badge: "Headless WordPress",
    details: ["Applications métiers", "Portails clients", "Intranets"],
  },
  */
  }

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Offre 
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1900px] left-0 h-[1000px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4">
              Quel types de site web ?
            </h2>
            <p className="text-regularblue/80 text-lg max-w-2xl mx-auto">
              WordPress natif ou Headless pour une présence en ligne
              professionnelle et efficace, réalisable rapidement et possédant
              une administration adaptée aux équipes.
            </p>
            <h3 className="text-2xl mb-8">
              <strong>Résultat </strong>: Un site web totalement aligné sur le
              besoin
            </h3>
          </div>
          <FeatureCarousel features={wordpressFeatures} />

          {/*
          <Advantages />

        </div>          */}

        {/* Détails techniques */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="mb-6 text-center">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4 line-clamp-5">
              Offre de services WordPress
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
            <div className="flex flex-col items-center p-6 justify-between bg-white rounded-2xl border border-extrlightblue/30">
              <img
                src="/img/logo-wordpress.png"
                alt="WordPress Logo"
                className="h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-regularblue mb-3">
                WordPress
              </h3>
              <p className="text-mediumblue/80 text-center font-googletitre text-lg font-medium pb-5">
                Site professionnel, rapide et fiable
              </p>
              <p className="text-mediumblue/80 text-center">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                Parfait pour : PME, artisans, professions libérales
              </p>
              <Link
                href="/services/wordpress"
                className="mt-4 text-blue-500 hover:underline"
              >
                <Button className="text-sm rounded-full bg-regularblue text-white px-4 py-2 hover:bg-regularblue/90">
                  En savoir plus
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-between p-6 bg-white rounded-2xl border border-extrlightblue/30">
              <img
                src="/img/logo-nextjs.png"
                alt="Next.js Logo"
                className="h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-regularblue mb-3">
                Headless WordPress
              </h3>
              <p className="text-mediumblue/80 text-center font-googletitre text-lg font-medium pb-5">
                Solution métier sur-mesure
              </p>
              <p className="text-mediumblue/80 text-center">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                Parfait pour : PME industrie, services B2B
              </p>
              <Link
                href="/services/headless"
                className="mt-4 text-blue-500 hover:underline"
              >
                <Button className="text-sm rounded-full bg-regularblue text-white px-4 py-2 hover:bg-regularblue/90">
                  En savoir plus
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-between p-6 bg-white rounded-2xl border border-extrlightblue/30">
              <img
                src="/img/logo-code.jpg"
                alt="WordPress Custom Logo"
                className="h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-regularblue mb-3">
                WordPress Custom
              </h3>
              <p className="text-mediumblue/80 text-center font-googletitre text-lg font-medium pb-5">
                Performance enterprise accessible
              </p>
              <p className="text-mediumblue/80 text-center">
                <ArrowRight className="inline h-4 w-4 mr-1" />
                Parfait pour : PME ambitieuses, forte croissance
              </p>
              <Link
                href="/services/wordpress"
                className="mt-4 text-blue-500 hover:underline"
              >
                <Button className="text-sm rounded-full bg-regularblue text-white px-4 py-2 hover:bg-regularblue/90">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>

{/*
          <div id="quiz-niveau-wordpress">
            <QuizNiveauWordpress />
          </div> */}
        </div>

        {/* Support de l'IA 
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="mb-6 text-center">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4">
              Moins chers grâce à l'IA
            </h2>
            <p className="text-regularblue/80 text-lg max-w-2xl mx-auto">
              Grâce à l'essor de l'IA comme assistant de développement, des
              solutions plus avancées sont désormais accessibles à toutes les
              organisations, même avec des budgets limités.
            </p>
            <h3 className="text-2xl mb-8">
              <strong>Résultat </strong>: Des sites complexes enfin abordables
            </h3>
          </div>
          <StrategiePrix />
        </div> */}

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
          <Realisations count={18} />
        </div>

        {/* Testimonials Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[4400px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[4600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <Testimonials />

        {/* FAQ Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[5900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[6400px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-20 blur-3xl"></div>
        </div>
        <FAQ />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
