
import { Card,
  CardHeader,
    CardTitle,
  CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export async function DecisionHelper() {
    return (
        
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-regularblue mb-4">Comment déterminer si le headless vous convient</h2>
          <p className="text-lg text-regularblue/80">Critères de décision pour une architecture headless</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-regularblue/10 bg-extralightblue/10">
            <CardHeader>
              <CardTitle className="text-regularblue font-adobetitre">Headless recommandé si :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Performance critique (< 2 secondes impératif)",
                  "Interface utilisateur complexe requise",
                  "Multi-canal prévu (web + mobile + autres)",
                  "Intégrations système nombreuses",
                  "Équipe technique disponible",
                  "Budget conséquent acceptable",
                  "Évolutivité long terme prioritaire",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-lightblue" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-pink-200/40 bg-pink-50/20">
            <CardHeader>
              <CardTitle className="text-regularblue font-adobetitre">WordPress traditionnel si :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Site vitrine ou institutionnel classique",
                  "Équipe non technique",
                  "Budget limité",
                  "Mise en ligne rapide nécessaire",
                  "Fonctionnalités standard suffisantes",
                  "Maintenance simple souhaitée",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-pink-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    );
}