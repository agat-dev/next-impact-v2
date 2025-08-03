import Link from "next/link"
import { ServicesDev } from "@/components/services-dev"

export default function ServicesComparison() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Développement WordPress :<br />
          <span className="text-blue-600">Traditionnel ou Headless ?</span>
        </h1>
        <p className="text-xl text-mediumblue max-w-3xl mx-auto mb-8">
          Nous vous accompagnons dans le choix de l'architecture optimale pour vos besoins. Deux approches techniques,
          une expertise commune.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Analyser mon projet
          </button>
          <button className="border border-gray-300 text-mediumblue px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Télécharger le guide
          </button>
        </div>
      </section>

      {/* Types of Projects Section */}
        <ServicesDev />

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
