export interface Option {
    label: string
    value: string
  }
  
  export interface Question {
    id: string
    text: string
    options: Option[]
  }
  
  export const questions: Question[] = [
    {
      id: "siteType",
      text: "Quel est le type principal de votre site web ?",
      options: [
        { label: "Site vitrine/institutionnel", value: "Site vitrine/institutionnel" },
        { label: "Site e-commerce", value: "Site e-commerce" },
        { label: "Blog", value: "Blog" },
        { label: "Portail d'information", value: "Portail d'information" },
        { label: "Site communautaire/réseau social", value: "Site communautaire/réseau social" },
        { label: "Application web", value: "Application web" },
        { label: "Site éducatif/e-learning", value: "Site éducatif/e-learning" },
        { label: "Portfolio/galerie", value: "Portfolio/galerie" },
      ],
    },
    {
      id: "pageCount",
      text: "Combien de pages prévoyez-vous pour votre site ?",
      options: [
        { label: "Moins de 10 pages", value: "Moins de 10 pages" },
        { label: "Entre 10 et 50 pages", value: "Entre 10 et 50 pages" },
        { label: "Plus de 50 pages", value: "Plus de 50 pages" },
        {
          label: "Site à forte volumétrie (centaines ou milliers de pages)",
          value: "Site à forte volumétrie (centaines ou milliers de pages)",
        },
      ],
    },
    {
      id: "ecommerce",
      text: "Le site doit-il permettre la vente de produits/services en ligne ?",
      options: [
        { label: "Oui, c'est l'objectif principal", value: "Oui, c'est l'objectif principal" },
        { label: "Oui, mais de façon secondaire", value: "Oui, mais de façon secondaire" },
        { label: "Non", value: "Non" },
      ],
    },
    {
      id: "booking",
      text: "Votre site nécessite-t-il un système de réservation ou prise de rendez-vous ?",
      options: [
        { label: "Oui", value: "Oui" },
        { label: "Non", value: "Non" },
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
      id: "updateFrequency",
      text: "À quelle fréquence le contenu du site sera-t-il mis à jour ?",
      options: [
        { label: "Quotidiennement", value: "Quotidiennement" },
        { label: "Hebdomadairement", value: "Hebdomadairement" },
        { label: "Mensuellement", value: "Mensuellement" },
        { label: "Rarement", value: "Rarement" },
      ],
    },
    {
      id: "multilingual",
      text: "Le site doit-il gérer plusieurs langues ?",
      options: [
        { label: "Oui", value: "Oui" },
        { label: "Non", value: "Non" },
      ],
    },
    {
      id: "userManagement",
      text: "Le site doit-il avoir un système d'inscription et de gestion des utilisateurs ?",
      options: [
        { label: "Oui, avec différents niveaux d'accès", value: "Oui, avec différents niveaux d'accès" },
        {
          label: "Oui, mais simple (connexion/inscription uniquement)",
          value: "Oui, mais simple (connexion/inscription uniquement)",
        },
        { label: "Non", value: "Non" },
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
      id: "integrations",
      text: "Le site doit-il s'intégrer avec d'autres logiciels ou APIs ?",
      options: [
        { label: "Oui, plusieurs intégrations complexes", value: "Oui, plusieurs intégrations complexes" },
        { label: "Oui, quelques intégrations simples", value: "Oui, quelques intégrations simples" },
        { label: "Non", value: "Non" },
      ],
    },
    {
      id: "seo",
      text: "Avez-vous besoin de fonctionnalités avancées de référencement (SEO) ?",
      options: [
        { label: "Oui, c'est une priorité", value: "Oui, c'est une priorité" },
        { label: "Oui, mais basiques", value: "Oui, mais basiques" },
        { label: "Non, ce n'est pas primordial", value: "Non, ce n'est pas primordial" },
      ],
    },
    {
      id: "marketing",
      text: "Le site nécessite-t-il des fonctionnalités de marketing digital intégrées ?",
      options: [
        {
          label: "Oui (newsletter, formulaires, analytics avancées, etc.)",
          value: "Oui (newsletter, formulaires, analytics avancées, etc.)",
        },
        { label: "Non, ou uniquement les basiques", value: "Non, ou uniquement les basiques" },
      ],
    },
    {
      id: "traffic",
      text: "Quel niveau de trafic attendez-vous ?",
      options: [
        { label: "Faible (moins de 1 000 visiteurs/mois)", value: "Faible (moins de 1 000 visiteurs/mois)" },
        { label: "Moyen (1 000 à 10 000 visiteurs/mois)", value: "Moyen (1 000 à 10 000 visiteurs/mois)" },
        { label: "Élevé (plus de 10 000 visiteurs/mois)", value: "Élevé (plus de 10 000 visiteurs/mois)" },
      ],
    },
    {
      id: "loadingTime",
      text: "Quelles sont vos exigences en matière de temps de chargement ?",
      options: [
        { label: "Standard", value: "Standard" },
        { label: "Optimisé (site très rapide)", value: "Optimisé (site très rapide)" },
        {
          label: "Ultra-performant (temps de chargement minimal)",
          value: "Ultra-performant (temps de chargement minimal)",
        },
      ],
    },
    {
      id: "security",
      text: "Quelles sont vos exigences en matière de sécurité ?",
      options: [
        { label: "Standard", value: "Standard" },
        {
          label: "Élevées (données sensibles, transactions, etc.)",
          value: "Élevées (données sensibles, transactions, etc.)",
        },
        {
          label: "Conformité spécifique requise (RGPD, HIPAA, etc.)",
          value: "Conformité spécifique requise (RGPD, HIPAA, etc.)",
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
      id: "monthlyBudget",
      text: "Quel est votre budget mensuel pour l'hébergement et la maintenance ?",
      options: [
        { label: "Moins de 50 €/mois", value: "Moins de 50 €/mois" },
        { label: "Entre 50 et 200 €/mois", value: "Entre 50 et 200 €/mois" },
        { label: "Plus de 200 €/mois", value: "Plus de 200 €/mois" },
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
      id: "technicalSkills",
      text: "Disposez-vous de compétences techniques en interne ?",
      options: [
        { label: "Oui, des développeurs web expérimentés", value: "Oui, des développeurs web expérimentés" },
        { label: "Oui, des connaissances basiques", value: "Oui, des connaissances basiques" },
        { label: "Non, aucune compétence technique", value: "Non, aucune compétence technique" },
      ],
    },
    {
      id: "evolution",
      text: "Prévoyez-vous des évolutions majeures du site à moyen terme ?",
      options: [
        { label: "Oui, des fonctionnalités complexes à ajouter", value: "Oui, des fonctionnalités complexes à ajouter" },
        {
          label: "Oui, mais uniquement du contenu ou des fonctionnalités simples",
          value: "Oui, mais uniquement du contenu ou des fonctionnalités simples",
        },
        { label: "Non, le site restera relativement stable", value: "Non, le site restera relativement stable" },
      ],
    },
    {
      id: "maintenance",
      text: "Souhaitez-vous gérer l'hébergement et la maintenance vous-même ?",
      options: [
        { label: "Oui, totalement", value: "Oui, totalement" },
        { label: "Partiellement", value: "Partiellement" },
        {
          label: "Non, je préfère une solution clé en main ou un prestataire",
          value: "Non, je préfère une solution clé en main ou un prestataire",
        },
      ],
    },
    {
      id: "transferability",
      text: "Le site doit-il être facilement transférable d'un hébergeur à un autre ?",
      options: [
        { label: "Oui, c'est important", value: "Oui, c'est important" },
        { label: "Non, ce n'est pas une priorité", value: "Non, ce n'est pas une priorité" },
      ],
    },
    {
      id: "audience",
      text: "Quelle est la cible principale de votre site ?",
      options: [
        { label: "Grand public", value: "Grand public" },
        { label: "Professionnels/B2B", value: "Professionnels/B2B" },
        { label: "Niche spécifique", value: "Niche spécifique" },
        { label: "Mixte", value: "Mixte" },
      ],
    },
    {
      id: "devices",
      text: "Le site doit-il être optimisé pour quels appareils en priorité ?",
      options: [
        { label: "Mobile en priorité", value: "Mobile en priorité" },
        { label: "Desktop en priorité", value: "Desktop en priorité" },
        { label: "Tous supports de façon égale", value: "Tous supports de façon égale" },
      ],
    },
    {
      id: "socialFeatures",
      text: "Avez-vous besoin de fonctionnalités sociales avancées ?",
      options: [
        {
          label: "Oui (commentaires, partage, évaluations, etc.)",
          value: "Oui (commentaires, partage, évaluations, etc.)",
        },
        { label: "Non ou basiques uniquement", value: "Non ou basiques uniquement" },
      ],
    },
  ]
  
  