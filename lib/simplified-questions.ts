import type { Question } from "./questions"

export const simplifiedQuestions: Question[] = [
  {
    id: "siteType",
    text: "Quel est le type principal de votre site web ?",
    options: [
      { label: "Site vitrine/institutionnel", value: "Site vitrine/institutionnel" },
      { label: "Site e-commerce", value: "Site e-commerce" },
      { label: "Blog/portail d'information", value: "Blog/portail d'information" },
      { label: "Application web", value: "Application web" },
      { label: "Site communautaire/réseau social", value: "Site communautaire/réseau social" },
      { label: "Site éducatif/e-learning", value: "Site éducatif/e-learning" },
      { label: "Portfolio/galerie", value: "Portfolio/galerie" },
    ],
  },
  {
    id: "contentManager",
    text: "Qui sera responsable de la mise à jour du contenu ?",
    options: [
      { label: "Des utilisateurs sans compétences techniques", value: "Des utilisateurs sans compétences techniques" },
      {
        label: "Des personnes avec des connaissances techniques basiques",
        value: "Des personnes avec des connaissances techniques basiques",
      },
      { label: "Des développeurs web", value: "Des développeurs web" },
    ],
  },
  {
    id: "customization",
    text: "Quel niveau de personnalisation graphique et fonctionnelle recherchez-vous ?",
    options: [
      {
        label: "Basique (thème existant avec personnalisation mineure)",
        value: "Basique (thème existant avec personnalisation mineure)",
      },
      {
        label: "Modéré (thème existant avec personnalisation importante)",
        value: "Modéré (thème existant avec personnalisation importante)",
      },
      {
        label: "Élevé (design sur mesure, fonctionnalités spécifiques)",
        value: "Élevé (design sur mesure, fonctionnalités spécifiques)",
      },
    ],
  },
  {
    id: "budget",
    text: "Quel est votre budget pour la création du site web ?",
    options: [
      { label: "Moins de 1 000 €", value: "Moins de 1 000 €" },
      { label: "Entre 1 000 et 5 000 €", value: "Entre 1 000 et 5 000 €" },
      { label: "Entre 5 000 et 15 000 €", value: "Entre 5 000 et 15 000 €" },
      { label: "Plus de 15 000 €", value: "Plus de 15 000 €" },
    ],
  },
  {
    id: "deadline",
    text: "Quel est votre délai pour le lancement du site ?",
    options: [
      { label: "Moins d'un mois", value: "Moins d'un mois" },
      { label: "1 à 3 mois", value: "1 à 3 mois" },
      { label: "Plus de 3 mois", value: "Plus de 3 mois" },
    ],
  },
  {
    id: "specificFeatures",
    text: "Quelles fonctionnalités spécifiques recherchez-vous ? (Sélectionnez toutes celles qui s'appliquent)",
    options: [
      { label: "E-commerce (vente de produits/services)", value: "E-commerce" },
      { label: "Gestion multilingue", value: "Multilingual" },
      { label: "Réservation/prise de rendez-vous", value: "Booking" },
      { label: "Intégration avec d'autres systèmes (CRM, ERP, etc.)", value: "Integration" },
      { label: "Authentification et gestion des utilisateurs", value: "UserManagement" },
      { label: "Marketing digital avancé (automation, personnalisation, etc.)", value: "Marketing" },
      { label: "Aucune fonctionnalité spécifique", value: "None" },
    ],
  },
  {
    id: "performanceSecurity",
    text: "Quelles sont vos attentes en termes de performance et de sécurité ?",
    options: [
      { label: "Standard (site de base)", value: "Standard" },
      { label: "Élevées (trafic important, données sensibles)", value: "Élevées" },
      { label: "Très élevées (conformité réglementaire spécifique, haute disponibilité)", value: "Très élevées" },
    ],
  },
]

