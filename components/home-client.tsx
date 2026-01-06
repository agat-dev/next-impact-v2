"use client";
import Hero from "@/components/hero";
import { ExpandableCardDemo } from "./expandable-cards";
import DetailsServices from "./details-services";
import QuestCeQueHeadless from "@/components/quest-ce-que-headless";
import PourquoiSection from "@/components/pourquoi-headless";
import PourQuiSection from "@/components/pour-qui-section";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";

export default function HomeClient() {


  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[800px] left-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-transparent to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[800px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-transparent opacity-10 blur-3xl"></div>
        </div>

        {/* Whats's Headless Section */}
        <ExpandableCardDemo />

        
      {/* Détails services */}
      <section className="py-24">
        <DetailsServices />
      </section>

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
