"use client"

import { useState, useEffect } from "react"
import { Search, Calendar, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Types pour les études de cas
type ClientType = "PME" | "Association" | "Indépendant" | "Tous"
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | null
type Year = number | null

interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  imageUrl: string
  clientType: ClientType
  date: {
    month: Month
    year: Year
  }
  tags: string[]
  url: string
}

// Données d'exemple (à remplacer par vos vraies données)
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "proditec",
    title: "Refonte du site e-commerce ModeShop",
    description: "Refonte complète du site e-commerce avec intégration de paiement et gestion de stock.",
    imageUrl: "/placeholder.svg?key=qtv3e",
    clientType: "PME",
    date: {
      month: 3,
      year: 2023,
    },
    tags: ["e-commerce", "Next.js", "Stripe"],
    url: "/etudes-de-cas/proditec",
  },
  {
    id: "2",
    slug: "acl",
    title: "Site vitrine pour l'Association Culturelle de Lyon",
    description: "Création d'un site vitrine moderne avec calendrier d'événements et système de don en ligne.",
    imageUrl: "/placeholder.svg?key=w2pt8",
    clientType: "Association",
    date: {
      month: 6,
      year: 2023,
    },
    tags: ["site vitrine", "WordPress", "événements"],
    url: "/etudes-de-cas/acl",
  },
  {
    id: "3",
    slug: "photo-portfolio",
    title: "Portfolio pour photographe freelance",
    description: "Conception d'un portfolio élégant avec galerie photos et système de prise de rendez-vous.",
    imageUrl: "/placeholder.svg?key=wgwq2",
    clientType: "Indépendant",
    date: {
      month: 9,
      year: 2023,
    },
    tags: ["portfolio", "galerie", "réservation"],
    url: "/etudes-de-cas/photo-portfolio",
  },
  {
    id: "4",
    slug: "resto-booking",
    title: "Plateforme de réservation pour restaurant",
    description: "Développement d'une plateforme de réservation en ligne avec menu interactif.",
    imageUrl: "/placeholder.svg?key=rsb64",
    clientType: "PME",
    date: {
      month: 11,
      year: 2023,
    },
    tags: ["réservation", "restaurant", "menu"],
    url: "/etudes-de-cas/resto-booking",
  },
  {
    id: "5",
    slug: "legal-experts",
    title: "Site web pour cabinet d'avocats",
    description: "Création d'un site professionnel avec prise de rendez-vous et blog juridique.",
    imageUrl: "/placeholder.svg?key=gdg2m",
    clientType: "PME",
    date: {
      month: 2,
      year: 2024,
    },
    tags: ["juridique", "rendez-vous", "blog"],
    url: "/etudes-de-cas/legal-experts",
  },
  {
    id: "6",
    slug: "eco-protect",
    title: "Plateforme de dons pour ONG environnementale",
    description: "Développement d'une plateforme de dons sécurisée avec rapports d'impact.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=ong+environnement",
    clientType: "Association",
    date: {
      month: 4,
      year: 2024,
    },
    tags: ["dons", "environnement", "impact"],
    url: "/etudes-de-cas/eco-protect",
  },
]

// Composant principal
export default function CaseStudiesFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [clientType, setClientType] = useState<ClientType>("Tous")
  const [month, setMonth] = useState<Month>(null)
  const [year, setYear] = useState<Year>(null)
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(CASE_STUDIES)
  const [activeFilters, setActiveFilters] = useState(0)

  // Générer les années pour le filtre (de l'année actuelle à 5 ans en arrière)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 6 }, (_, i) => currentYear - i)

  // Noms des mois en français
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  // Appliquer les filtres
  useEffect(() => {
    let filtered = CASE_STUDIES

    // Filtre par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filtre par type de client
    if (clientType !== "Tous") {
      filtered = filtered.filter((study) => study.clientType === clientType)
    }

    // Filtre par mois
    if (month !== null) {
      filtered = filtered.filter((study) => study.date.month === month)
    }

    // Filtre par année
    if (year !== null) {
      filtered = filtered.filter((study) => study.date.year === year)
    }

    // Compter les filtres actifs
    let count = 0
    if (searchTerm) count++
    if (clientType !== "Tous") count++
    if (month !== null) count++
    if (year !== null) count++
    setActiveFilters(count)

    setFilteredStudies(filtered)
  }, [searchTerm, clientType, month, year])

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSearchTerm("")
    setClientType("Tous")
    setMonth(null)
    setYear(null)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Nos études de cas</h2>
        <p className="text-lg text-gray-600">
          Découvrez nos réalisations de sites web pour différents types de clients
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Rechercher une étude de cas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Filtre par type de client */}
          <Select value={clientType} onValueChange={(value) => setClientType(value as ClientType)}>
            <SelectTrigger className="w-full md:w-[180px] h-12">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Type de client" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tous">Tous les clients</SelectItem>
              <SelectItem value="PME">PME</SelectItem>
              <SelectItem value="Association">Associations</SelectItem>
              <SelectItem value="Indépendant">Indépendants</SelectItem>
            </SelectContent>
          </Select>

          {/* Filtre par date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-12">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Date</span>
                {(month !== null || year !== null) && (
                  <Badge variant="secondary" className="ml-2">
                    {month !== null ? monthNames[month - 1] : ""}
                    {month !== null && year !== null ? " " : ""}
                    {year !== null ? year : ""}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <h4 className="font-medium">Filtrer par date</h4>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mois</label>
                  <Select
                    value={month?.toString() || "null"}
                    onValueChange={(value) => setMonth(value ? (Number.parseInt(value) as Month) : null)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les mois" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="null">Tous les mois</SelectItem>
                      {monthNames.map((name, index) => (
                        <SelectItem key={index} value={(index + 1).toString()}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Année</label>
                  <Select
                    value={year?.toString() || "null"}
                    onValueChange={(value) => setYear(value ? Number.parseInt(value) : null)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes les années" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="null">Toutes les années</SelectItem>
                      {years.map((y) => (
                        <SelectItem key={y} value={y.toString()}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Bouton de réinitialisation des filtres */}
          {activeFilters > 0 && (
            <Button variant="outline" onClick={resetFilters} className="h-12">
              <X className="mr-2 h-4 w-4" />
              Réinitialiser ({activeFilters})
            </Button>
          )}
        </div>
      </div>

      {/* Affichage des résultats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.length > 0 ? (
          filteredStudies.map((study) => (
            <a
              key={study.id}
              href={`/etudes-de-cas/${study.slug}`}
              className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 rounded-lg"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={study.imageUrl || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      variant="outline"
                      className={cn(
                        study.clientType === "PME" && "bg-blue-50 text-blue-700 border-blue-200",
                        study.clientType === "Association" && "bg-green-50 text-green-700 border-green-200",
                        study.clientType === "Indépendant" && "bg-purple-50 text-purple-700 border-purple-200",
                      )}
                    >
                      {study.clientType}
                    </Badge>
                    <div className="text-sm text-gray-500">
                      {study.date.month && monthNames[study.date.month - 1]} {study.date.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gray-100">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-500 mb-4">Aucune étude de cas ne correspond à vos critères de recherche.</p>
            <Button onClick={resetFilters} variant="outline">
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
