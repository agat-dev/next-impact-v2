"use server"

import type { CategoryScore } from "../types"

export async function performanceAudit(url: string): Promise<CategoryScore> {
  try {
    // Appel à l'API PageSpeed Insights avec la clé API fournie
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${process.env.PAGESPEED_API_KEY}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`L'API PageSpeed a retourné le statut ${response.status}`)
    }

    const data = await response.json()

    // Extraction des métriques de performance
    const lighthouseResult = data.lighthouseResult
    const performanceScore = Math.round(lighthouseResult.categories.performance.score * 100)

    // Extraction des Core Web Vitals
    const lcp = lighthouseResult.audits["largest-contentful-paint"]
    const fid = lighthouseResult.audits["max-potential-fid"] || lighthouseResult.audits["total-blocking-time"]
    const cls = lighthouseResult.audits["cumulative-layout-shift"]
    const ttfb = lighthouseResult.audits["server-response-time"]

    // Création des constats et recommandations selon les résultats
    const findings = []
    const recommendations = []

    if (lcp.score < 0.9) {
      findings.push({
        title: "LCP (Largest Contentful Paint) lent",
        description: `Votre LCP est de ${lcp.displayValue}, ce qui est supérieur à la recommandation de 2,5 secondes.`,
        impact: lcp.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Améliorer le LCP",
        description: "Optimisez le chargement du contenu principal, y compris les images, vidéos ou blocs de texte volumineux.",
        link: "https://web.dev/lcp/",
      })
    }

    if (fid.score < 0.9) {
      findings.push({
        title: "Problème d'interactivité",
        description: `Votre ${fid.title} est de ${fid.displayValue}, ce qui peut provoquer des lenteurs lors des interactions utilisateur.`,
        impact: fid.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Améliorer l'interactivité",
        description: "Optimisez l'exécution JavaScript et réduisez le travail du thread principal pour améliorer la réactivité.",
        link: "https://web.dev/fid/",
      })
    }

    if (cls.score < 0.9) {
      findings.push({
        title: "Problèmes de stabilité de la mise en page",
        description: `Votre Cumulative Layout Shift est de ${cls.displayValue}, ce qui nuit à l'expérience utilisateur car des éléments bougent lors du chargement.`,
        impact: cls.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Réduire les décalages de mise en page",
        description:
          "Définissez les attributs de taille sur les images et vidéos, évitez d'insérer du contenu au-dessus du contenu existant et utilisez les animations transform.",
        link: "https://web.dev/cls/",
      })
    }

    if (ttfb.score < 0.9) {
      findings.push({
        title: "Temps de réponse serveur lent",
        description: `Votre serveur met ${ttfb.displayValue} à répondre, ce qui ralentit tout le chargement de la page.`,
        impact: ttfb.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Améliorer le temps de réponse serveur",
        description: "Optimisez le traitement serveur, utilisez un CDN, mettez en cache les réponses ou choisissez un hébergement plus performant.",
        link: "https://web.dev/ttfb/",
      })
    }

    // Ajout de recommandations générales si besoin
    if (recommendations.length < 3) {
      recommendations.push({
        title: "Optimiser les images",
        description: "Utilisez des formats modernes comme WebP, des tailles adaptées et la compression pour réduire le poids des images.",
        link: "https://web.dev/use-imagemin-to-compress-images/",
      })

      recommendations.push({
        title: "Mettre en place des resource hints",
        description: "Utilisez preload, prefetch et preconnect pour prioriser le chargement des ressources critiques.",
        link: "https://web.dev/preload-critical-assets/",
      })
    }

    // Si aucun problème majeur, ajouter un constat positif
    if (findings.length === 0) {
      findings.push({
        title: "Bonne performance globale",
        description: "Votre site obtient de bons résultats sur les principaux indicateurs de performance, mais il y a toujours des axes d'amélioration.",
        impact: "low",
      })
    }

    return {
      name: "performance",
      score: performanceScore,
      summary:
        "La performance de votre site impacte l'expérience utilisateur, les taux de conversion et le référencement naturel. Les performances mobiles sont particulièrement importantes car la majorité des utilisateurs naviguent sur mobile.",
      findings: findings.slice(0, 4), // Limite à 4 constats
      recommendations: recommendations.slice(0, 4), // Limite à 4 recommandations
      sources: [
        {
          name: "Google PageSpeed Insights",
          url: "https://pagespeed.web.dev/",
        },
        {
          name: "Web.dev Core Web Vitals",
          url: "https://web.dev/vitals/",
        },
      ],
    }
  } catch (error) {
    console.error("Erreur lors de l'audit performance :", error)

    // Valeur de secours générique si l'appel API échoue
    return {
      name: "performance",
      score: 50,
      summary:
        "Un problème est survenu lors de l'analyse des performances de votre site. Le score et les recommandations ci-dessous sont génériques et non spécifiques à votre site.",
      findings: [
        {
          title: "Impossible de réaliser l'analyse de performance",
          description: "Nous n'avons pas pu récupérer les données de performance via l'API PageSpeed Insights. Veuillez réessayer plus tard.",
          impact: "high",
        },
      ],
      recommendations: [
        {
          title: "Optimiser les images",
          description: "Assurez-vous que toutes les images sont correctement dimensionnées et compressées pour le web.",
          link: "https://web.dev/use-imagemin-to-compress-images/",
        },
        {
          title: "Minimiser le JavaScript",
          description: "Réduisez, minifiez et compressez le JavaScript pour améliorer les temps de chargement.",
          link: "https://web.dev/reduce-javascript-payloads-with-code-splitting/",
        },
        {
          title: "Mettre en place la mise en cache",
          description: "Utilisez la mise en cache navigateur et les CDN pour réduire les temps de chargement pour les visiteurs récurrents.",
          link: "https://web.dev/http-cache/",
        },
      ],
      sources: [
        {
          name: "Google PageSpeed Insights",
          url: "https://pagespeed.web.dev/",
        },
        {
          name: "Web.dev Core Web Vitals",
          url: "https://web.dev/vitals/",
        },
      ],
    }
  }
}

