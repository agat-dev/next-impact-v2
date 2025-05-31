import Link from "next/link"

export default function ServicesComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">
          Expertise WordPress
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Développement WordPress :<br />
          <span className="text-blue-600">Traditionnel ou Headless ?</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Nous vous accompagnons dans le choix de l'architecture optimale pour vos besoins. Deux approches techniques,
          une expertise commune.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Analyser mon projet
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Télécharger le guide
          </button>
        </div>
      </section>

      {/* Types of Projects Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quel type de site pour votre projet ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identifiez immédiatement la solution technique adaptée selon le type de site que vous souhaitez développer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WordPress Traditional Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Traditionnel</span>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Sites Web Classiques</h3>
              <p className="text-gray-600">Pour 90% des besoins web professionnels</p>
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
                  className="border border-green-200 rounded-lg p-4 hover:border-green-300 transition-colors"
                >
                  <h4 className="font-semibold text-green-700 mb-1">{project.category}</h4>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span key={i} className="text-xs border border-green-200 text-green-600 px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/sites-corporate">
                <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition-colors">
                  Voir tous les détails →
                </button>
              </Link>
            </div>
          </div>

          {/* WordPress Headless Projects */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                <span className="font-semibold">WordPress Headless</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Applications Web Avancées</h3>
              <p className="text-gray-600">Pour les projets techniques ambitieux</p>
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
                  className="border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <h4 className="font-semibold text-blue-700 mb-1">{project.category}</h4>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.examples.map((example, i) => (
                      <span key={i} className="text-xs border border-blue-200 text-blue-600 px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/services/applications-headless">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
                  Voir tous les détails →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional WordPress Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="border-t-4 border-green-500 -mt-6 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                  Recommandé pour 90% des projets
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Sites Corporate WordPress</h3>
              <p className="text-gray-600 mb-6">La solution éprouvée pour votre présence web professionnelle</p>

              <div className="space-y-4">
                <div className="text-sm text-gray-600">⏱️ Mise en ligne : 4-8 semaines</div>
                <div className="text-sm text-gray-600">👥 Gestion autonome par vos équipes</div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Idéal pour :</h4>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Sites vitrine et institutionnels",
                      "Équipes non-techniques",
                      "Budget maîtrisé (8-25k€)",
                      "Fonctionnalités web classiques",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">8k€ - 25k€</span>
                    <span className="border border-gray-300 px-2 py-1 rounded text-sm">ROI : 6-18 mois</span>
                  </div>
                  <Link href="/services/sites-corporate">
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                      En savoir plus →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Headless WordPress Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="border-t-4 border-blue-500 -mt-6 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Projets ambitieux</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Applications Web Headless</h3>
              <p className="text-gray-600 mb-6">L'architecture moderne pour les projets techniques avancés</p>

              <div className="space-y-4">
                <div className="text-sm text-gray-600">⏱️ Développement : 8-16 semaines</div>
                <div className="text-sm text-gray-600">⚡ Performance maximale (&lt; 2s)</div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Idéal pour :</h4>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Applications métier complexes",
                      "Performance critique",
                      "Multi-canal (web + mobile)",
                      "Intégrations système avancées",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">20k€ - 80k€</span>
                    <span className="border border-gray-300 px-2 py-1 rounded text-sm">ROI : 12-36 mois</span>
                  </div>
                  <Link href="/services/applications-headless">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      En savoir plus →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">🤔 Pas sûr de votre choix ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nous analysons votre projet gratuitement pour vous orienter vers la solution technique la plus adaptée.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border">
            <h3 className="text-xl font-semibold mb-4">Audit gratuit de 30 minutes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>✓ Analyse de faisabilité technique</div>
              <div>✓ Recommandation d'architecture</div>
              <div>✓ Estimation budgétaire personnalisée</div>
              <div>✓ Plan de réalisation détaillé</div>
            </div>
          </div>

          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Planifier mon audit gratuit →
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Télécharger le guide de choix
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
