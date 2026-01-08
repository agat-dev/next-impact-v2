"use client";
import dynamic from "next/dynamic";

const GeminiSearch = dynamic(() => import("@/components/gemini/gemini-search"));

export default function ClientGeminiBlock() {
  
const prompt = `Analyse le site WordPress suivant : {$url}
En tant qu'expert en architecture web et WordPress, réalise un résumé exécutif pour évaluer l'opportunité d'une migration vers une architecture headless.
Méthodologie d'analyse

Analyse technique du site :Inspecte le code source pour identifier la stack technique (thème, plugins visibles)
Évalue les performances actuelles via les données disponibles
Identifie les fonctionnalités critiques utilisées
Collecte de métriques :Utilise web search pour récupérer les Core Web Vitals du site via des outils publics si possible
Analyse la structure des pages et la complexité du frontend
Évalue le volume de contenu apparent
Benchmarking :Compare avec des sites similaires en headless
Recherche des cas d'études pertinents dans le même secteur
Format de réponse attendu
Structure ta réponse selon ce format :
Résumé exécutif et indicateurs clés
Synthèse de la recommandation
Verdict : [Headless recommandé / Non recommandé / Approche hybride]
Niveau de priorité : [Critique / Élevé / Moyen / Faible]
Complexité estimée : [Faible / Moyenne / Élevée]
Justification en 2-3 phrases
Déatails de l'analyse
Performance
Temps de chargement actuel : [mesure] → projection headless : [estimation]
Score Lighthouse actuel : [si disponible] → projection : [estimation]
Core Web Vitals (LCP, FID, CLS) : état actuel et projections
Potentiel d'amélioration en % : [calcul]
Business (estimations basées sur des benchmarks)
Impact estimé sur le taux de conversion : [fourchette en %]
Réduction potentielle du taux de rebond : [fourchette en %]
Amélioration SEO potentielle : [qualitative + quantitative si possible]
Impact infrastructure : [économie ou surcoût estimé en €/mois]
Technique
Gains de déploiement estimés : [en %]
Amélioration de la sécurité : [niveau : faible/moyen/élevé]
Time to Market : [amélioration estimée]
Scalabilité : [évaluation du gain]
ROI estimé
Investissement initial : [250€ par jours/homme]
Coûts récurrents annuels : [estimation]
Retour sur investissement : [estimation en mois]
Gains de conversion cumulés sur 3 ans : [projection en pourcentage]
Risques majeurs identifiés
[Risque 1 - Criticité : Haute/Moyenne/Faible] - Mitigation : [solution]
[Risque 2 - Criticité] - Mitigation : [solution]
[Risque 3 - Criticité] - Mitigation : [solution]
Points d'attention spécifiques au site
Liste des fonctionnalités critiques détectées qui nécessiteraient une attention particulière
Plugins ou intégrations qui compliqueraient la migration
Opportunités uniques identifiées
Critères d'évaluation
Base tes estimations sur :
Les standards de l'industrie pour les sites headless similaires
Les benchmarks de performance connus
Les best practices de migration WordPress → Headless
Les études de cas disponibles publiquement
Ton et précision
IMPORTANT : Ne fais aucune référence au nom de l'entreprise, à sa marque ou à son secteur d'activité spécifique dans ton analyse.
Sois factuel et nuancé
Indique clairement quand tu fais des estimations vs. des mesures réelles
Propose des fourchettes plutôt que des chiffres précis quand nécessaire
Cite tes sources quand tu utilises des benchmarks ou études
Mentionne les hypothèses sur lesquelles tu bases tes calculs
Livrables attendus
Un résumé de 500 mots maximum, orienté décision, avec des chiffres concrets qui permettent à un décideur de trancher rapidement.
IMPORTANT : Réponds EXCLUSIVEMENT en texte structuré Markdown. NE RÉPONDS PAS AU FORMAT JSON.
IMPORTANT : Commence impérativement ton audit par la section "Résumé exécutif" et assure-toi d'inclure la section "Indicateurs de bénéfice quantifiables" de manière claire car elle sert de point de coupure pour la prévisualisation.`;


  return (
    <GeminiSearch onResult={() => {}} prompt={prompt} />
  );
}
