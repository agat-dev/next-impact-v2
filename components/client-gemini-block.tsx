"use client";
import dynamic from "next/dynamic";

const GeminiSearch = dynamic(() => import("@/components/gemini/gemini-search"));

export default function ClientGeminiBlock() {
  // L'instruction système définit le "rôle" et le contexte global.
  // Elle doit être passée séparément du prompt dans l'appel API.
  const system_instruction = `Tu es un expert en stratégie digitale et UX. Ton analyse est factuelle, basée sur les standards technologiques et marketing actuels. Tu fournis des recommandations claires et justifiées pour un public de décideurs (CEO, CTO).`;

  // Le prompt se concentre sur les tâches à accomplir.
  const prompt = `
**Mission :** Audit stratégique de l'URL **{$url}** pour évaluer la pertinence d'une migration vers une architecture Headless.

---

**Étape 1 : Diagnostic d'Identité (Scan Précis)**
*Effectue une analyse croisée du contenu visible (Header, Footer, Page "À Propos").*

1.  **Secteur d'activité :** (Ex: E-commerce B2C, SaaS B2B, Média, etc.)
2.  **Proposition de valeur :** Quelle est la promesse principale faite au client ?
3.  **Mission :** Cite un court extrait du site qui valide cette proposition.
4.  **Cibles prioritaires :** Identifie les 2 profils d'utilisateurs les plus évidents.
*Si le site est inaccessible ou le contenu protégé, réponds uniquement : "Accès bloqué : Diagnostic impossible." et arrête l'analyse.*

---

**Étape 2 : Analyse Stratégique (Format Markdown)**

### 1. Positionnement Actuel
*   **Perception de marque :** Le design et la navigation du site inspirent-ils confiance et modernité, ou montrent-ils des signes de retard technologique (lenteur, design daté) ?
*   **Friction UX Majeure :** Quel est le principal obstacle visible dans le parcours utilisateur (ex: formulaire complexe, navigation peu claire, temps de chargement) ?
*   **Indice de modernité :** [Note sur 10] évaluant la performance et l'expérience globale par rapport aux standards actuels.

### 2. Pertinence d'une Migration Headless
*   **Verdict Stratégique :** [Accélérer / Maintenir / Pivoter]. Justifie en une phrase.
*   **Enjeu de Différenciation :** Comment le Headless peut-il transformer l'expérience (ex: ultra-rapide, personnalisée) pour créer un avantage concurrentiel ?
*   **Justification Business :** Quels sont les arguments clés (ROI potentiel) justifiant l'investissement face aux gains attendus en performance, SEO et agilité marketing ?

### 3. Indicateurs d'Impact Business
*   **Performance & SEO :** Quel serait l'impact de temps de chargement quasi-instantanés (Core Web Vitals optimaux) sur le classement Google et le taux de rebond ?
*   **Agilité Marketing :** Explique comment le Headless permettrait aux équipes de lancer plus rapidement des campagnes ou de nouveaux contenus sans dépendre du back-end.

### 4. Leviers de Croissance via Headless
*Identifie 3 fonctionnalités innovantes ou à haute valeur ajoutée que le Headless rendrait possibles.*
1.  (Ex: Configurateur de produit 3D)
2.  (Ex: Portail client personnalisé et immersif)
3.  (Ex: Intégration d'une IA de recommandation)

---

**Instruction de sortie :** Réponds exclusivement en Markdown. La structure doit suivre les titres et les points de l'étape 2.
`;

  return <GeminiSearch onResult={() => {}} prompt={prompt} systemInstruction={system_instruction} />;
}
