"use client"

import { HeroSection } from "@/components/services/hero-section"
import { PacksGrid } from "@/components/services/packs-grid"
import { ComparisonTable } from "@/components/services/comparison-table"
import { AddonsSection } from "@/components/services/addons-section"
import { CTASection } from "@/components/services/cta-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PacksGrid />
      <ComparisonTable />
      <AddonsSection />
      <CTASection />

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
