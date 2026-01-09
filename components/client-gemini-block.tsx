"use client";
import dynamic from "next/dynamic";

const GeminiSearch = dynamic(() => import("@/components/gemini/gemini-search"));

export default function ClientGeminiBlock() {
  const prompt = `
---

**Rôle :** Expert UX & Consultant Stratégie Digitale (Vision 2026).
**Mission :** Audit stratégique de l'URL **{$url}** pour évaluer l'opportunité d'une architecture Headless.

**Étape 1 : Diagnostic d'Identité (Vérification Stricte)**
Avant les livrables, effectue un scan croisé (Header, Footer, Page À Propos).

1. **Secteur précis :** (Industrie, Service, E-commerce, etc.)
2. **Proposition de valeur :** Quelle promesse client est affichée ?
3. **Preuve :** Cite un court extrait textuel du site validant ce diagnostic.
4. **Cibles prioritaires :** Identifie les 2 profils types visés.
*Si le site est inaccessible ou le contenu protégé, indique explicitement "Accès bloqué : Diagnostic impossible" et ne poursuis pas.*

---

**Étape 2 : Analyse du Positionnement (Markdown uniquement)**

### 1. Analyse du Positionnement Actuel

* **Perception de marque :** Le site reflète-t-il l'expertise et l'innovation ou souffre-t-il d'une dette technologique visible face aux standards de 2026 ?
* **Expérience Utilisateur (UX) :** Identification du point de friction majeur dans le tunnel de conversion.
* **Indice de modernité :** [Note /10] par rapport aux leaders du marché.

### 2. Pertinence Marketing (Migration Headless)

* **Verdict Stratégique :** [Accélérer / Maintenir / Pivoter].
* **Enjeu de Différenciation :** Capacité du Headless à transformer le site en une interface ultra-rapide et personnalisée.
* **Justification Business :** Analyse du rapport investissement (CAPEX) vs gain d'autorité et de performance.

### 3. Indicateurs d'Impact Business

* **Performance & SEO :** Impact de l'instantanéité (Core Web Vitals parfaits) sur le classement et le taux de rebond.
* **Agilité Marketing :** Liberté de déploiement de contenus et services sans contraintes back-end.

### 4. 3 Leviers de Croissance Commerciale

* Identifie 3 fonctionnalités à haute valeur ajoutée (ex: configurateur 3D, portail client immersif, IA prédictive, expérience Mobile-First) que l'architecture Headless rendrait techniquement viables.

---

**Instruction de sortie :** Réponds exclusivement en texte structuré Markdown. Aucun format JSON. Focus 100% Business et UX.

---
`;

  return <GeminiSearch onResult={() => {}} prompt={prompt} />;
}
