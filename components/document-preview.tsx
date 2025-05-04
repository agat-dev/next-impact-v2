"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

interface DocumentPreviewProps {
  formData: Record<string, any>
}

export function DocumentPreview({ formData }: DocumentPreviewProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement pour l'effet visuel
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Fonction pour vérifier si une section a des données
  const hasSectionData = (sectionId: string): boolean => {
    switch (sectionId) {
      case "section-1":
        return !!(
          formData.organisation_name ||
          formData.secteur_activite ||
          formData.public_cible ||
          formData.problematiques ||
          formData.objectifs_refonte ||
          formData.site_url ||
          formData.site_creation_date ||
          formData.technologies_actuelles
        )
      case "section-2":
        return !!(
          formData.arborescence ||
          formData.types_contenus ||
          formData.fonctionnalites_standards ||
          formData.fonctionnalites_avancees ||
          formData.contraintes_techniques
        )
      // Ajouter d'autres sections selon besoin
      default:
        return false
    }
  }

  // Rendu du contenu de prévisualisation
  const renderPreviewContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-6 p-6">
          <Skeleton className="h-12 w-3/4 bg-blue-100" />
          <Skeleton className="h-8 w-1/2 bg-blue-100" />
          <div className="space-y-4 mt-8">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          <div className="space-y-4 mt-8">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      )
    }

    return (
      <div className="p-6 space-y-8">
        {/* Page de couverture */}
        <div className="bg-blue-50 p-8 rounded-lg border-t-8 border-blue-600 shadow-md mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-blue-800">CAHIER DES CHARGES</h1>
            <h2 className="text-xl text-blue-600">Refonte de Site Vitrine Institutionnel</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>

            <div className="mt-12 space-y-4 text-left max-w-md mx-auto">
              <div className="flex">
                <span className="font-semibold w-40">Organisation:</span>
                <span>{formData.organisation_name || "Non spécifié"}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Secteur d'activité:</span>
                <span>{formData.secteur_activite || "Non spécifié"}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Date de rédaction:</span>
                <span>{formData.date_redaction || new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">Rédacteur:</span>
                <span>{formData.redacteur || "Non spécifié"}</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
              Document confidentiel
            </div>
          </div>
        </div>

        {/* Table des matières */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-blue-800 text-center mb-4">TABLE DES MATIÈRES</h2>
          <div className="border-t border-b py-4">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>1. PRÉSENTATION GÉNÉRALE DU PROJET</span>
                <span className="text-gray-500">3</span>
              </li>
              <li className="flex justify-between">
                <span>2. SPÉCIFICATIONS FONCTIONNELLES</span>
                <span className="text-gray-500">5</span>
              </li>
              <li className="flex justify-between">
                <span>3. SPÉCIFICATIONS GRAPHIQUES ET ERGONOMIQUES</span>
                <span className="text-gray-500">8</span>
              </li>
              <li className="flex justify-between">
                <span>4. SPÉCIFICATIONS TECHNIQUES</span>
                <span className="text-gray-500">10</span>
              </li>
              <li className="flex justify-between">
                <span>5. GESTION DE CONTENU</span>
                <span className="text-gray-500">12</span>
              </li>
              <li className="flex justify-between">
                <span>6. PRESTATIONS ATTENDUES</span>
                <span className="text-gray-500">13</span>
              </li>
              <li className="flex justify-between">
                <span>7. PLANNING ET BUDGET</span>
                <span className="text-gray-500">14</span>
              </li>
              <li className="flex justify-between">
                <span>8. MODALITÉS DE RÉPONSE</span>
                <span className="text-gray-500">15</span>
              </li>
              <li className="flex justify-between">
                <span>9. ANNEXES</span>
                <span className="text-gray-500">16</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">1. PRÉSENTATION GÉNÉRALE DU PROJET</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">1.1 Contexte</h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Nom de l'organisation: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.organisation_name || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Secteur d'activité: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.secteur_activite || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Public cible: </span>
                  <div className="bg-gray-50 px-2 py-1 rounded mt-1">{formData.public_cible || "Non spécifié"}</div>
                </div>
                <div>
                  <span className="font-semibold">Problématiques identifiées: </span>
                  <div className="bg-gray-50 px-2 py-1 rounded mt-1">{formData.problematiques || "Non spécifié"}</div>
                </div>
                <div>
                  <span className="font-semibold">Objectifs principaux: </span>
                  <div className="bg-gray-50 px-2 py-1 rounded mt-1">
                    {formData.objectifs_refonte || "Non spécifié"}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                1.2 Description du site existant
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">URL du site actuel: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.site_url || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Date de création: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.site_creation_date || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Technologies utilisées: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">
                    {formData.technologies_actuelles || "Non spécifié"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">2. SPÉCIFICATIONS FONCTIONNELLES</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                2.1 Architecture de l'information
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Arborescence proposée: </span>
                  <div className="bg-gray-50 px-2 py-1 rounded mt-1">{formData.arborescence || "Non spécifié"}</div>
                </div>
                <div>
                  <span className="font-semibold">Types de contenus: </span>
                  <div className="bg-gray-50 px-2 py-1 rounded mt-1">{formData.types_contenus || "Non spécifié"}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                2.2 Fonctionnalités standards
              </h3>
              <div className="ml-4 mt-3 bg-gray-50 p-3 rounded">
                {formData.fonctionnalites_standards ? (
                  <ul className="grid grid-cols-2 gap-2">
                    {Object.entries(formData.fonctionnalites_standards).map(([key, checked]) => (
                      <li key={key} className="flex items-center">
                        <div
                          className={`w-4 h-4 mr-2 rounded-sm ${checked ? "bg-orange-500" : "border border-gray-300"}`}
                        >
                          {Boolean(checked) && <span className="text-white text-xs flex justify-center">✓</span>}
                        </div>
                        {key}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-500">Aucune fonctionnalité standard sélectionnée</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                2.3 Fonctionnalités avancées
              </h3>
              <div className="ml-4 mt-3 bg-gray-50 p-3 rounded">
                {formData.fonctionnalites_avancees ? (
                  <ul className="grid grid-cols-2 gap-2">
                    {Object.entries(formData.fonctionnalites_avancees).map(([key, checked]) => (
                      <li key={key} className="flex items-center">
                        <div
                          className={`w-4 h-4 mr-2 rounded-sm ${checked ? "bg-orange-500" : "border border-gray-300"}`}
                        >
                          {Boolean(checked) && <span className="text-white text-xs flex justify-center">✓</span>}
                        </div>
                        {key}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-500">Aucune fonctionnalité avancée sélectionnée</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">3. SPÉCIFICATIONS GRAPHIQUES ET ERGONOMIQUES</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                3.1 Charte graphique
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Couleurs principales: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.couleurs_principales || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Typographie: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.typographie || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                3.2 Ergonomie
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Accessibilité: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.accessibilite || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Navigation: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.navigation || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>  
          
  
          {/* Section 4 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">4. SPÉCIFICATIONS TECHNIQUES</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                4.1 Hébergement
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Type d'hébergement: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.type_hebergement || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Capacité de stockage: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.capacite_stockage || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                4.2 Sécurité
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Protocoles de sécurité: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.protocoles_securite || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Sauvegardes: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.sauvegardes || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Section 5 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">5. GESTION DE CONTENU</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                5.1 Système de gestion de contenu (CMS)
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">CMS proposé: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.cms_propose || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Fonctionnalités du CMS: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.fonctionnalites_cms || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                5.2 Formation et support
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Formation proposée: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.formation_proposee || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Support technique: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.support_technique || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">6. PRESTATIONS ATTENDUES</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                6.1 Prestations de développement
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Développement front-end: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.dev_frontend || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Développement back-end: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.dev_backend || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                6.2 Prestations de maintenance
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Maintenance corrective: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.maintenance_corrective || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Maintenance évolutive: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.maintenance_evolutive || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">7. PLANNING ET BUDGET</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                7.1 Planning
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Date de début: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.date_debut || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Date de fin: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.date_fin || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                7.2 Budget
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Budget total: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.budget_total || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Détails du budget: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.details_budget || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">8. MODALITÉS DE RÉPONSE</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                8.1 Modalités de réponse
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Date limite de réponse: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.date_limite_reponse || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Mode de réponse: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.mode_reponse || "Non spécifié"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                8.2 Critères de sélection
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Critères techniques: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.criteres_techniques || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Critères financiers: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.criteres_financiers || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
            <h2 className="text-lg font-bold">9. ANNEXES</h2>
          </div>

          <div className="ml-4 space-y-6">
            <div>
              <h3 className="text-blue-800 font-semibold mb-2 border-b border-orange-400 inline-block">
                9.1 Annexes
              </h3>
              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <span className="font-semibold">Annexe 1: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.annexe_1 || "Non spécifié"}</span>
                </div>
                <div>
                  <span className="font-semibold">Annexe 2: </span>
                  <span className="bg-gray-50 px-2 py-1 rounded">{formData.annexe_2 || "Non spécifié"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

              

        {/* Pied de page */}
        <div className="border-t pt-4 mt-12 flex justify-between text-sm text-gray-500">
          <div>{formData.organisation_name || "Cahier des charges"}</div>
          <div>Page 3</div>
          <div>Version: {formData.version || "1.0"}</div>
        </div>
      </div>
    )
  }

  return (
    <Card className="border-2 border-blue-200 shadow-lg">
      <div className="bg-blue-50 p-4 border-b border-blue-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-800">Prévisualisation du document</h3>
        <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Format A4</span>
      </div>
      <ScrollArea className="h-[800px] w-full">
        <div className="bg-white shadow-inner mx-auto my-6" style={{ width: "210mm", minHeight: "297mm" }}>
          {renderPreviewContent()}
        </div>
      </ScrollArea>
    </Card>
  )
}
