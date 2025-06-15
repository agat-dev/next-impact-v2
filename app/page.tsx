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
      title: "Sites Corporate",
      description:
        "Présentation d'entreprise, services, équipes et réalisations.",
      image: "/img/desktop-screen-sowee.webp?height=400&width=400",
      badge: "WordPress",
      details: [
        "Groupes industriels",
        "PME et startups",
        "Filiales internationales",
      ],
    },
    {
      id: "2",
      title: "Sites Institutionnels",
      description: "Collectivités, associations, fondations.",
      image: "/img/desktop-screen-hermitage.jpg?height=400&width=400",
      badge: "WordPress",
      details: ["Mairies", "ONG", "Établissements publics"],
    },
    {
      id: "3",
      title: "Sites de Services",
      description: "Cabinets, consultants, professions libérales.",
      image: "/img/desktop-screen-itavera-am.jpg?height=400&width=400",
      badge: "WordPress",
      details: ["Cabinets d'avocats", "Consultants", "Centres médicaux"],
    },
    {
      id: "4",
      title: "Portails d'Information",
      description: "Actualités, documentation, ressources",
      image: "/img/desktop-screen-mediatico.jpg?height=400&width=600",
      badge: "WordPress",
      details: ["Centres de formation", "Médias locaux", "Portails RH"],
    },
    {
      id: "5",
      title: "Plateformes collaboratives",
      description: "Wikis, forums, intranets et extranets.",
      image: "/img/desktop-screen-lesdoleances.jpg?height=400&width=600",
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

        {/* Dev Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="mb-6">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4 line-clamp-5">
              WordPress et Développement
            </h2>
            <p className="text-regularblue/80 text-lg max-w-3xl">
              Grâce à des développements spécifiques alignés sur vos besoins,
              nous créons des sites web WordPress qui allient performance, design actuel,
              puissance et évolutivité.
            </p>
            <h3 className="text-2xl mb-8"><strong>Résultat</strong> : Un site performant, avec un back-office reconnu
            </h3>
          </div>
          <Advantages />
        </div>

        {/* Démarche de tarification Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[600px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="mb-6">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4">
              Accessible grâce à l'IA
            </h2>
            <p className="text-regularblue/80 text-lg max-w-2xl">
              Grâce à l'essor de l'IA comme assistant de développement, des solutions plus avancées sont 
              désormais accessibles à toutes les organisations, même avec des budgets limités.
            </p>
            <h3 className="text-2xl mb-8"><strong>Résultat </strong>: Des sites complexes enfin abordables</h3>
          </div>
          <StrategiePrix />
        </div>

        {/* Advantages Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1900px] left-0 h-[1000px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12">
            <h2 className="text-5xl tracking-tight text-regularblue mb-4">
              Types de sites web
            </h2>
            <p className="text-regularblue/80 text-lg max-w-2xl">
              WordPress natif ou Headless pour une présence en ligne
              professionnelle et efficace, réalisable rapidement et possédant
              une administration adaptée aux équipes.
            </p>
          </div>
          <FeatureCarousel features={wordpressFeatures} />
        </div>

        {/* Realisation Section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[3200px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[3600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="pb-12">
            <h2 className="text-4xl md:text-5xl text-regularblue mb-6">
              Etudes de cas
            </h2>
            <p className="text-xl text-regularblue/70 max-w-3xl">
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
          <div className="absolute top-[5900px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[6400px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-20 blur-3xl"></div>
        </div>
        <FAQ />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
