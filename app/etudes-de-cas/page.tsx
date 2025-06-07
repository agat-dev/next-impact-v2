import Realisations from "@/components/case-studies/realisations" 
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Réalisations de site web WordPress | Next Impact",
    description: "Découvrez nos études de cas de création de sites web WordPress pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigences de qualité ou applications web.",
    openGraph: {
      title: "Réalisations de site web WordPress  | Next Impact",
      url: "https://next-impact.digital/etudes-de-cas",
      siteName: "Next Impact - Développeuse WordPress Freelance",
      description: "Découvrez nos études de cas de création de sites web WordPress pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigences de qualité ou applications web.",
      type: "website",
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

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
              {/* Hero Section */}
        <section className="container mx-auto px-4 md:py-16 pt-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-12 mb-6">
            Etudes de cas 
          </h1>
          <p className="text-xl text-regularblue/80 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des sites web performants et adaptés à leurs besoins.
          </p>
        </section>
      <div className="container mx-auto pb-12">
        <Realisations count={100} />
      </div>
    </main>
  )
}
