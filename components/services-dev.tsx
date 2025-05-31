import { Card, CardContent } from "@/components/ui/card";
import {
  CodeIcon,
  BadgeEuro,
  HandMetal,
  Rocket,
  Unplug,
  CloudCog,
  DatabaseIcon,
} from "lucide-react";
import { BorderBeamEffect } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import Link from "next/link";

{/*
const ServicesDev = () => {
  const skills = [
    {
      icon: <CodeIcon className="h-6 w-6 text-brand-400" />,
      title: "Sites Corporate",
      description: (
        <>
          <span className="uppercase font-adobetitre text-xl">WordPress</span>
          <br />
          <br />
            <div className="col-span-6 flex flex-col gap-6 pt-4">

            <div className="flex items-center">
              <Image 
                  src="/img/design.gif"
                  alt="Solution technique animation"
                  width={68}
                  height={68}
                  className="mr-3 text-primary" />
                <span className="font-adobetitre text-xl text-regularblue/80">Design sur-mesure</span>
              </div>  
              <div className="flex items-center mt-5">
              <Image 
                  src="/img/database.gif"
                  alt="Solution technique animation"
                  width={68}
                  height={68}
                  className="mr-3 text-primary" />
                <span className="font-adobetitre text-xl text-regularblue/80">Organisation des contenus dédiée</span>
              </div>  

              <div className="flex items-center mt-3">
                <Image 
                    src="/img/plug.gif"
                    alt="Solution technique animation"
                    width={60}
                    height={60}
                    className="ml-2 mr-3 text-primary" />
                  <span className="font-adobetitre text-xl text-regularblue/80">Fonctionnalités adaptées</span>
                </div>  
              <div className="flex items-center">
              <Image 
                  src="/img/backend.gif"
                  alt="Solution technique animation"
                  width={64}
                  height={64}
                  className="mr-3 text-primary" />
                <span className="font-adobetitre text-xl text-regularblue/80">Administration personnalisée</span>
              </div>   
              <div className="flex items-center mt-2">
              <Image 
                  src="/img/seo.gif"
                  alt="Solution technique animation"
                  width={43}                 
                  height={43}                 
                  className="ml-2 mr-6 text-primary" />
                <span className="font-adobetitre text-xl text-regularblue/80">Gestion SEO native</span>
              </div>  
            </div>
        </>
      ),
    },
    {
      icon: <DatabaseIcon className="h-6 w-6 text-brand-400" />,
      title: "Applications Web",
      description: (
        <>
          <span className="uppercase font-adobetitre text-xl">
            Headless WordPress
          </span>
          <br />
          <br />    
            <div className="col-span-6 flex flex-col gap-6 pt-4">
            <div className="flex items-center">
            <Image 
                src="/img/performances.gif"
                alt="Solution technique animation"
                width={45}
                height={45}
                className="mx-3 text-primary" />
              <span className="ml-3 font-adobetitre text-xl text-regularblue/80">Performances accrues</span>
            </div>  
            <div className="flex items-center mt-4">
            <Image 
                src="/img/design.gif"
                alt="Solution technique animation"
                width={64}
                height={64}
                className="ml-1 mr-3 text-primary" />
              <span className="font-adobetitre text-xl text-regularblue/80 jusitfy-self-start">Design moderne</span>
            </div>  
            <div className="flex items-center mt-3">
            <Image 
                src="/img/backend.gif"
                alt="Solution technique animation"
                width={64}
                height={64}
                className="mr-4 text-primary" />
              <span className="font-adobetitre text-xl text-regularblue/80">Interface d'admin familière</span>
            </div>  
            <div className="flex items-center mt-1">
            <Image 
                src="/img/api.gif"
                alt="Solution technique animation"
                width={50}
                height={50}
                className="ml-2 mr-5 text-primary" />
              <span className="font-adobetitre text-xl text-regularblue/80">Connexion à des applications extérieures</span>
            </div>  
            <div className="flex items-center mt-2">
            <Image 
                src="/img/mobile.gif"
                alt="Solution technique animation"
                width={54}
                height={54}
                className="ml-1 mr-5 text-primary" />
              <span className="font-adobetitre text-xl text-regularblue/80">Evolutivité vers l'app mobile</span>
            </div>  
          </div> 
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-12 relative overflow-hidden bg-gradient-to-b"
    >

      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 w-80 h-80 bg-brand-700/20 rounded-full blur-[120px]"></div>

      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
            Développement web
          </h2>
          <p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
              La simplicité de WordPress et la qualité du développement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-start gap-24 my-16 p-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="h-fit bg-white border shadow-none transition-all rounded-2xl overflow-hidden"
            >
              <MagicCard className="rounded-2xl">
                <CardContent className="flex items-center justify-center flex-col text-center pl-8 pr-12 py-8">
                  <h3 className="text-4xl font-bold mb-3 pt-5 text-regularblue">
                    {skill.title}
                  </h3>
                  <div className="text-regularblue/80">{skill.description}</div>
                </CardContent>
              </MagicCard>
            </Card>
          ))}
        </div>

        <div className="mt-24 p-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-regularblue">
              Pourquoi WordPress ?
            </h3>
            <p className="text-regularblue/80 mb-6 text-lg">
              <strong>Avec 20 ans d'existence et 40% de parts de marché du web</strong>, WordPress
              garantit pérennité, sécurité et support communautaire robuste.
              <br /><br />
              Aujourd'hui, WordPress peut être utilisé comme l'administration
              <strong> sans pour autant sacrifier l'expérience utilisateur</strong> et les
              performances ou fonctionnalités avancées grâce à son architecture
              Headless ouverte.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-googletitre text-brand-400 mb-2">
                8+
              </div>
              <p className="font-regular uppercase text-sm text-regularblue/80">Années d'expérience</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-googletitre text-brand-400 mb-2">
                30+
              </div>
              <p className="font-regular uppercase text-sm text-regularblue/80">Site & Apps créés</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-googletitre text-brand-400 mb-2">
                220+
              </div>
              <p className="font-regular uppercase text-sm text-regularblue/80">Missions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-brand-400/50 transition-all">
              <div className="text-4xl font-bold font-googletitre text-brand-400 mb-2">
                +90%
              </div>
              <p className="font-regular uppercase text-sm text-regularblue/80">Avis positifs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
*/}

export const ServicesDev = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-12 relative overflow-hidden bg-gradient-to-b"
    >

      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 w-80 h-80 bg-brand-700/20 rounded-full blur-[120px]"></div>
        <div className="container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full text-lightblue tracking-wider">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-regularblue mb-6">
            Développement web
          </h2>
          <p className="text-xl text-regularblue/70 max-w-3xl mx-auto">
              La simplicité de WordPress et la qualité du développement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 p-12">
          {/* WordPress Traditional Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Traditionnel</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-700 mb-2">Sites Web Corporate</h3>
              <p className="text-pink-700/70">Pour 90% des besoins web professionnels</p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  category: "Sites Corporate",
                  description: "Présentation d'entreprise, services, équipes",
                  examples: ["Groupes industriels", "PME et startups", "Filiales internationales"],
                },
                {
                  category: "Sites Institutionnels",
                  description: "Collectivités, associations, fondations",
                  examples: ["Mairies", "ONG", "Établissements publics"],
                },
                {
                  category: "Sites de Services",
                  description: "Cabinets, consultants, professions libérales",
                  examples: ["Cabinets d'avocats", "Consultants", "Centres médicaux"],
                },
                {
                  category: "Portails d'Information",
                  description: "Actualités, documentation, ressources",
                  examples: ["Centres de formation", "Médias locaux", "Portails RH"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white/80 border border-white rounded-xl p-4 hover:border-pink-100 transition-colors"
                >
                  <h4 className="font-semibold text-pink-700 mb-1">{project.category}</h4>
                  <p className="text-sm text-pink-700/70 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span key={i} className="text-xs border border-pink-100 text-pink-600 px-2 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/wordpress">
                <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-50 transition-colors">
                  Voir tous les détails →
                </button>
              </Link>
            </div>
          </div>

          {/* WordPress Headless Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-lightblue/20 text-regularblue px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Headless</span>
              </div>
              <h3 className="text-2xl font-bold text-regularblue mb-2">Applications Web Avancées</h3>
              <p className="text-regularblue/80">Pour les projets techniques ambitieux</p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  category: "E-commerce Avancé",
                  description: "Catalogues complexes, configurateurs produit",
                  examples: ["Configurateurs", "Filtres avancés", "Performance critique"],
                },
                {
                  category: "Portails Clients B2B",
                  description: "Dashboards, espaces de commande, suivi projets",
                  examples: ["Tableaux de bord", "Intégrations ERP", "Espaces privés"],
                },
                {
                  category: "Applications SaaS",
                  description: "Interfaces de gestion, analytics temps réel",
                  examples: ["Plateformes métier", "Analytics avancées", "Multi-tenant"],
                },
                {
                  category: "Applications Multi-Canal",
                  description: "Web + mobile + kiosques + APIs",
                  examples: ["Apps mobiles", "PWA", "Systèmes distribués"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white/80 border border-white rounded-xl p-4 hover:border-lightblue/20 transition-colors"
                >
                  <h4 className="font-semibold text-regularblue mb-1">{project.category}</h4>
                  <p className="text-sm text-regularblue/80 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span key={i} className="text-xs border border-lightblue/20 text-regularblue px-2 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/headless">
                <button className="border border-regularblue text-regularblue px-4 py-2 rounded-full hover:bg-lightblue/5 transition-colors">
                  Voir tous les détails →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default ServicesDev;
