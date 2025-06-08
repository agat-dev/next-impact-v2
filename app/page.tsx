import ServicesDev from "@/components/services-dev";
import Hero from "@/components/hero";
import Tools from "@/components/tools";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq"
import { CTASection } from "@/components/cta-section";
import { DecisionHelper } from "@/components/decision-helper";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Développeuse WordPress Freelance | Next Impact",
    description: "Développeuse WordPress freelance spécialisée en sites web corporate et applications web Headless. Création, refonte, audit et conseil pour des projets sur-mesure.",
    openGraph: {
      title: "Développeuse WordPress Freelance | Next Impact",
      url: "https://next-impact.digital",
      description: "Développeuse WordPress freelance spécialisée en sites web corporate et applications web Headless. Création, refonte, audit et conseil pour des projets sur-mesure.",
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
        <div className="text-center mt-12" id="services">
          <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-4">Services</h2>
          <p className="text-lg text-regularblue/80">La simplicité de WordPress, la qualité du développement</p>
        </div>
      <ServicesDev />
      <DecisionHelper />

      {/* Tools Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[1900px] left-0 h-[1000px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[2200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
      <Tools />

      {/* Realisation Section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[3200px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-[3600px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
      </div>
        <div className="flex flex-col items-center text-center md:mb-16 mb-2">
					<div className="pb-6 text-center">
						<h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
							Etudes de cas
						</h2>
						<p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
							Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients.
						</p>
					</div>
				</div>
      <Realisations count={18} />
      

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
