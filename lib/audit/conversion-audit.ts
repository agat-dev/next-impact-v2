"use server"

import type { CategoryScore } from "../types"

export async function conversionAudit(url: string): Promise<CategoryScore> {
  try {
    // Dans une vraie implémentation, on analyserait les données de conversion via des APIs analytics

    // Pour la démo, on simule la réponse de l'API
    const simulatedScore = Math.floor(Math.random() * 25) + 55 // Score aléatoire entre 55 et 80

    return {
      name: "conversion",
      score: simulatedScore,
      summary:
        "L'optimisation de la conversion vise à transformer les visiteurs en clients. Le tunnel de conversion, l'expérience utilisateur et les éléments de persuasion de votre site influencent directement vos taux de conversion.",
      findings: [
        {
          title: "Taux d'abandon de panier élevé",
          description:
            "Votre processus de commande affiche un taux d'abandon de 75%, bien supérieur à la moyenne du secteur (69%).",
          impact: "high",
        },
        {
          title: "Champs de formulaire trop complexes",
          description: "Vos formulaires demandent trop d'informations, ce qui crée des frictions dans le parcours de conversion.",
          impact: "high",
        },
        {
          title: "Appel à l'action principal peu clair",
          description: "Votre page d'accueil présente plusieurs CTA concurrents, ce qui crée une hésitation chez les visiteurs.",
          impact: "medium",
        },
        {
          title: "Absence d'éléments de réassurance",
          description: "Les pages clés manquent de preuves sociales, d'avis clients ou d'indicateurs de sécurité pour instaurer la confiance.",
          impact: "medium",
        },
      ],
      recommendations: [
        {
          title: "Simplifier le processus de commande",
          description: "Réduisez le nombre d'étapes et de champs dans votre tunnel d'achat pour limiter l'abandon.",
          link: "https://baymard.com/blog/checkout-flow-design",
        },
        {
          title: "Mettre en avant une proposition de valeur claire",
          description: "Communiquez clairement ce qui rend votre offre unique et précieuse dès le haut de page.",
          link: "https://www.nngroup.com/articles/value-proposition/",
        },
        {
          title: "Ajouter des éléments de preuve sociale",
          description: "Intégrez des témoignages, avis, études de cas et badges de confiance pour rassurer les visiteurs.",
          link: "https://www.crazyegg.com/blog/social-proof/",
        },
        {
          title: "Mettre en place des tests A/B",
          description: "Testez différentes versions de vos pages clés pour identifier ce qui améliore le taux de conversion.",
          link: "https://vwo.com/ab-testing/",
        },
      ],
      sources: [
        {
          name: "Baymard Institute",
          url: "https://baymard.com/",
        },
        {
          name: "ConversionXL",
          url: "https://cxl.com/",
        },
        {
          name: "Nielsen Norman Group",
          url: "https://www.nngroup.com/",
        },
      ],
    }
  } catch (error) {
    console.error("Erreur lors de l'audit conversion :", error)
    throw new Error("Échec de l'audit conversion")
  }
}

