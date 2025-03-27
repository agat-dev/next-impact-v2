// Algorithme de sélection élargi pour CMS, CMS Headless, Solutions No-Code et Frameworks

// Définition des options disponibles
const SOLUTIONS_OPTIONS: Record<
  string,
  {
    name: string
    notes: string
    strengths: string[]
    type: "cms" | "headless" | "nocode" | "framework"
    techStack?: string
  }
> = {
  // 10 CMS traditionnels
  wordpress: {
    name: "WordPress",
    notes: "CMS populaire et polyvalent, adapté à presque tous les types de projets",
    strengths: ["Flexibilité", "Grande communauté", "Nombreux plugins", "SEO-friendly"],
    type: "cms",
  },
  drupal: {
    name: "Drupal",
    notes: "CMS puissant et sécurisé pour sites complexes et institutionnels",
    strengths: ["Sécurité", "Évolutivité", "Gestion de contenu avancée", "Multi-sites"],
    type: "cms",
  },
  joomla: {
    name: "Joomla",
    notes: "CMS polyvalent avec une bonne balance entre puissance et facilité d'utilisation",
    strengths: ["Flexibilité", "Communauté active", "Multilingue", "Extensible"],
    type: "cms",
  },
  typo3: {
    name: "TYPO3",
    notes: "CMS enterprise robuste pour les grands projets institutionnels",
    strengths: ["Sécurité", "Évolutivité", "Multi-sites", "Gestion fine des droits"],
    type: "cms",
  },
  shopify: {
    name: "Shopify",
    notes: "Plateforme e-commerce clé en main avec hébergement inclus",
    strengths: ["E-commerce", "Facilité d'utilisation", "Support 24/7", "Sécurité"],
    type: "cms",
  },
  woocommerce: {
    name: "WooCommerce (WordPress)",
    notes: "Extension e-commerce pour WordPress, très flexible",
    strengths: ["E-commerce", "Intégration WordPress", "Nombreux plugins", "Personnalisable"],
    type: "cms",
  },
  magento: {
    name: "Magento (Adobe Commerce)",
    notes: "Plateforme e-commerce robuste pour grands projets e-commerce",
    strengths: ["E-commerce avancé", "B2B", "Multi-boutiques", "Personnalisable"],
    type: "cms",
  },
  prestashop: {
    name: "PrestaShop",
    notes: "Solution e-commerce open source populaire en Europe",
    strengths: ["E-commerce", "Open source", "Communauté française", "Modules"],
    type: "cms",
  },
  ghost: {
    name: "Ghost",
    notes: "Plateforme de blogging moderne et minimaliste",
    strengths: ["Blog", "Performance", "Simplicité", "Publication"],
    type: "cms",
  },
  concrete5: {
    name: "Concrete CMS (ex Concrete5)",
    notes: "CMS avec édition en ligne et interface intuitive",
    strengths: ["Édition visuelle", "Facile pour débutants", "Extensible", "Sites simples"],
    type: "cms",
  },

  // 10 CMS Headless
  strapi: {
    name: "Strapi",
    notes: "CMS headless open source populaire avec interface d'administration",
    strengths: ["API-first", "Node.js", "Personnalisable", "Interface admin"],
    type: "headless",
  },
  contentful: {
    name: "Contentful",
    notes: "CMS headless SaaS puissant avec API robuste",
    strengths: ["API-first", "SaaS", "Enterprise", "Évolutif"],
    type: "headless",
  },
  sanity: {
    name: "Sanity.io",
    notes: "CMS headless flexible avec éditeur personnalisable (Sanity Studio)",
    strengths: ["Temps réel", "Structuré", "Personnalisable", "Développeurs"],
    type: "headless",
  },
  prismic: {
    name: "Prismic",
    notes: "CMS headless avec focus sur l'expérience de création de contenu",
    strengths: ["Expérience auteur", "Slice Machine", "API simple", "Prévisualisation"],
    type: "headless",
  },
  directus: {
    name: "Directus",
    notes: "CMS headless open source avec interface d'administration automatique",
    strengths: ["Open source", "Auto-généré", "Personnalisable", "Base de données"],
    type: "headless",
  },
  storyblok: {
    name: "Storyblok",
    notes: "CMS headless avec éditeur visuel intégré",
    strengths: ["Édition visuelle", "Composants", "Multilingue", "Prévisualisation"],
    type: "headless",
  },
  craftcms: {
    name: "Craft CMS (Headless)",
    notes: "CMS pouvant fonctionner en mode headless, flexible et puissant",
    strengths: ["Expérience auteur", "API GraphQL", "Personnalisable", "Multi-sites"],
    type: "headless",
  },
  dato: {
    name: "DatoCMS",
    notes: "CMS headless basé sur le modèle de contenu avec focus sur l'expérience visuelle",
    strengths: ["Modèle structuré", "Images optimisées", "Internationalisation", "SEO"],
    type: "headless",
  },
  contentstack: {
    name: "Contentstack",
    notes: "CMS headless enterprise avec fonctionnalités avancées de workflows",
    strengths: ["Enterprise", "Workflows", "Multi-locale", "Intégration"],
    type: "headless",
  },
  kontent: {
    name: "Kontent.ai",
    notes: "CMS headless avec intelligence artificielle pour l'optimisation du contenu",
    strengths: ["AI", "Enterprise", "Workflows complexes", "Gouvernance de contenu"],
    type: "headless",
  },

  // 5 Solutions No-Code
  webflow: {
    name: "Webflow",
    notes: "Plateforme no-code avec contrôle design avancé et CMS intégré",
    strengths: ["Design avancé", "CMS intégré", "Interactions", "Contrôle précis"],
    type: "nocode",
  },
  wix: {
    name: "Wix",
    notes: "Plateforme no-code tout-en-un avec nombreuses fonctionnalités intégrées",
    strengths: ["Simplicité", "Templates", "Tout-en-un", "Débutants"],
    type: "nocode",
  },
  squarespace: {
    name: "Squarespace",
    notes: "Plateforme no-code avec focus sur le design et l'esthétique",
    strengths: ["Design élégant", "Simplicité", "E-commerce basique", "Créatifs"],
    type: "nocode",
  },
  bubble: {
    name: "Bubble",
    notes: "Plateforme no-code pour créer des applications web complètes",
    strengths: ["Applications web", "Logique complexe", "Base de données", "SaaS"],
    type: "nocode",
  },
  framer: {
    name: "Framer",
    notes: "Plateforme no-code orientée design avec animations avancées",
    strengths: ["Animations", "Design avancé", "Prototypage", "Sites vitrines"],
    type: "nocode",
  },

  // 10 Frameworks PHP ou JS
  laravel: {
    name: "Laravel",
    notes: "Framework PHP moderne et élégant pour développement web",
    strengths: ["MVC", "Écosystème complet", "Élégant", "Rapide à développer"],
    type: "framework",
    techStack: "PHP",
  },
  symfony: {
    name: "Symfony",
    notes: "Framework PHP robuste et modulaire pour projets complexes",
    strengths: ["Composants", "Enterprise", "Stable", "Performances"],
    type: "framework",
    techStack: "PHP",
  },
  nextjs: {
    name: "Next.js",
    notes: "Framework React avec rendu côté serveur et génération statique",
    strengths: ["SSR/SSG", "React", "Performance", "SEO"],
    type: "framework",
    techStack: "JavaScript",
  },
  nuxt: {
    name: "Nuxt.js",
    notes: "Framework Vue.js avec rendu côté serveur et génération statique",
    strengths: ["SSR/SSG", "Vue.js", "Simplicité", "Performance"],
    type: "framework",
    techStack: "JavaScript",
  },
  angular: {
    name: "Angular",
    notes: "Framework JavaScript complet maintenu par Google",
    strengths: ["Enterprise", "Typescript", "Robuste", "Applications complexes"],
    type: "framework",
    techStack: "JavaScript",
  },
  express: {
    name: "Express.js",
    notes: "Framework web minimaliste pour Node.js",
    strengths: ["Léger", "Node.js", "Flexible", "APIs"],
    type: "framework",
    techStack: "JavaScript",
  },
  astro: {
    name: "Astro",
    notes: "Framework modern pour sites à contenu avec approche Islands architecture",
    strengths: ["Performance", "Multi-framework", "Contenu", "MPA"],
    type: "framework",
    techStack: "JavaScript",
  },
  svelte: {
    name: "SvelteKit",
    notes: "Framework basé sur Svelte avec SSR et génération de sites statiques",
    strengths: ["Léger", "Performant", "Compilation", "DX"],
    type: "framework",
    techStack: "JavaScript",
  },
  cakephp: {
    name: "CakePHP",
    notes: "Framework PHP avec convention over configuration",
    strengths: ["Rapid development", "Convention", "Sécurité", "ORM"],
    type: "framework",
    techStack: "PHP",
  },
  codeigniter: {
    name: "CodeIgniter",
    notes: "Framework PHP léger avec petite empreinte et bonnes performances",
    strengths: ["Léger", "Performance", "Simple", "Faible courbe d'apprentissage"],
    type: "framework",
    techStack: "PHP",
  },
}

/**
 * Évalue les réponses et attribue des scores aux différentes solutions
 * @param {Record<string, string>} responses - Objet contenant les réponses aux questions
 * @returns {Array} - Les 3 solutions les plus pertinentes avec leurs scores et notes
 */
export function selectBestCMS(responses: Record<string, string>) {
  const scores: Record<string, { score: number; reasons: string[] }> = {}

  // Initialiser les scores à 0 pour toutes les solutions
  for (const solution in SOLUTIONS_OPTIONS) {
    scores[solution] = { score: 0, reasons: [] }
  }

  // Analyse du type de site
  if (responses.siteType) {
    const typeMapping: Record<string, string[]> = {
      "Site vitrine/institutionnel": ["wordpress", "wix", "squarespace", "webflow", "nextjs", "nuxt", "astro"],
      "Site e-commerce": ["shopify", "woocommerce", "magento", "prestashop", "strapi", "nextjs", "webflow"],
      "Blog/portail d'information": ["wordpress", "ghost", "drupal", "contentful", "astro", "sanity"],
      "Application web": ["strapi", "drupal", "nextjs", "angular", "laravel", "symfony", "express", "bubble"],
      "Site communautaire/réseau social": ["wordpress", "drupal", "laravel", "symfony", "nextjs", "bubble"],
      "Site éducatif/e-learning": ["wordpress", "drupal", "laravel", "nextjs"],
      "Portfolio/galerie": ["wordpress", "squarespace", "webflow", "astro", "framer"],
    }

    if (typeMapping[responses.siteType]) {
      typeMapping[responses.siteType].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push(`Adapté pour les sites de type ${responses.siteType}`)
        }
      })
    }

    // Favoriser les frameworks pour "Application web"
    if (responses.siteType === "Application web") {
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "framework") {
          scores[solution].score += 8
          scores[solution].reasons.push("Framework bien adapté pour les applications web")
        }
      }
    }

    // Favoriser les CMS headless pour les projets avec frontend séparé ou multi-canal
    if (responses.siteType === "Application web" || responses.specificFeatures === "Multi-canal") {
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "headless") {
          scores[solution].score += 7
          scores[solution].reasons.push("CMS headless idéal pour les approches API-first")
        }
      }
    }
  }

  // Analyse des compétences techniques (contentManager)
  if (responses.contentManager) {
    if (responses.contentManager === "Des utilisateurs sans compétences techniques") {
      // Favoriser les solutions no-code et CMS faciles
      ;["wix", "squarespace", "webflow", "wordpress", "ghost"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 15
          scores[solution].reasons.push("Facile à utiliser sans compétences techniques")
        }
      })

      // Pénaliser les frameworks et solutions techniques
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "framework") {
          scores[solution].score -= 15
          scores[solution].reasons.push("Nécessite des compétences de développement")
        }
        if (SOLUTIONS_OPTIONS[solution].type === "headless") {
          scores[solution].score -= 10
          scores[solution].reasons.push("Architecture headless plus complexe à gérer")
        }
      }
    } else if (responses.contentManager === "Des personnes avec des connaissances techniques basiques") {
      // Favoriser les CMS traditionnels
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "cms") {
          scores[solution].score += 7
          scores[solution].reasons.push("Interface d'administration accessible")
        }
      }
      // Pénaliser les frameworks complexes
      ;["angular", "symfony", "laravel"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score -= 5
          scores[solution].reasons.push("Peut nécessiter plus de compétences techniques")
        }
      })
    } else if (responses.contentManager === "Des développeurs web") {
      // Favoriser les frameworks et solutions techniques
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "framework") {
          scores[solution].score += 15
          scores[solution].reasons.push("Idéal pour les équipes de développement")
        }
        if (SOLUTIONS_OPTIONS[solution].type === "headless") {
          scores[solution].score += 10
          scores[solution].reasons.push("Architecture flexible pour les développeurs")
        }
      }
      // Certains CMS avancés restent adaptés
      ;["drupal", "typo3"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("CMS puissant avec bonnes capacités de personnalisation")
        }
      })
    }
  }

  // Analyse de la personnalisation
  if (responses.customization) {
    if (responses.customization === "Élevé (design sur mesure, fonctionnalités spécifiques)") {
      // Favoriser les frameworks et headless CMS
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "framework") {
          scores[solution].score += 12
          scores[solution].reasons.push("Liberté totale de personnalisation")
        }
        if (SOLUTIONS_OPTIONS[solution].type === "headless") {
          scores[solution].score += 10
          scores[solution].reasons.push("Architecture flexible pour designs sur mesure")
        }
      }
      // Certains outils no-code avancés
      ;["webflow"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("Capacités de design avancées sans code")
        }
      })
    } else if (responses.customization === "Modéré (thème existant avec personnalisation importante)") {
      // CMS traditionnels et solutions no-code avancées
      ;["wordpress", "drupal", "webflow", "joomla"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 8
          scores[solution].reasons.push("Bon équilibre entre templates et personnalisation")
        }
      })
    } else if (responses.customization === "Basique (thème existant avec personnalisation mineure)") {
      // Solutions simples avec nombreux templates
      ;["wix", "squarespace", "wordpress", "prestashop", "shopify"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Nombreux templates prêts à l'emploi")
        }
      })

      // Pénaliser les solutions trop complexes
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "framework") {
          scores[solution].score -= 8
          scores[solution].reasons.push("Trop complexe pour des besoins basiques de personnalisation")
        }
      }
    }
  }

  // Analyse du budget
  if (responses.budget) {
    if (responses.budget === "Moins de 1 000 €") {
      // Solutions économiques
      ;["wordpress", "wix", "ghost", "concrete5"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Économique pour les petits budgets")
        }
      })

      // Frameworks open source
      ;["laravel", "symfony", "nextjs", "nuxt", "express", "astro", "svelte", "cakephp", "codeigniter"].forEach(
        (solution) => {
          if (scores[solution]) {
            scores[solution].score += 5
            scores[solution].reasons.push("Framework gratuit (coûts de développement à prévoir)")
          }
        },
      )

      // Pénaliser les solutions premium
      ;["magento", "contentstack", "kontent", "contentful"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score -= 15
          scores[solution].reasons.push("Solution potentiellement coûteuse")
        }
      })
    } else if (responses.budget === "Entre 1 000 et 5 000 €") {
      // Solutions milieu de gamme
      ;["wordpress", "woocommerce", "prestashop", "strapi", "craftcms", "webflow"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 7
          scores[solution].reasons.push("Bon rapport qualité/prix")
        }
      })
    } else if (responses.budget === "Entre 5 000 et 15 000 €") {
      // Solutions plus avancées
      ;["drupal", "magento", "sanity", "contentful", "laravel", "symfony", "nextjs"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 7
          scores[solution].reasons.push("Solution adaptée à ce budget intermédiaire")
        }
      })
    } else if (responses.budget === "Plus de 15 000 €") {
      // Solutions enterprise
      ;["magento", "drupal", "typo3", "contentstack", "kontent", "contentful", "angular", "symfony"].forEach(
        (solution) => {
          if (scores[solution]) {
            scores[solution].score += 8
            scores[solution].reasons.push("Solution enterprise avec fonctionnalités avancées")
          }
        },
      )
    }
  }

  // Analyse du délai
  if (responses.deadline) {
    if (responses.deadline === "Moins d'un mois") {
      // Solutions rapides à déployer
      ;["wix", "squarespace", "webflow", "shopify", "ghost"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 15
          scores[solution].reasons.push("Mise en place rapide")
        }
      })

      // Pénaliser les solutions complexes
      ;["drupal", "magento", "typo3", "angular", "symfony"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score -= 10
          scores[solution].reasons.push("Nécessite généralement plus de temps d'implémentation")
        }
      })
    } else if (responses.deadline === "1 à 3 mois") {
      // Solutions intermédiaires
      ;["wordpress", "woocommerce", "contentful", "strapi", "astro", "nextjs", "nuxt"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("Délai de mise en œuvre raisonnable")
        }
      })
    } else if (responses.deadline === "Plus de 3 mois") {
      // Solutions complexes qui bénéficient d'un délai plus long
      ;["drupal", "magento", "typo3", "symfony", "angular", "laravel"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 7
          scores[solution].reasons.push("Délai adapté pour exploiter pleinement les capacités")
        }
      })
    }
  }

  // Analyse des fonctionnalités spécifiques
  if (responses.specificFeatures) {
    if (responses.specificFeatures === "E-commerce (vente de produits/services)") {
      // Solutions e-commerce spécialisées
      ;["shopify", "woocommerce", "magento", "prestashop"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 20
          scores[solution].reasons.push("Spécialisé pour l'e-commerce")
        }
      })

      // Solutions avec capacités e-commerce
      ;["wordpress", "drupal", "webflow", "contentful", "strapi"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("Peut intégrer des fonctionnalités e-commerce")
        }
      })

      // Frameworks adaptés à l'e-commerce
      ;["nextjs", "nuxt", "laravel", "symfony"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 3
          scores[solution].reasons.push("Peut servir de base pour un site e-commerce sur mesure")
        }
      })
    } else if (responses.specificFeatures === "Gestion multilingue") {
      // Solutions avec bonnes capacités multilingues
      ;["drupal", "typo3", "wordpress", "storyblok", "dato", "contentful"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Excellentes capacités multilingues")
        }
      })
    } else if (responses.specificFeatures === "Réservation/prise de rendez-vous") {
      // Solutions adaptées aux systèmes de réservation
      ;["wordpress", "drupal", "wix", "bubble"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 8
          scores[solution].reasons.push("Bonne intégration de systèmes de réservation")
        }
      })

      // Frameworks pour solutions sur mesure
      ;["laravel", "symfony", "nextjs"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("Peut servir de base pour un système de réservation sur mesure")
        }
      })
    } else if (responses.specificFeatures === "Intégration avec d'autres systèmes (CRM, ERP, etc.)") {
      // Solutions avec bonnes capacités d'intégration
      ;["drupal", "wordpress", "strapi", "contentful", "directus", "contentstack"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Bonnes capacités d'intégration avec d'autres systèmes")
        }
      })

      // Frameworks pour intégrations sur mesure
      ;["laravel", "symfony", "express", "nextjs"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 12
          scores[solution].reasons.push("Flexibilité maximale pour intégrations complexes")
        }
      })

      // Avantage pour les headless CMS
      for (const solution in SOLUTIONS_OPTIONS) {
        if (SOLUTIONS_OPTIONS[solution].type === "headless") {
          scores[solution].score += 5
          scores[solution].reasons.push("Architecture API-first facilite les intégrations")
        }
      }
    } else if (responses.specificFeatures === "Authentification et gestion des utilisateurs") {
      // Solutions avec bonne gestion des utilisateurs
      ;["drupal", "wordpress", "bubble", "joomla", "typo3"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 8
          scores[solution].reasons.push("Gestion avancée des utilisateurs")
        }
      })

      // Frameworks avec capacités d'authentification
      ;["laravel", "symfony", "nextjs", "nuxt", "angular"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Fonctionnalités d'authentification robustes")
        }
      })
    } else if (responses.specificFeatures === "Marketing digital avancé (automation, personnalisation, etc.)") {
      // Solutions marketing
      ;["wordpress", "drupal", "webflow", "wix", "shopify"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 7
          scores[solution].reasons.push("Bonnes capacités marketing via plugins/extensions")
        }
      })

      // Avantage pour headless CMS avec personnalisation
      ;["contentful", "sanity", "contentstack", "kontent"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 5
          scores[solution].reasons.push("Personnalisation de contenu avancée possible")
        }
      })
    }
  }

  // Analyse de la performance et sécurité
  if (responses.performanceSecurity) {
    if (responses.performanceSecurity === "Très élevées (conformité réglementaire spécifique, haute disponibilité)") {
      // Solutions hautement sécurisées
      ;["drupal", "typo3", "laravel", "symfony", "angular"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 15
          scores[solution].reasons.push("Standards de sécurité élevés, adapté aux exigences strictes")
        }
      })

      // Solutions avec bonnes performances
      ;["astro", "nextjs", "sanity", "ghost", "svelte"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 10
          scores[solution].reasons.push("Excellentes performances")
        }
      })
    } else if (responses.performanceSecurity === "Élevées (trafic important, données sensibles)") {
      // Solutions robustes
      ;["drupal", "wordpress", "nextjs", "contentful", "laravel", "symfony"].forEach((solution) => {
        if (scores[solution]) {
          scores[solution].score += 8
          scores[solution].reasons.push("Bonne gestion de la sécurité et des performances")
        }
      })
    }
  }

  // Calculer les scores finaux et trier
  let sortedResults = Object.entries(scores)
    .map(([solution, data]) => {
      // Vérification de sécurité pour s'assurer que la solution existe
      if (!SOLUTIONS_OPTIONS[solution]) {
        return null
      }

      return {
        cms: SOLUTIONS_OPTIONS[solution].name,
        score: data.score,
        reasons: data.reasons.length > 0 ? data.reasons : ["Solution adaptable à divers besoins"],
        notes: SOLUTIONS_OPTIONS[solution].notes,
        strengths: SOLUTIONS_OPTIONS[solution].strengths,
        type: SOLUTIONS_OPTIONS[solution].type,
        techStack: SOLUTIONS_OPTIONS[solution].techStack || null,
      }
    })
    .filter((result): result is NonNullable<typeof result> => result !== null)
    .sort((a, b) => b.score - a.score)

  // Filtrer par type si demandé (exemple: uniquement les frameworks)
  if (responses.solutionType) {
    const typeFilter = responses.solutionType.toLowerCase()
    if (["cms", "headless", "nocode", "framework"].includes(typeFilter)) {
      sortedResults = sortedResults.filter((result) => result.type === typeFilter)
    }

    // Si on demande spécifiquement des frameworks PHP ou JS
    if (typeFilter === "php") {
      sortedResults = sortedResults.filter((result) => result.type === "framework" && result.techStack === "PHP")
    } else if (typeFilter === "javascript" || typeFilter === "js") {
      sortedResults = sortedResults.filter((result) => result.type === "framework" && result.techStack === "JavaScript")
    }
  }

  // Filtrer pour l'e-commerce si c'est une fonctionnalité essentielle
  if (responses.specificFeatures === "E-commerce (vente de produits/services)") {
    // Assurer qu'il y a au moins quelques solutions e-commerce dans les résultats
    const ecommerceSolutions = ["shopify", "woocommerce", "magento", "prestashop"]
    const hasEcommerceSolution = sortedResults.some((result) =>
      ecommerceSolutions.some((solution) => result.cms.toLowerCase().includes(solution.toLowerCase())),
    )

    // Si aucune solution e-commerce n'est dans les top résultats, en ajouter une
    if (!hasEcommerceSolution && sortedResults.length > 0) {
      // Trouver la meilleure solution e-commerce dans nos scores
      const bestEcommerce = Object.entries(scores)
        .filter(([solution]) => ecommerceSolutions.some((ecom) => solution === ecom))
        .sort((a, b) => b[1].score - a[1].score)[0]

      if (bestEcommerce) {
        const [solution, data] = bestEcommerce
        if (SOLUTIONS_OPTIONS[solution]) {
          sortedResults.push({
            cms: SOLUTIONS_OPTIONS[solution].name,
            score: data.score,
            reasons: data.reasons.length > 0 ? data.reasons : ["Solution spécialisée e-commerce"],
            notes: SOLUTIONS_OPTIONS[solution].notes,
            strengths: SOLUTIONS_OPTIONS[solution].strengths,
            type: SOLUTIONS_OPTIONS[solution].type,
            techStack: SOLUTIONS_OPTIONS[solution].techStack || null,
          })

          // Re-trier les résultats
          sortedResults = sortedResults.sort((a, b) => b.score - a.score)
        }
      }
    }
  }

  // Si aucun résultat n'a de score, ajouter des solutions par défaut selon le type de site
  if (sortedResults.length === 0 || sortedResults[0]?.score === 0) {
    const defaultSolutions = []

    // Par défaut, on propose un mix des différentes catégories
    defaultSolutions.push({
      cms: "WordPress",
      score: 50,
      reasons: ["CMS polyvalent par défaut"],
      notes: SOLUTIONS_OPTIONS.wordpress.notes,
      strengths: SOLUTIONS_OPTIONS.wordpress.strengths,
      type: "cms",
      techStack: null,
    })

    defaultSolutions.push({
      cms: "Next.js",
      score: 40,
      reasons: ["Framework JavaScript moderne par défaut"],
      notes: SOLUTIONS_OPTIONS.nextjs.notes,
      strengths: SOLUTIONS_OPTIONS.nextjs.strengths,
      type: "framework",
      techStack: "JavaScript",
    })

    defaultSolutions.push({
      cms: "Strapi",
      score: 30,
      reasons: ["CMS headless flexible par défaut"],
      notes: SOLUTIONS_OPTIONS.strapi.notes,
      strengths: SOLUTIONS_OPTIONS.strapi.strengths,
      type: "headless",
      techStack: null,
    })

    return defaultSolutions
  }

  // Assurer la diversité des solutions (au moins une de chaque type si possible)
  if (sortedResults.length >= 6 && !responses.solutionType) {
    const topResults = sortedResults.slice(0, 3)
    const remainingResults = sortedResults.slice(3)

    // Vérifier si les types sont variés dans les top résultats
    const typesInTop = new Set(topResults.map((result) => result.type))

    // Si on a moins de 3 types différents, essayer d'en ajouter
    if (typesInTop.size < 3) {
      const missingTypes = (
        ["cms", "headless", "framework", "nocode"] as Array<"cms" | "headless" | "nocode" | "framework">
      ).filter((type) => !typesInTop.has(type))

      // Pour chaque type manquant, trouver le meilleur résultat de ce type
      for (const type of missingTypes) {
        const bestOfType = remainingResults.find((result) => result.type === type)
        if (bestOfType) {
          topResults.push(bestOfType)
          // Retirer de remaining pour éviter les doublons
          const index = remainingResults.indexOf(bestOfType)
          remainingResults.splice(index, 1)
        }
      }

      // Recombiner et trier
      sortedResults = [...topResults, ...remainingResults].sort((a, b) => b.score - a.score)
    }
  }

  // Retourner les 3 meilleurs résultats
  return sortedResults.slice(0, 3)
}

