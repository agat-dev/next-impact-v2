"use server"

import type { CategoryScore } from "../types"

export async function acquisitionAudit(url: string): Promise<CategoryScore> {
  try {
    // Dans une vraie implémentation, on analyserait les sources de trafic et les canaux d'acquisition

    // Pour la démo, on simule la réponse de l'API
    const simulatedScore = Math.floor(Math.random() * 25) + 55 // Score aléatoire entre 55 et 80

    return {
      name: "acquisition",
      score: simulatedScore,
      summary:
        "L'acquisition de trafic examine comment les visiteurs trouvent votre site. Un mix équilibré de canaux réduit la dépendance à une seule source et maximise la portée.",
      findings: [
        {
          title: "Dépendance excessive au trafic payant",
          description:
            "Plus de 70% de votre trafic provient de sources payantes, ce qui crée une vulnérabilité si les budgets publicitaires changent.",
          impact: "high",
        },
        {
          title: "Faible croissance du trafic organique",
          description: "Le trafic organique n'a augmenté que de 5% sur un an, en dessous de la moyenne du secteur (15%).",
          impact: "high",
        },
        {
          title: "Pertinence limitée des pages d'atterrissage",
          description: "Les pages d'atterrissage des annonces ne correspondent pas bien aux messages publicitaires, ce qui entraîne un taux de rebond élevé.",
          impact: "medium",
        },
        {
          title: "Sources de référencement limitées",
          description: "Votre site reçoit du trafic référent depuis un nombre restreint de domaines.",
          impact: "medium",
        },
      ],
      recommendations: [
        {
          title: "Diversifier les sources de trafic",
          description: "Développez une stratégie multicanale pour réduire la dépendance à une seule source de trafic.",
          link: "https://neilpatel.com/blog/diversify-website-traffic-sources/",
        },
        {
          title: "Améliorer la pertinence des pages d'atterrissage",
          description: "Créez des pages d'atterrissage dédiées qui correspondent à chaque campagne et à l'intention des visiteurs.",
          link: "https://unbounce.com/landing-page-articles/landing-page-best-practices/",
        },
        {
          title: "Développer une stratégie de content marketing",
          description: "Créez du contenu de valeur pour attirer du trafic organique et asseoir votre expertise.",
          link: "https://contentmarketinginstitute.com/developing-a-strategy/",
        },
        {
          title: "Mettre en place un programme de parrainage",
          description: "Encouragez vos clients à recommander votre site via des incitations.",
          link: "https://www.referralcandy.com/blog/referral-marketing-guide/",
        },
      ],
      sources: [
        {
          name: "Neil Patel",
          url: "https://neilpatel.com/",
        },
        {
          name: "Unbounce",
          url: "https://unbounce.com/",
        },
        {
          name: "Content Marketing Institute",
          url: "https://contentmarketinginstitute.com/",
        },
      ],
    }
  } catch (error) {
    console.error("Erreur lors de l'audit acquisition :", error)
    throw new Error("Échec de l'audit acquisition")
  }
}

