"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"

const CustomIcon = ({ src, className = "" }: { src: string; className?: string }) => (
  <img src={src || "/placeholder.svg"} alt="" className={className} style={{ width: "1.25rem", height: "1.25rem" }} />
)

export function PacksGrid() {
  const [selectedPack, setSelectedPack] = useState<number | null>(null)

  const packs = [
    {
      id: 1,
      name: "Performance Boost",
      tagline: "Idéal TPE / PME",
      icon: () => <CustomIcon src="/icons/speed-icon.svg" />,
      color: "#719ED9",
      description: "L'essentiel pour transformer un WordPress lent en un site ultra-rapide et sécurisé.",
      features: [
        {
          icon: () => <CustomIcon src="/icons/optimize-icon.svg" />,
          text: "Audit technique",
          desc: "Analyse de votre WordPress actuel",
        },
        {
          icon: () => <CustomIcon src="/icons/frontend-icon.svg" />,
          text: "Front-end Next.js",
          desc: "Création d'un thème moderne basé sur vos maquettes",
        },
        {
          icon: () => <CustomIcon src="/icons/api-icon.svg" />,
          text: "Connexion API",
          desc: "Mise en place de WPGraphQL pour récupération rapide",
        },
        {
          icon: () => <CustomIcon src="/icons/globe-network-icon.svg" />,
          text: "SEO Fondamental",
          desc: "Configuration des balises meta dynamiques et Sitemap",
        },
        {
          icon: () => <CustomIcon src="/icons/cloud-icon.svg" />,
          text: "Hébergement",
          desc: "Déploiement sur Vercel ou Netlify (Edge Network)",
        },
      ],
      deliverable: "Un site statique qui charge en moins d'une seconde",
      price: "À partir de 3 500€",
    },
    {
      id: 2,
      name: "Business Évolutif",
      tagline: "Le Best-Seller",
      icon: () => <CustomIcon src="/icons/rocket-icon.svg" />,
      color: "#1F54BF",
      popular: true,
      description:
        "Conçu pour les entreprises qui ont besoin d'une flexibilité totale et d'une expérience utilisateur premium.",
      features: [
        { icon: CheckCircle2, text: "Tout le Pack Performance Boost" },
        {
          icon: () => <CustomIcon src="/icons/layers-icon.svg" />,
          text: "Architecture ACF Pro",
          desc: "Blocs d'administration sur-mesure pour autonomie totale",
        },
        {
          icon: () => <CustomIcon src="/icons/speed-icon.svg" />,
          text: "Recherche Instantanée",
          desc: "Intégration Algolia ou Fuse.js ultra-rapide",
        },
        {
          icon: () => <CustomIcon src="/icons/optimize-icon.svg" />,
          text: "Optimisation d'Images",
          desc: "Pipeline automatique (WebP/AVIF)",
        },
        {
          icon: () => <CustomIcon src="/icons/shield-icon.svg" />,
          text: "Formulaires Avancés",
          desc: "Intégration sécurisée Contact Form 7 ou Gravity Forms",
        },
        {
          icon: () => <CustomIcon src="/icons/settings-icon.svg" />,
          text: "Formation",
          desc: "2h de formation pour vos équipes éditoriales",
        },
      ],
      deliverable: "Une plateforme flexible et évolutive pour votre croissance",
      price: "À partir de 7 500€",
    },
    {
      id: 3,
      name: "Enterprise Architecture",
      tagline: "Sur-mesure",
      icon: () => <CustomIcon src="/icons/workflow-icon.svg" />,
      color: "#F29F05",
      description: "Pour les projets complexes nécessitant une intégration profonde et une scalabilité mondiale.",
      features: [
        { icon: CheckCircle2, text: "Tout le Pack Business Évolutif" },
        {
          icon: () => <CustomIcon src="/icons/database-icon.svg" />,
          text: "Multi-sources",
          desc: "Agrégation WordPress + APIs (Shopify, CRM, Flux externes)",
        },
        {
          icon: () => <CustomIcon src="/icons/scale-icon.svg" />,
          text: "ISR",
          desc: "Incremental Static Regeneration - Mise à jour temps réel",
        },
        {
          icon: () => <CustomIcon src="/icons/globe-network-icon.svg" />,
          text: "Internationalisation (i18n)",
          desc: "Sites multilingues avec géolocalisation",
        },
        {
          icon: () => <CustomIcon src="/icons/shield-icon.svg" />,
          text: "Sécurité Durcie",
          desc: "Pare-feu avancé et isolation totale de WordPress",
        },
        {
          icon: () => <CustomIcon src="/icons/monitor-icon.svg" />,
          text: "Accompagnement Stratégique",
          desc: "Conseil évolution stack à 24 mois",
        },
      ],
      deliverable: "Une architecture enterprise-grade pour une croissance internationale",
      price: "Sur devis - À partir de 15 000€",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
      <div className="grid md:grid-cols-3 gap-8">
        {packs.map((pack, idx) => (
          <Card
            key={pack.id}
            className={`relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              pack.popular ? "border-[#F29F05] bg-white shadow-xl" : "border-[#719ED9]/30 bg-white/5 backdrop-blur-sm"
            } ${selectedPack === pack.id ? "ring-4 ring-[#F29F05]" : ""}`}
            style={{
              animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards`,
            }}
          >
            {pack.popular && (
              <div className="absolute top-0 right-0 bg-[#F29F05] text-[#020F59] px-4 py-1 text-sm font-bold">
                POPULAIRE
              </div>
            )}

            <div className="p-8">
              <div className={`rounded-xl p-4 w-fit mb-6 ${pack.popular ? "bg-[#020F59]" : "bg-white/10"}`}>
                <div className="h-8 w-8 flex items-center justify-center">
                  <pack.icon />
                </div>
              </div>

              <Badge className={`mb-3 ${pack.popular ? "bg-[#020F59] text-white" : "bg-[#719ED9]/20 text-[#D0DCF2]"}`}>
                {pack.tagline}
              </Badge>

              <h3 className={`text-2xl font-bold mb-3 ${pack.popular ? "text-[#020F59]" : "text-white"}`}>
                {pack.name}
              </h3>

              <p className={`mb-6 leading-relaxed ${pack.popular ? "text-[#021373]" : "text-[#D0DCF2]"}`}>
                {pack.description}
              </p>

              <div className="mb-6">
                <div className={`text-3xl font-bold mb-2 ${pack.popular ? "text-[#1F54BF]" : "text-[#F29F05]"}`}>
                  {pack.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-start gap-3"
                    style={{
                      animation: `fadeInLeft 0.4s ease-out ${0.8 + fidx * 0.1}s backwards`,
                    }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {typeof feature.icon === "function" ? (
                        <feature.icon />
                      ) : (
                        <feature.icon className={`h-5 w-5 ${pack.popular ? "text-[#1F54BF]" : "text-[#F29F05]"}`} />
                      )}
                    </div>
                    <div>
                      <div className={`font-semibold ${pack.popular ? "text-[#020F59]" : "text-white"}`}>
                        {feature.text}
                      </div>
                      {feature.desc && (
                        <div className={`text-sm ${pack.popular ? "text-[#021373]/70" : "text-[#D0DCF2]/70"}`}>
                          {feature.desc}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className={`rounded-lg p-4 mb-6 ${pack.popular ? "bg-[#D0DCF2]" : "bg-white/5"}`}>
                <div className={`text-sm font-semibold mb-1 ${pack.popular ? "text-[#021373]" : "text-[#D0DCF2]"}`}>
                  Livrable:
                </div>
                <div className={`text-sm ${pack.popular ? "text-[#020F59]" : "text-white"}`}>{pack.deliverable}</div>
              </div>

              <Button
                onClick={() => setSelectedPack(pack.id)}
                size="lg"
                className={`w-full font-semibold ${
                  pack.popular
                    ? "bg-[#020F59] hover:bg-[#021373] text-white"
                    : "bg-[#F29F05] hover:bg-[#F29F05]/90 text-[#020F59]"
                }`}
              >
                {selectedPack === pack.id ? "Pack sélectionné" : "Choisir ce pack"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
