"use client";
import dynamic from "next/dynamic";

const GeminiSearch = dynamic(() => import("@/components/gemini/gemini-search"));

export default function ClientGeminiBlock() {
  
const prompt = `Analyse le site WordPress suivant : {$url}
En tant qu'expert en architecture web et WordPress, réalise un résumé exécutif pour évaluer l'opportunité d'une migration vers une architecture headless.
Méthodologie d'analyse

Analyse technique du site :Inspecte le code source pour identifier la stack technique (thème, plugins visibles)
Evalue la complexité du frontend actuel et ses limites par rapport à une approche headless Next.js
Performance actuelle :Utilise des outils publics pour mesurer les performances actuelles (Lighthouse, WebPageTest)
Identifie les fonctionnalités critiques utilisées :Liste les plugins et intégrations majeures qui pourraient impacter la migration
Contenu et structure : Analyse la structure des pages et la complexité du frontend
Évalue le volume de contenu apparent
Benchmarking :Compare avec des sites similaires en headless
Recherche des cas d'études pertinents dans le même secteur
Format de réponse attendu
Structure ta réponse selon ce format :
Synthèse de la recommandation
Verdict : [Headless recommandé / Non recommandé / Approche hybride]
Niveau de priorité : [Critique / Élevé / Moyen / Faible]
Complexité estimée : [Faible / Moyenne / Élevée]
Justification en 2-3 phrases
Indicateurs de bénéfice quantifiables
Evolution attendue des conversions : [fourchette en %]
Evolution UI/UX : [qualitative]
Evolution des performances : [amélioration en %]
Evolutions SEO attendues : [qualitative + quantitative si possible]
Evolutions techniques : [gains en % sur déploiement, sécurité, scalabilité]
Evolutions infrastructure : [économie ou surcoût estimé en €/mois]

Un résumé de 200 mots maximum, orienté décision, avec des chiffres concrets qui permettent à un décideur de trancher rapidement.
IMPORTANT : Réponds EXCLUSIVEMENT en texte structuré Markdown. NE RÉPONDS PAS AU FORMAT JSON.
`

  return (
    <GeminiSearch onResult={() => {}} prompt={prompt} />
  );
}
