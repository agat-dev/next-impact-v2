"use client";
import dynamic from "next/dynamic";

const GeminiSearch = dynamic(() => import("@/components/gemini/gemini-search"));

export default function ClientGeminiBlock() {
  const prompt = `
Rôle : Agis en tant que Consultant en Stratégie Digitale et Expert UX.

Étape 1 : Diagnostic d'Identité (Obligatoire) Analyse l'URL {$url}. Avant de répondre aux livrables, identifie et résume brièvement :

Le secteur d'activité précis.

La proposition de valeur principale.

Les deux cibles prioritaires (ex: B2B, Particuliers etc.). Si tu as un doute sur l'activité, cherche dans les mentions légales ou les pages "À propos" avant de continuer.

Objectif : Évaluer l'opportunité d'une refonte vers une architecture Headless (découplée). L'analyse ne doit pas être technique (code), mais centrée sur le positionnement premium, la performance marketing et la domination concurrentielle.

Livrables attendus :

1. Analyse du Positionnement Actuel

Perception de marque : Le site reflète-t-il l'expertise et l'innovation de l'entreprise ou paraît-il technologiquement daté face aux standards de son marché en 2026 ?

Expérience Utilisateur (UX) : Analyse de la fluidité du parcours de conversion principal (du premier contact à l'action finale).

Indice de modernité : [Note sur 10] par rapport aux leaders du secteur.

2. Analyse de Pertinence Marketing (Migration Headless)

Verdict Stratégique : [Accélérer / Maintenir / Pivoter].

Enjeu de Différenciation : Comment le Headless permettrait-il de transformer le site en une plateforme interactive, ultra-rapide et personnalisée ?

Justification Business : Analyse du rapport entre l'investissement (CAPEX) et le gain d'image ou de taux de conversion.

3. Indicateurs d'Impact Business

Taux de conversion (Lead Gen/Vente) : Prévision d'augmentation grâce à l'instantanéité (suppression des temps de chargement).

SEO & Autorité : Impact du passage aux Core Web Vitals "parfaits" sur le classement Google.

Agilité Marketing : Capacité à déployer des landing pages ou de nouveaux services sans contraintes back-end.

4. 3 Leviers de Croissance Commerciale

Identifie 3 fonctionnalités à haute valeur ajoutée (ex: configurateur, portail client immersif, expérience mobile-first, personnalisation par l'IA) que l'architecture Headless rendrait possible ou plus performante.
IMPORTANT : Réponds EXCLUSIVEMENT en texte structuré Markdown. NE RÉPONDS PAS AU FORMAT JSON.
`;

  return <GeminiSearch onResult={() => {}} prompt={prompt} />;
}
