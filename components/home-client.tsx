"use client";

import Hero from "@/components/hero";
import Realisations from "@/components/case-studies/realisations";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShiftCard } from "@/components/ui/shift-card";
import { motion } from "framer-motion";

export default function HomeClient() {
  // ...existing code for Home (JSX, arrays, etc.)
  const wordpressFeatures = [
    // ...same as before
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
          <div className="text-center">
            <h2 className="text-5xl tracking-tight font-medium text-regularblue">
              Sites Web impactants
            </h2>
          </div>
          <div className="relative w-3/4 mx-auto rounded-[4rem]">
            <div>
              <div className="text-center mb-16">
                <p className="text-xl text-regularblue/80 text-center max-w-2xl mx-auto">
                  Que vous soyez une petite ou moyenne entreprise (PME) ou une organisation de l'économie sociale et solidaire (ESS), les solutions sont à adapter à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
          {/* ...le reste du code inchangé... */}
          <div className="flex justify-evenly py-8">
            {/* ...section WordPress/Next.js... */}
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
              Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients.
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
