// Mise à jour de l'algorithme pour prendre en compte les questions simplifiées

// Définition de CMS_OPTIONS (exemple, à adapter selon les besoins)
const CMS_OPTIONS: Record<string, { name: string; notes: string; strengths: string[] }> = {
    wordpress: {
      name: "WordPress",
      notes: "CMS populaire et polyvalent",
      strengths: ["Flexibilité", "Large communauté"],
    },
    wix: { name: "Wix", notes: "Facile à utiliser, idéal pour les débutants", strengths: ["Simplicité", "Rapidité"] },
    squarespace: {
      name: "Squarespace",
      notes: "Design élégant, facile à utiliser",
      strengths: ["Esthétique", "Facilité d'utilisation"],
    },
    webflow: {
      name: "Webflow",
      notes: "Conception visuelle avancée, contrôle total",
      strengths: ["Personnalisation", "Puissance"],
    },
    shopify: {
      name: "Shopify",
      notes: "Plateforme e-commerce complète",
      strengths: ["E-commerce", "Facilité de gestion"],
    },
    woocommerce: {
      name: "WooCommerce",
      notes: "Extension e-commerce pour WordPress",
      strengths: ["E-commerce", "Flexibilité"],
    },
    magento: {
      name: "Magento",
      notes: "Plateforme e-commerce robuste pour grandes entreprises",
      strengths: ["E-commerce", "Scalabilité"],
    },
    prestashop: {
      name: "PrestaShop",
      notes: "Solution e-commerce open source",
      strengths: ["E-commerce", "Personnalisation"],
    },
    ghost: { name: "Ghost", notes: "Plateforme de blogging minimaliste", strengths: ["Blog", "Performance"] },
    drupal: {
      name: "Drupal",
      notes: "CMS puissant et flexible pour les développeurs",
      strengths: ["Flexibilité", "Sécurité"],
    },
    joomla: {
      name: "Joomla",
      notes: "CMS polyvalent avec une grande communauté",
      strengths: ["Flexibilité", "Communauté"],
    },
    strapi: { name: "Strapi", notes: "CMS headless pour les applications web", strengths: ["API", "Flexibilité"] },
    typo3: { name: "TYPO3", notes: "CMS enterprise robuste et sécurisé", strengths: ["Sécurité", "Scalabilité"] },
    hubspot: {
      name: "HubSpot CMS Hub",
      notes: "CMS intégré à la plateforme HubSpot",
      strengths: ["Marketing", "Intégration CRM"],
    },
  }
  
  export function selectBestCMS(responses: Record<string, string>) {
    const scores: Record<string, { score: number; reasons: string[] }> = {}
  
    // Initialiser les scores à 0 pour tous les CMS
    for (const cms in CMS_OPTIONS) {
      scores[cms] = { score: 0, reasons: [] }
    }
  
    // Analyse du type de site
    if (responses.siteType) {
      const typeMapping: Record<string, string[]> = {
        "Site vitrine/institutionnel": ["wordpress", "wix", "squarespace", "webflow", "joomla"],
        "Site e-commerce": ["shopify", "woocommerce", "magento", "prestashop"],
        "Blog/portail d'information": ["wordpress", "ghost", "drupal", "joomla"],
        "Application web": ["strapi", "drupal"],
        "Site communautaire/réseau social": ["wordpress", "drupal", "joomla"],
        "Site éducatif/e-learning": ["wordpress", "drupal"],
        "Portfolio/galerie": ["wordpress", "squarespace", "webflow"],
      }
  
      if (typeMapping[responses.siteType]) {
        typeMapping[responses.siteType].forEach((cms) => {
          scores[cms].score += 10
          scores[cms].reasons.push(`Adapté pour les sites de type ${responses.siteType}`)
        })
      } else {
        // Fallback pour les types non mappés
        ;["wordpress", "drupal"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Solution polyvalente adaptable à différents types de sites")
        })
      }
    }
  
    // Analyse des compétences techniques (contentManager)
    if (responses.contentManager) {
      if (responses.contentManager === "Des utilisateurs sans compétences techniques") {
        ;["wix", "squarespace", "shopify"].forEach((cms) => {
          scores[cms].score += 8
          scores[cms].reasons.push("Facile à utiliser sans compétences techniques")
        })
      } else if (responses.contentManager === "Des développeurs web") {
        ;["drupal", "magento", "strapi", "typo3"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Adapté aux équipes techniques")
        })
      }
    }
  
    // Analyse de la personnalisation
    if (responses.customization) {
      if (responses.customization === "Élevé (design sur mesure, fonctionnalités spécifiques)") {
        ;["drupal", "strapi", "webflow"].forEach((cms) => {
          scores[cms].score += 8
          scores[cms].reasons.push("Hautement personnalisable")
        })
      } else if (responses.customization === "Basique (thème existant avec personnalisation mineure)") {
        ;["wix", "squarespace", "wordpress"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Facile à personnaliser avec des thèmes existants")
        })
      }
    }
  
    // Analyse du budget
    if (responses.budget) {
      if (responses.budget === "Moins de 1 000 €") {
        ;["wordpress", "wix"].forEach((cms) => {
          scores[cms].score += 8
          scores[cms].reasons.push("Économique pour les petits budgets")
        })
      } else if (responses.budget === "Plus de 15 000 €") {
        ;["magento", "drupal", "typo3"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Adapté aux projets à budget élevé")
        })
      }
    }
  
    // Analyse du délai
    if (responses.deadline) {
      if (responses.deadline === "Moins d'un mois") {
        ;["wix", "squarespace", "shopify"].forEach((cms) => {
          scores[cms].score += 8
          scores[cms].reasons.push("Rapide à mettre en place")
        })
      } else if (responses.deadline === "Plus de 3 mois") {
        ;["drupal", "magento", "typo3"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Adapté aux projets avec un délai confortable")
        })
      }
    }
  
    // Analyse des fonctionnalités spécifiques
    if (responses.specificFeatures) {
      if (responses.specificFeatures === "E-commerce") {
        ;["shopify", "woocommerce", "magento", "prestashop"].forEach((cms) => {
          scores[cms].score += 15
          scores[cms].reasons.push("Spécialisé pour l'e-commerce")
        })
      } else if (responses.specificFeatures === "Multilingual") {
        ;["drupal", "typo3", "wordpress"].forEach((cms) => {
          scores[cms].score += 7
          scores[cms].reasons.push("Bonnes capacités multilingues")
        })
      } else if (responses.specificFeatures === "UserManagement") {
        ;["drupal", "wordpress", "joomla"].forEach((cms) => {
          scores[cms].score += 6
          scores[cms].reasons.push("Gestion avancée des utilisateurs")
        })
      } else if (responses.specificFeatures === "Marketing") {
        ;["hubspot", "wordpress"].forEach((cms) => {
          scores[cms].score += 7
          scores[cms].reasons.push("Fonctionnalités marketing avancées")
        })
      } else if (responses.specificFeatures === "Integration") {
        ;["drupal", "wordpress", "strapi"].forEach((cms) => {
          scores[cms].score += 6
          scores[cms].reasons.push("Bonnes capacités d'intégration avec d'autres systèmes")
        })
      } else if (responses.specificFeatures === "Booking") {
        ;["wordpress", "wix"].forEach((cms) => {
          scores[cms].score += 5
          scores[cms].reasons.push("Possibilité d'ajouter des systèmes de réservation")
        })
      }
    }
  
    // Analyse de la performance et sécurité
    if (responses.performanceSecurity) {
      if (responses.performanceSecurity === "Très élevées" || responses.performanceSecurity === "Élevées") {
        ;["drupal", "typo3", "shopify"].forEach((cms) => {
          scores[cms].score += 8
          scores[cms].reasons.push("Offre un haut niveau de sécurité et de performance")
        })
      }
    }
  
    // Vérification finale pour s'assurer qu'il y a au moins un résultat
    const sortedResults = Object.entries(scores)
      .map(([cms, data]) => {
        // Vérification de sécurité pour s'assurer que le CMS existe
        if (!CMS_OPTIONS[cms as keyof typeof CMS_OPTIONS]) {
          return null
        }
  
        const cmsData = CMS_OPTIONS[cms as keyof typeof CMS_OPTIONS]
        return {
          cms: cmsData.name,
          score: data.score,
          reasons: data.reasons.length > 0 ? data.reasons : ["Solution adaptable à divers besoins"],
          notes: cmsData.notes,
          strengths: cmsData.strengths,
        }
      })
      .filter((result) => result !== null)
      .sort((a, b) => (b?.score || 0) - (a?.score || 0))
  
    // Si aucun résultat n'a de score, ajouter des scores par défaut aux CMS polyvalents
    if (sortedResults.length === 0 || sortedResults[0]?.score === 0) {
      return [
        {
          cms: "WordPress",
          score: 50,
          reasons: ["Solution polyvalente par défaut"],
          notes: CMS_OPTIONS.wordpress.notes,
          strengths: CMS_OPTIONS.wordpress.strengths,
        },
        {
          cms: "Wix",
          score: 40,
          reasons: ["Solution simple par défaut"],
          notes: CMS_OPTIONS.wix.notes,
          strengths: CMS_OPTIONS.wix.strengths,
        },
        {
          cms: "Drupal",
          score: 30,
          reasons: ["Solution avancée par défaut"],
          notes: CMS_OPTIONS.drupal.notes,
          strengths: CMS_OPTIONS.drupal.strengths,
        },
      ]
    }
  
    // Retourner les 3 meilleurs résultats
    return sortedResults.slice(0, 3)
  }
  
  