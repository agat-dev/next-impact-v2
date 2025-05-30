"use server"

import type { AuditData, CategoryScore } from "@/lib/types"
import { performanceAudit } from "./performance-audit"
import { seoAudit } from "./seo-audit"
import { contentAudit } from "./content-audit"
import { conversionAudit } from "./conversion-audit"
import { analyticsAudit } from "./analytics-audit"
import { acquisitionAudit } from "./acquisition-audit"
import { socialAudit } from "./social-audit"
import { commercialAudit } from "./commercial-audit"
import { recommendationsAudit } from "./recommendations-audit"

export async function runAudit(url: string): Promise<AuditData> {
  try {
    // S'assurer que l'URL a un protocole
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url
    }

    // Lancer tous les audits en parallèle
    const results = await Promise.allSettled([
      performanceAudit(url),
      seoAudit(url),
      contentAudit(url),
      conversionAudit(url),
      analyticsAudit(url),
      acquisitionAudit(url),
      socialAudit(url),
      commercialAudit(url),
      recommendationsAudit(url),
    ])

    // Traiter les résultats, utiliser des valeurs de secours pour les audits échoués
    const categoryScores: CategoryScore[] = []

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        categoryScores.push(result.value)
      } else {
        console.error(`Échec de l'audit ${index} :`, result.reason)
        // Ajouter une catégorie de secours avec des informations d'erreur
        const categories = [
          "performance",
          "seo",
          "content",
          "conversion",
          "analytics",
          "acquisition",
          "social",
          "commercial",
          "recommendations",
        ]
        categoryScores.push({
          name: categories[index],
          score: 50,
          summary: "Un problème est survenu lors de l'analyse de cet aspect de votre site.",
          findings: [
            {
              title: "Erreur d'analyse",
              description: "Nous n'avons pas pu terminer cette partie de l'audit. Veuillez réessayer plus tard.",
              impact: "medium",
            },
          ],
          recommendations: [
            {
              title: "Réessayez plus tard",
              description: "Cette partie de l'audit a rencontré un problème technique.",
              link: "",
            },
          ],
        })
      }
    })

    // Calculer le score global (moyenne pondérée)
    const weights = {
      performance: 1.5,
      seo: 1.5,
      content: 1.2,
      conversion: 1.2,
      analytics: 1,
      acquisition: 1,
      social: 0.8,
      commercial: 1,
      recommendations: 0.8,
    }

    let totalWeight = 0
    let weightedSum = 0

    categoryScores.forEach((category) => {
      const weight = weights[category.name as keyof typeof weights] || 1
      totalWeight += weight
      weightedSum += category.score * weight
    })

    const overallScore = Math.round(weightedSum / totalWeight)

    return {
      url,
      overallScore,
      categoryScores,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Erreur lors de l'exécution de l'audit :", error)
    throw new Error("Échec de l'audit du site web")
  }
}

