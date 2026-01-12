import React from "react";

interface TeasingSummaryProps {
  onRequestUnlock: (section: string) => void;
  onScrollTo: (section: string) => void;
  visibleSections: string[];
  answers?: Record<string, string>;
}



const summary = [
  {
    id: "etape1",
    label: "Étape 1 : Diagnostic d’Identité (Scan Précis)",
    children: [
      { id: "secteur", label: "Secteur d’activité :" },
      { id: "valeur", label: "Proposition de valeur :" },
      { id: "preuve", label: "Preuve textuelle :" },
      { id: "cibles", label: "Cibles prioritaires :" },
    ],
  },
  {
    id: "etape2",
    label: "Étape 2 : Analyse Stratégique",
    children: [
      { id: "positionnement", label: "Positionnement Actuel" },
      { id: "perception", label: "Perception de marque" },
      { id: "friction", label: "Friction UX Majeure" },
      { id: "indice", label: "Indice de modernité" },
      { id: "pertinence", label: "Pertinence d’une Migration Headless" },
      { id: "verdict", label: "Verdict Stratégique" },
      { id: "enjeu", label: "Enjeu de Différenciation" },
      { id: "justification", label: "Justification Business" },
      { id: "indicateurs", label: "Indicateurs d’Impact Business" },
      { id: "performance", label: "Performance & SEO" },
      { id: "agilite", label: "Agilité Marketing" },
      { id: "leviers", label: "Leviers de Croissance via Headless" },
      { id: "fonctionnalite1", label: "Configurateur de produit 3D" },
      { id: "fonctionnalite2", label: "Portail client personnalisé et immersif" },
      { id: "fonctionnalite3", label: "Intégration d'une IA de recommandation" },
    ],
  },
];

export default function TeasingSummary({ onRequestUnlock, onScrollTo, visibleSections, answers }: TeasingSummaryProps) {
  // visibleSections: liste des ids visibles dans la preview
  const handleClick = (id: string) => {
    if (visibleSections.includes(id)) {
      onScrollTo(id);
    } else {
      onRequestUnlock(id);
    }
  };
  return (
    <nav className="my-6">
      <ul className="flex flex-col gap-2">
        {summary.map((step) => (
          <li key={step.id}>
            <button
              className="text-lg font-googletitre text-mediumblue hover:text-coral transition"
              onClick={() => handleClick(step.id)}
              type="button"
            >
              {step.label}
            </button>
            <ul className="ml-4 mt-1 flex flex-col gap-1">
              {step.children.map((item) => (
                <li key={item.id}>
                  <button
                    className={`text-left text-base text-mediumblue/80 hover:text-coral transition ${visibleSections.includes(item.id) ? "font-semibold" : "opacity-60"}`}
                    onClick={() => handleClick(item.id)}
                    type="button"
                  >
                    {item.label}
                    {step.id === "etape1" && answers?.[item.id] && (
                      <span className="ml-2 text-mediumblue/60 font-normal">{answers[item.id]}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
