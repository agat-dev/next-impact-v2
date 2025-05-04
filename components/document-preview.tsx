"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentPreviewProps {
  formData: Record<string, any>;
}

export function DocumentPreview({ formData }: DocumentPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement pour l'effet visuel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour vérifier si une section a des données
  const hasSectionData = (sectionId: string): boolean => {
    const sectionData = formData[sectionId];
    if (!sectionData) return false;

    // Vérifie si au moins un champ de la section contient une valeur
    return Object.values(sectionData).some((value) => {
      if (typeof value === "object") {
        return Object.values(value).some((subValue) => subValue);
      }
      return value && value.toString().trim() !== "";
    });
  };

  // Rendu du contenu de prévisualisation
  const renderPreviewContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-6 p-6">
          <Skeleton className="h-12 w-3/4 bg-blue-100" />
          <Skeleton className="h-8 w-1/2 bg-blue-100" />
          <div className="space-y-4 mt-8">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 space-y-8">
        {/* Page de couverture */}
        <div className="bg-blue-50 p-8 rounded-lg border-t-8 border-blue-600 shadow-md mb-12">
          <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-blue-800">CAHIER DES CHARGES</h1>
        <h2 className="text-xl text-blue-600">Refonte de Site Vitrine Institutionnel</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>

        <div className="mt-12 space-y-4 text-left max-w-md mx-auto">
          <div className="flex">
            <span className="font-semibold w-40">Organisation:</span>
            <span>{formData["organisation_name"] || "Non spécifié"}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Secteur d'activité:</span>
            <span>{formData["secteur_activite"] || "Non spécifié"}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Date de rédaction:</span>
            <span>{formData["date_redaction"] || new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-40">Rédacteur:</span>
            <span>{formData["redacteur"] || "Non spécifié"}</span>
          </div>
        </div>
          </div>
        </div>

        {/* Sections dynamiques */}
        {Object.entries(formData.sections || {}).map(([sectionId, sectionData]) => {
          if (hasSectionData(sectionId)) {
        return (
          <div key={sectionId} className="mb-10">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-sm mb-4">
          <h2 className="text-lg font-bold">{sectionData.title || sectionId.toUpperCase()}</h2>
            </div>
            <div className="ml-4 space-y-6">
          {Object.entries(sectionData.fields || {}).map(([key, value]) => (
            <div key={key}>
              <span className="font-semibold">{key}: </span>
              {typeof value === "object" ? (
            <ul className="list-disc ml-6">
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>
              {subKey}: {subValue ? "Oui" : "Non"}
                </li>
              ))}
            </ul>
              ) : (
            <span className="bg-gray-50 px-2 py-1 rounded">{String(value) || "Non spécifié"}</span>
              )}
            </div>
          ))}
            </div>
          </div>
        );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <Card className="border-2 border-blue-200 shadow-lg">
      <div className="bg-blue-50 p-4 border-b border-blue-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-800">Prévisualisation du document</h3>
        <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Format A4</span>
      </div>
      <ScrollArea className="h-[800px] w-full">
        <div className="bg-white shadow-inner mx-auto my-6" style={{ width: "210mm", minHeight: "297mm" }}>
          {renderPreviewContent()}
        </div>
      </ScrollArea>
    </Card>
  );
}