"use server"

import type { CategoryScore } from "../types"

export async function commercialAudit(url: string): Promise<CategoryScore> {
  try {
    // Dans une vraie implémentation, on analyserait les éléments commerciaux et la proposition de valeur

    // Pour la démo, on simule la réponse de l'API
    const simulatedScore = Math.floor(Math.random() * 25) + 55 // Score aléatoire entre 55 et 80

    return {
      name: "commercial",
      score: simulatedScore,
      summary:
        "Les aspects commerciaux de votre site incluent la stratégie de tarification, la proposition de valeur et les éléments de persuasion qui favorisent la conversion et les ventes.",
      findings: [
        {
          title: "Proposition de valeur peu claire",
          description: "Vos arguments de vente uniques ne sont pas clairement communiqués sur les pages clés.",
          impact: "high",
        },
        {
          title: "Informations tarifaires difficiles à trouver",
          description: "Les utilisateurs doivent naviguer sur plusieurs pages pour accéder aux détails des prix.",
          impact: "high",
        },
        {
          title: "Options de paiement limitées",
          description: "Votre tunnel d'achat ne propose que le paiement par carte bancaire, ce qui peut limiter les conversions.",
          impact: "medium",
        },
        {
          title: "Descriptions produits peu convaincantes",
          description: "Les descriptions produits se concentrent sur les caractéristiques plutôt que sur les bénéfices et cas d'usage.",
          impact: "medium",
        },
      ],
      recommendations: [
        {
          title: "Clarifier la proposition de valeur",
          description: "Communiquez clairement ce qui rend votre offre unique et précieuse dès le haut de page sur les pages clés.",
          link: "https://www.nngroup.com/articles/value-proposition/",
        },
        {
          title: "Améliorer la transparence des prix",
          description: "Rendez les informations tarifaires facilement accessibles et bien structurées.",
          link: "https://www.priceintelligently.com/blog/bid/195287/the-value-of-pricing-strategy-transparency",
        },
        {
          title: "Élargir les options de paiement",
          description: "Ajoutez des moyens de paiement populaires comme PayPal, Apple Pay ou le paiement en plusieurs fois.",
          link: "https://www.bigcommerce.com/blog/online-payment-methods/",
        },
        {
          title: "Renforcer les descriptions produits",
          description: "Mettez l'accent sur les bénéfices, les cas d'usage et les leviers émotionnels plutôt que sur les seules caractéristiques techniques.",
          link: "https://www.shopify.com/blog/8211159-9-simple-ways-to-write-product-descriptions-that-sell",
        },
      ],
      sources: [
        {
          name: "Nielsen Norman Group",
          url: "https://www.nngroup.com/",
        },
        {
          name: "Price Intelligently",
          url: "https://www.priceintelligently.com/",
        },
        {
          name: "Shopify Blog",
          url: "https://www.shopify.com/blog",
        },
      ],
    }
  } catch (error) {
    console.error("Erreur lors de l'audit commercial :", error)
    throw new Error("Échec de l'audit commercial")
  }
}

