import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
} from "lucide-react";
import PageLayout from "@/components/page-layout";
import { CMSQuizCard } from "@/components/tools";
import { PacksGrid } from "@/components/services/packs-grid";
import { ComparisonTable } from "@/components/services/comparison-table";
import { AddonsSection } from "@/components/services/addons-section";
import Process from "@/components/process";
import { CTASection } from "@/components/cta-section";
import { DecisionHelper } from "@/components/decision-helper";
import { FeaturesTabs } from "@/components/services/features";
import { Metadata } from "next";
import { CaseStudiesSection } from "@/components/services/case-studies-section";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Service de création de site web WordPress Headless Next.js | Next Impact",
    description:
      "Service de création de site web WordPress Headless Next.js pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigeances de qualité ou appplications web.",
    openGraph: {
      title:
        "Service de création de site web WordPress Headless Next.js | Next Impact",
      url: "https://next-impact.digital/services/headless",
      siteName: "Next Impact - Développeuse WordPress Freelance",
      description:
        "Service de création de site web WordPress pour les entreprises. Solutions adaptées aux sites à fonctionnalités avancées, exigeances de qualité ou appplications web.",
      type: "website",
      images: [
        {
          url: "/img/avatar.png",
          width: 1200,
          height: 630,
          alt: "Next Impact - Développeuse WordPress Freelance",
        },
      ],
    },
  };
}

export default function ApplicationsHeadless() {
  const features = [
    {
      title: "WordPress",
      description:
        "Le moteur de site le plus utilisé au monde. Idéal pour les blogs, sites vitrines et petits e-commerces.",
      detailedDescription:
        "Pour qui ? PME, indépendants, et entreprises souhaitant gérer leur contenu quotidiennement.",
      benefits: [
        "Interface familière : Vous modifiez vos textes et images sans nous appeler.",
        "Évolutif : Des milliers de fonctionnalités prêtes à l'emploi.",
        "Budget maîtrisé : Développement plus rapide.",
      ],
      color: "transparent",
    },
    {
      title: "Design et Expérience Utilisateur Modernes",
      description: "Interfaces avancées avec animations ",
      detailedDescription:
        "Création d'interfaces utilisateur modernes et interactives pour une expérience optimale.",
      benefits: [
        "Animations fluides",
        "Composants réutilisables",
        "Accessibilité renforcée",
      ],
      color: "transparent",
    },
    {
      title: "Administration WordPress personnalisée",
      description: "Interface d'administration sur mesure pour les équipes",
      detailedDescription:
        "Personnalisation de l'interface d'administration WordPress pour une gestion simplifiée.",
      benefits: [
        "Champs personnalisés",
        "Menus simplifiés",
        "Rôles et permissions avancés",
      ],
      color: "transparent",
    },
    {
      title: "Performances Accrues",
      description: "Chargement instantané, cache intelligent, CDN global",
      detailedDescription:
        "Optimisation des performances pour un chargement ultra-rapide et une expérience utilisateur fluide.",
      benefits: [
        "Génération statique",
        "Lazy loading",
        "Monitoring temps réel",
      ],
      color: "transparent",
    },
  ];

  return (
    <main>
      <PageLayout 
        titre="Services WordPress Headless"
        sousTitre="L'architecture qui libère votre contenu de ses contraintes d'affichage
          en séparant la gestion de contenu de son affichage pour une
          flexibilité maximale"
      >
      <div className="mt-8 mb-16">
      <PacksGrid />
      <ComparisonTable />
      <AddonsSection />

      {/* Technical Services */}
      <section className="pt-16" id="services">
        <FeaturesTabs features={features} />
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />


      {/* Process */}
      <Process />

      {/* Decision Helper */}
      <DecisionHelper />
      <CMSQuizCard />

      {/* CTA Section */}
      <CTASection />

      </div>

    </PageLayout>
    </main>
  );
}
