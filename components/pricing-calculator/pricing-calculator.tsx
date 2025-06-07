"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { InfoIcon } from "lucide-react"

// Types
type WebsiteType = "vitrine" | "ecommerce" | "corporate" | "application" | "blog"
type ProviderType = "self" | "freelance" | "agency"
type AdditionalService = "maintenance" | "hosting" | "content" | "seo" | "sea" | "training" | "photography"

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
  prices: {
    self: PriceRange
    freelance: PriceRange
    agency: PriceRange
  }
  timeframes: {
    self: TimeFrame
    freelance: TimeFrame
    agency: TimeFrame
  }
  comments: {
    self: string
    freelance: string
    agency: string
  }
}

interface AdditionalServiceData {
  name: string
  description: string
  prices: {
    self?: PriceRange
    freelance?: PriceRange
    agency?: PriceRange
    fixed?: PriceRange
  }
  unit?: string
}

// Data
const websiteTypesData: Record<WebsiteType, WebsiteTypeData> = {
  vitrine: {
    name: "Site Vitrine (5-10 pages)",
    description: "Site de présentation pour une entreprise ou un professionnel",
    prices: {
      self: { min: 0, max: 200 },
      freelance: { min: 800, max: 3500 },
      agency: { min: 2500, max: 10000 },
    },
    timeframes: {
      self: { min: 2, max: 4, unit: "semaines" },
      freelance: { min: 2, max: 6, unit: "semaines" },
      agency: { min: 4, max: 8, unit: "semaines" },
    },
    comments: {
      self: "Coûts limités à l'hébergement, au nom de domaine et éventuellement à des thèmes/plugins premium",
      freelance: "Prix variable selon l'expérience du freelance et la personnalisation demandée",
      agency: "Inclut généralement une étude de marché, une stratégie de contenu et un design sur mesure",
    },
  },
  ecommerce: {
    name: "Site E-commerce (jusqu'à 100 produits)",
    description: "Boutique en ligne pour vendre des produits ou services",
    prices: {
      self: { min: 100, max: 500 },
      freelance: { min: 2000, max: 8000 },
      agency: { min: 8000, max: 30000 },
    },
    timeframes: {
      self: { min: 1, max: 3, unit: "mois" },
      freelance: { min: 2, max: 4, unit: "mois" },
      agency: { min: 3, max: 6, unit: "mois" },
    },
    comments: {
      self: "Utilisation de plateformes comme WooCommerce, Shopify, ou PrestaShop",
      freelance: "Dépend du nombre de produits, des fonctionnalités de paiement et de la personnalisation",
      agency: "Inclut souvent l'intégration ERP, la gestion des stocks et une stratégie marketing",
    },
  },
  corporate: {
    name: "Site Corporate (15-30 pages)",
    description: "Site institutionnel complet pour une entreprise",
    prices: {
      self: { min: 200, max: 800 },
      freelance: { min: 3500, max: 12000 },
      agency: { min: 10000, max: 40000 },
    },
    timeframes: {
      self: { min: 1, max: 3, unit: "mois" },
      freelance: { min: 2, max: 4, unit: "mois" },
      agency: { min: 3, max: 6, unit: "mois" },
    },
    comments: {
      self: "Solutions avec templates prêts à l'emploi, personnalisation limitée",
      freelance: "Design professionnel, optimisation SEO, contenu sur mesure",
      agency: "Stratégie digitale complète, identité visuelle cohérente, SEO avancé",
    },
  },
  application: {
    name: "Application Web / Site Complexe",
    description: "Application web ou site avec fonctionnalités avancées",
    prices: {
      self: { min: 500, max: 3000 },
      freelance: { min: 8000, max: 25000 },
      agency: { min: 25000, max: 100000 },
    },
    timeframes: {
      self: { min: 3, max: 12, unit: "mois" },
      freelance: { min: 3, max: 8, unit: "mois" },
      agency: { min: 6, max: 12, unit: "mois" },
    },
    comments: {
      self: "Coûts des services tiers, APIs et frameworks nécessaires",
      freelance: "Tarification généralement basée sur un TJM de 300€-600€",
      agency: "Équipe dédiée, développement sur mesure, tests approfondis",
    },
  },
  blog: {
    name: "Blog / Site de Contenu",
    description: "Site axé sur la publication de contenu régulier",
    prices: {
      self: { min: 0, max: 200 },
      freelance: { min: 600, max: 3000 },
      agency: { min: 2000, max: 8000 },
    },
    timeframes: {
      self: { min: 1, max: 4, unit: "semaines" },
      freelance: { min: 2, max: 6, unit: "semaines" },
      agency: { min: 3, max: 8, unit: "semaines" },
    },
    comments: {
      self: "Utilisation de WordPress ou autres CMS gratuits",
      freelance: "Mise en place de la structure, personnalisation du design",
      agency: "Stratégie de contenu, SEO, intégration des réseaux sociaux",
    },
  },
}

const additionalServicesData: Record<AdditionalService, AdditionalServiceData> = {
  maintenance: {
    name: "Maintenance et Mises à Jour",
    description: "Services de maintenance mensuelle",
    prices: {
      self: { min: 0, max: 50 },
      freelance: { min: 50, max: 300 },
      agency: { min: 200, max: 1000 },
    },
    unit: "/mois",
  },
  hosting: {
    name: "Hébergement et Nom de Domaine",
    description: "Coûts d'hébergement et nom de domaine",
    prices: {
      fixed: { min: 10, max: 400 },
    },
    unit: "/an ou /mois",
  },
  content: {
    name: "Rédaction de contenu",
    description: "Création de contenu pour votre site",
    prices: {
      fixed: { min: 50, max: 300 },
    },
    unit: "/page",
  },
  seo: {
    name: "Référencement (SEO)",
    description: "Optimisation pour les moteurs de recherche",
    prices: {
      fixed: { min: 500, max: 3000 },
    },
    unit: "pour l'optimisation initiale",
  },
  sea: {
    name: "Campagne SEA",
    description: "Publicité sur les moteurs de recherche",
    prices: {
      fixed: { min: 300, max: 2000 },
    },
    unit: "+ budget publicitaire",
  },
  training: {
    name: "Formation à l'utilisation",
    description: "Formation pour gérer votre site",
    prices: {
      fixed: { min: 300, max: 1500 },
    },
  },
  photography: {
    name: "Photographie professionnelle",
    description: "Services de photographie pour votre site",
    prices: {
      fixed: { min: 500, max: 2500 },
    },
  },
}

export default function PricingCalculator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("vitrine")
  const [provider, setProvider] = useState<ProviderType>("freelance")
  const [additionalServices, setAdditionalServices] = useState<AdditionalService[]>([])
  const [basePrice, setBasePrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [additionalPrice, setAdditionalPrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [totalPrice, setTotalPrice] = useState<PriceRange>({ min: 0, max: 0 })
  const [timeframe, setTimeframe] = useState<TimeFrame>({ min: 0, max: 0, unit: "semaines" })

  // Calculate prices when selections change
  useEffect(() => {
    // Set base price
    const selectedWebsiteData = websiteTypesData[websiteType]
    const newBasePrice = selectedWebsiteData.prices[provider]
    setBasePrice(newBasePrice)
    setTimeframe(selectedWebsiteData.timeframes[provider])

    // Calculate additional services price
    let additionalMin = 0
    let additionalMax = 0

    additionalServices.forEach((service) => {
      const serviceData = additionalServicesData[service]
      const servicePrices = serviceData.prices[provider] || serviceData.prices.fixed

      if (servicePrices) {
        additionalMin += servicePrices.min
        additionalMax += servicePrices.max
      }
    })

    setAdditionalPrice({ min: additionalMin, max: additionalMax })
    setTotalPrice({
      min: newBasePrice.min + additionalMin,
      max: newBasePrice.max + additionalMax,
    })
  }, [websiteType, provider, additionalServices])

  // Toggle additional service
  const toggleAdditionalService = (service: AdditionalService) => {
    setAdditionalServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  // Format price with Euro symbol
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Form Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-regularblue font-adobetitre text-3xl">Options du Projet</CardTitle>
          <CardDescription  className="text-regularblue/80">Sélectionnez les options pour obtenir une estimation de prix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Website Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="website-type" className="text-regularblue font-adobetitre text-xl">Type de Site Web</Label>
            <Select value={websiteType} onValueChange={(value) => setWebsiteType(value as WebsiteType)}>
              <SelectTrigger id="website-type">
                <SelectValue placeholder="Sélectionnez un type de site"/>
              </SelectTrigger>
              <SelectContent>
                {Object.entries(websiteTypesData).map(([key, data]) => (
                  <SelectItem key={key} value={key}>
                    {data.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-regularblue/70">{websiteTypesData[websiteType].description}</p>
          </div>

          {/* Provider Selection */}
          <div className="space-y-2">
            <Label htmlFor="provider" className="text-regularblue font-adobetitre text-xl">Prestataire</Label>
            <Select value={provider} onValueChange={(value) => setProvider(value as ProviderType)}>
              <SelectTrigger id="provider">
                <SelectValue placeholder="Sélectionnez un prestataire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self">Soi-même / Auto-entrepreneur</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
                <SelectItem value="agency">Agence</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Services */}
          <div className="space-y-3">
            <Label className="text-regularblue font-adobetitre text-lg">Services Additionnels</Label>
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
                      className="text-sm font-medium text-mediumblue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {service.name}
                    </Label>
                    <p className="text-xs text-regularblue/60">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-regularblue font-adobetitre text-3xl">Estimation de Prix</CardTitle>
          <CardDescription className="text-regularblue/80">Basée sur vos sélections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Base Price */}
          <div>
            <h3 className="text-xl text-regularblue font-adobetitre font-medium mb-2">Prix de Base</h3>
            <p className="text-2xl font-bold text-mediumblue">
              {formatPrice(basePrice.min)} - {formatPrice(basePrice.max)}
            </p>
            <p className="text-sm text-regularblue/80 mt-1">{websiteTypesData[websiteType].comments[provider]}</p>
          </div>

          {/* Additional Services Price */}
          {additionalServices.length > 0 && (
            <div>
              <h3 className="text-xl text-regularblue font-adobetitre font-medium mb-2">Services Additionnels</h3>
              <p className="text-xl font-semibold text-mediumblue">
                {formatPrice(additionalPrice.min)} - {formatPrice(additionalPrice.max)}
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                {additionalServices.map((service) => {
                  const serviceData = additionalServicesData[service]
                  const servicePrices = serviceData.prices[provider] || serviceData.prices.fixed
                  return (
                    <li key={service} className="flex md:flex-row flex-col justify-between gap-2">
                      <span>{serviceData.name}</span>
                      <span>
                        {servicePrices
                          ? `${formatPrice(servicePrices.min)} - ${formatPrice(servicePrices.max)}${serviceData.unit ? ` ${serviceData.unit}` : ""}`
                          : "Variable"}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          <Separator />

          {/* Total Price */}
          <div>
            <h3 className="text-xl text-regularblue font-adobetitre font-medium mb-2">Prix Total Estimé</h3>
            <p className="text-3xl font-bold  text-mediumblue">
              {formatPrice(totalPrice.min)} - {formatPrice(totalPrice.max)}
            </p>
          </div>

          {/* Timeframe */}
          <div className="flex items-start gap-2 p-3 bg-lightblue/10 rounded-md">
            <InfoIcon className="h-5 w-5 text-lightblue mt-0.5" />
            <div>
              <h4 className="font-medium text-regularblue">Délai Estimé</h4>
              <p className="text-sm text-mediumblue">
                {timeframe.min} à {timeframe.max} {timeframe.unit}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-regularblue/80">
          <p>
            Ces estimations sont basées sur les tendances du marché français en 2025. Les prix réels peuvent varier
            selon la région, l'expérience du prestataire et les fonctionnalités spécifiques demandées.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
