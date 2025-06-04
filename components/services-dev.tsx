import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeamEffect } from "@/components/ui/border-beam"


export const ServicesDev = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-12 relative overflow-hidden bg-gradient-to-b"
    >
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 w-80 h-80 bg-brand-700/20 rounded-full blur-[120px]"></div>
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-12 p-12">
          {/* WordPress Traditional Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white text-regularblue px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Traditionnel</span>
              </div>
              <h3 className="text-2xl font-bold text-regularblue mb-2">
                Sites Web Corporate
              </h3>
              <p className="text-regularblue/70">
                Pour 90% des besoins web professionnels
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  category: "Sites Vitrines",
                  description: "Présentation d'entreprise, services, équipes",
                  examples: [
                    "Groupes industriels",
                    "PME et startups",
                    "Filiales internationales",
                  ],
                },
                {
                  category: "Sites Institutionnels",
                  description: "Collectivités, associations, fondations",
                  examples: ["Mairies", "ONG", "Établissements publics"],
                },
                {
                  category: "Sites de Services",
                  description: "Cabinets, consultants, professions libérales",
                  examples: [
                    "Cabinets d'avocats",
                    "Consultants",
                    "Centres médicaux",
                  ],
                },
                {
                  category: "Portails d'Information",
                  description: "Actualités, documentation, ressources",
                  examples: [
                    "Centres de formation",
                    "Médias locaux",
                    "Portails RH",
                  ],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white/80 col-span-1 border border-pink-400/20 rounded-xl p-4 hover:border-pink-400/80 transition-colors"
                >
                  <h4 className="font-semibold text-regularblue mb-1">
                    {project.category}
                  </h4>
                  <p className="text-sm text-regularblue/70 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs border border-regularblue/10 text-regularblue px-2 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/wordpress">
                <Button 
                size="lg" 
              variant="outline"
              className="relative overflow-hidden rounded-full text-md font-googletitre border-blue-100/40">
                  Voir tous les détails →
                  <BorderBeamEffect />
                </Button>
              </Link>
            </div>
          </div>

          {/* WordPress Headless Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white text-regularblue px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Headless</span>
              </div>
              <h3 className="text-2xl font-bold text-regularblue mb-2">
                Applications Web Avancées
              </h3>
              <p className="text-regularblue/80">
                Pour les projets techniques ambitieux
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  category: "E-commerce Avancé",
                  description: "Catalogues complexes, configurateurs produit",
                  examples: [
                    "Configurateurs",
                    "Filtres avancés",
                    "Performance critique",
                  ],
                },
                {
                  category: "Portails Clients B2B",
                  description: "Dashboards, espaces de commande, suivi projets",
                  examples: [
                    "Tableaux de bord",
                    "Intégrations ERP",
                    "Espaces privés",
                  ],
                },
                {
                  category: "Applications SaaS",
                  description: "Interfaces de gestion, analytics temps réel",
                  examples: [
                    "Plateformes métier",
                    "Analytics avancées",
                    "Multi-tenant",
                  ],
                },
                {
                  category: "Applications Multi-Canal",
                  description: "Web + mobile + kiosques + APIs",
                  examples: ["Apps mobiles", "PWA", "Systèmes distribués"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="col-span-1 bg-white/80 border border-pink-400/20 rounded-xl p-4 hover:border-pink-400/80 transition-colors"
                >
                  <h4 className="font-semibold text-regularblue mb-1">
                    {project.category}
                  </h4>
                  <p className="text-sm text-regularblue/80 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs border border-lightblue/20 text-regularblue px-2 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/headless">
                <Button
                 size="lg" 
                variant="outline"
                className="relative overflow-hidden rounded-full text-md font-googletitre border-blue-100/40"
              >
                  Voir tous les détails →
                  <BorderBeamEffect />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDev;
