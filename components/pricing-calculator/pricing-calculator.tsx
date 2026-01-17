"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type WebsiteType = "vitrine" | "ecommerce" | "corporate" | "application" | "blog"
type AdditionalService = "maintenance" | "content" | "training" | "support"

interface PriceRange {
  min: number
  max: number
}

interface TimeFrame {
  min: number
  max: number
  unit: "semaines" | "mois"
}

interface WebsiteTypeData {
  name: string
  description: string
  prices: PriceRange
  timeframes: TimeFrame
  comments: string
}

interface AdditionalServiceData {
  name: string
  description: string
  prices: PriceRange
  unit?: string
}

const websiteTypesData: Record<WebsiteType, WebsiteTypeData> = {
  vitrine: {
    name: "Site Vitrine (5-10 pages)",
    description: "WordPress classique pour présenter une entreprise ou un service",
    prices: { min: 1400, max: 2000 },
    timeframes: { min: 1, max: 3, unit: "semaines" },
    comments: "Design personnalisé, contenu de base, optimisation SEO",
  },
  ecommerce: {
    name: "Site E-commerce",
    description: "WordPress + WooCommerce pour vendre vos produits en ligne",
    prices: { min: 2200, max: 4000 },
    timeframes: { min: 3, max: 6, unit: "semaines" },
    comments: "Gestion des produits, paiement en ligne, design personnalisé, optimisation SEO",
  },
  corporate: {
    name: "Site Corporate (15-30 pages)",
    description: "WordPress headless + Astro pour une présence en ligne professionnelle",
    prices: { min: 2800, max: 4500 },
    timeframes: { min: 2, max: 4, unit: "mois" },
    comments: "Design flexible, contenu avancé, intégration de fonctionnalités",
  },
  blog: {
    name: "Media / Site de Contenu",
    description: "WordPress headless + Astro sur la publication de gros volumes de contenu",
    prices: { min: 2600, max: 4300 },
    timeframes: { min: 2, max: 6, unit: "semaines" },
    comments: "Optimisation pour le SEO et la performance, gestion de contenu facile",
  },
  application: {
    name: "Application Web / Site Complexe",
    description: "WordPress headless + Next.js pour des fonctionnalités avancées",
    prices: { min: 3800, max: 6500 },
    timeframes: { min: 3, max: 8, unit: "mois" },
    comments: "Fonctionnalités sur mesure, intégrations tierces, haute performance",
  },
}

const additionalServicesData: Record<AdditionalService, AdditionalServiceData> = {
  maintenance: {
    name: "Maintenance Technique",
    description: "Mises à jour régulières et surveillance de la sécurité",
    prices: { min: 20, max: 100 },
    unit: "/mois",
  },
  support: {
    name: "Support Technique",
    description: "Assistance technique et résolution de problèmes",
    prices: { min: 40, max: 70 },
    unit: "/h",
  },
  training: {
    name: "Formation à l'utilisation",
    description: "Formation pour gérer votre site",
    prices: { min: 100, max: 200 },
    unit: "/session",
  },
  content: {
    name: "Migration de contenu",
    description: "Création de contenu pour votre site",
    prices: { min: 500, max: 1000 },
    unit: "/10 pages",
  },
}

const CALENDLY_LINK = "https://calendar.app.google/JYUYKed5GoiA2Z5p6"

export default function PricingCalculator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("vitrine")
  const [additionalServices, setAdditionalServices] = useState<AdditionalService[]>([])
  const [basePrice, setBasePrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [additionalPrice, setAdditionalPrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [totalPrice, setTotalPrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [timeframe, setTimeframe] = useState<TimeFrame>({ min: 0, max: 0, unit: "semaines" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [contact, setContact] = useState({ email: "", phone: "" })

  useEffect(() => {
    const selectedWebsiteData = websiteTypesData[websiteType]
    const newBasePrice = selectedWebsiteData.prices
    setBasePrice(newBasePrice)
    setTimeframe(selectedWebsiteData.timeframes)

    let additionalMin = 0
    let additionalMax = 0

    additionalServices.forEach((service) => {
      const serviceData = additionalServicesData[service]
      additionalMin += serviceData.prices.min
      additionalMax += serviceData.prices.max
    })

    setAdditionalPrice({ min: additionalMin, max: additionalMax })
    setTotalPrice({
      min: newBasePrice.min + additionalMin,
      max: newBasePrice.max + additionalMax,
    })
  }, [websiteType, additionalServices])

  const toggleAdditionalService = (service: AdditionalService) => {
    setAdditionalServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price)
  }

  // Envoi du devis par API
  const handleSendQuote = async () => {
    setSending(true)
    setSent(false)
    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          estimation: `${totalPrice.min} - ${totalPrice.max}`,
          structure: websiteTypesData[websiteType].name,
          objectifs: additionalServices.map((s) => additionalServicesData[s].name),
          autonomie: "Non précisé",
          contenu: "Non précisé",
          pages: "Non précisé",
          calendlyLink: CALENDLY_LINK,
        }),
      })
      if (response.ok) {
        setSent(true)
      }
    } catch (e) {
      // Optionnel: gestion d'erreur utilisateur
    }
    setSending(false)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 mb-36">
      {/* Form Section */}
      <Card className="border border-coral/20 rounded-2xl shadow-lg">
        <CardHeader className="border-b border-coral">
          <CardTitle className="text-regularblue font-medium font-googletitre text-3xl ">Options du Projet</CardTitle>
          <CardDescription className="text-regularblue">
            Sélectionnez les options pour obtenir une estimation de prix
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10 mt-6">
          {/* Website Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="website-type" className="text-regularblue font-medium font-googletitre text-2xl">
              Projet
            </Label>
            <Select value={websiteType} onValueChange={(value) => setWebsiteType(value as WebsiteType)}>
              <SelectTrigger id="website-type">
                <SelectValue placeholder="Sélectionnez un type de site" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(websiteTypesData).map(([key, data]) => (
                  <SelectItem key={key} value={key}>
                    {data.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-regularblue font-googletexte">{websiteTypesData[websiteType].description}</p>
          </div>

          {/* Additional Services */}
          <div className="space-y-5">
            <Label className="text-regularblue font-googletitre text-2xl">Services Additionnels</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(additionalServicesData).map(([key, service]) => (
                <div key={key} className="flex items-start space-x-2">
                  <Checkbox
                    id={`service-${key}`}
                    checked={additionalServices.includes(key as AdditionalService)}
                    onCheckedChange={() => toggleAdditionalService(key as AdditionalService)}
                  />
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor={`service-${key}`}
                      className="text-base font-normal font-googletexte text-mediumblue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {service.name}
                    </Label>
                    <p className="text-regularblue font-googletexte text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="border border-coral/20 rounded-2xl shadow-lg">
        <CardHeader className="border-b border-coral">
          <CardTitle className="text-regularblue font-medium font-googletitre text-3xl">Estimation de Prix</CardTitle>
          <CardDescription className="text-regularblue">Basée sur vos sélections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Base Price */}
          <div>
            <h3 className="text-xl text-regularblue font-googletexte mb-2">Tarif indicatif</h3>
            <p className="text-4xl font-semibold text-regularblue font-googletitre">
              {formatPrice(basePrice.min)} - {formatPrice(basePrice.max)}
            </p>
            <p className="text-sm text-regularblue/80 mt-1">{websiteTypesData[websiteType].comments}</p>
          </div>

          {/* Additional Services Price */}
          {additionalServices.length > 0 && (
            <div>
              <h3 className="text-xl text-regularblue font-googletexte mb-2">Services Additionnels</h3>
              <ul className="mt-2 space-y-1">
                {additionalServices.map((service) => {
                  const serviceData = additionalServicesData[service]
                  return (
                    <li key={service} className="flex md:flex-row flex-col justify-between gap-2">
                      <span>{serviceData.name}</span>
                      <span>
                        {formatPrice(serviceData.prices.min)} - {formatPrice(serviceData.prices.max)}
                        {serviceData.unit ? ` ${serviceData.unit}` : ""}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          <Separator />




          {/* CTA Send Quote */}
          <div className="mt-12 flex flex-col gap-2">
              <Button
                className="w-max px-8 mt-2 gap-1 rounded-full bg-coral hover:bg-coral/90 font-googletitre text-lg"
                >
                <Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full text-white hover:text-white">            
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
