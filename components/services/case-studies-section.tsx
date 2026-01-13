import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Billeterie en ligne",
    need: "Gestion de 100k+ événements",
    solution: "WordPress pour paramétrage, Next.js pour l'affichage",
    result: "Facilité de gestion, performances optimales",
    metrics: [
      "Performance +300%",
      "UX moderne",
      "Données temps réel",
    ],
  },
  {
    title: "Site Corporate exigeant",
    need: "Présence en ligne haut de gamme",
    solution: "WordPress la gestion des contenus, Next.js pour l'UI/UX",
    result: "Site exigeant, performant et simple à administrer",
    metrics: [
      "Image de marque renforcée",
      "Temps de chargement maximal",
      "Gestion simplifiée pour les équipes",
    ],
  },
  {
    title: "Wiki Collaboratif",
    need: "Collaboration et partage de données",
    solution: "WordPress headless + Next.js",
    result: "Espaces membres modernisés et haute performance",
    metrics: [
      "Simplicité d'utilisation",
      "Accès rapide aux données",
      "Sécurité renforcée",
    ],
  },
  {
    title: "Extranet B2B",
    need: "Gestion de données clients et partenaires",
    solution: "WordPress + Next.js + intégrations métier",
    result: "Interface moderne, données unifiées",
    metrics: [
      "Intégration CRM/ERP",
      "Gains de temps",
      "Satisfaction des partenaires",
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-regularblue mb-4">
            Cas d'usage détaillés
          </h2>
          <p className="text-lg text-regularblue/80">
            Exemples concrets d'applications réalisées
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card key={index} className="border-blue-100">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl font-googletitre text-regularblue font-medium">
                    {caseStudy.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong className="text-sm font-googletitre text-regularblue">
                    Besoin :
                  </strong>
                  <p className="text-sm text-regularblue/80">
                    {caseStudy.need}
                  </p>
                </div>
                <div>
                  <strong className="text-sm font-googletitre text-regularblue">
                    Solution :
                  </strong>
                  <p className="text-sm text-regularblue/80">
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <strong className="text-sm font-googletitre text-regularblue">
                    Résultat :
                  </strong>
                  <p className="text-sm text-regularblue/80">
                    {caseStudy.result}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {caseStudy.metrics.map((metric, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-lightblue/10 text-regularblue"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
