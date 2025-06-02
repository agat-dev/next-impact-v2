import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, Users, Shield, Zap, ArrowLeft } from "lucide-react"

export default function SitesCorporate() {
  return (
    <>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[0] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-5 blur-3xl"></div>
          <div className="absolute top-[400px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-5 blur-3xl"></div>
        </div>
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="absolute inset-0 -z-10">
          <div className="absolute top-[900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[1200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="outline" className="mb-4 border-green-200 text-green-700">
          Solution recommandée pour 90% des projets
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Sites Corporate <span className="text-green-600">WordPress</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          L'efficacité d'une solution intégrée pour vos besoins web classiques. WordPress traditionnel unit la gestion
          de contenu et l'affichage dans une solution complète.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Analyser mon besoin
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Voir nos références
          </Button>
        </div>
      </section>

      {/* When to Choose */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quand est-ce la solution optimale ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WordPress traditionnel excelle pour les projets web classiques nécessitant efficacité et simplicité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="h-8 w-8 text-green-600" />,
              title: "Équipes non-techniques",
              description: "Vos équipes doivent gérer le contenu facilement sans formation complexe",
            },
            {
              icon: <Clock className="h-8 w-8 text-green-600" />,
              title: "Mise en ligne rapide",
              description: "Vous souhaitez une mise en ligne rapide (4-8 semaines)",
            },
            {
              icon: <Shield className="h-8 w-8 text-green-600" />,
              title: "Budget maîtrisé",
              description: "Votre budget est maîtrisé avec un ROI rapide attendu",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">{item.icon}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Applications concrètes</h2>
            <p className="text-lg text-muted-foreground">Des solutions éprouvées pour tous les secteurs d'activité</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sites corporate",
                description: "Présentation d'entreprise, services, équipes",
                examples: ["Groupes industriels", "PME", "Startups"],
              },
              {
                title: "Sites institutionnels",
                description: "Collectivités, associations, fondations",
                examples: ["Mairies", "ONG", "Fondations"],
              },
              {
                title: "Sites de services",
                description: "Cabinets, consultants, professions libérales",
                examples: ["Avocats", "Consultants", "Médecins"],
              },
              {
                title: "Portails d'information",
                description: "Actualités, documentation, ressources",
                examples: ["Médias", "Écoles", "Centres de formation"],
              },
            ].map((app, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {app.examples.map((example, i) => (
                      <div key={i} className="text-sm text-muted-foreground">
                        • {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      
      <div className="absolute inset-0 -z-10">
          <div className="absolute top-[1900px] left-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-20 blur-3xl"></div>
          <div className="absolute top-[2200px] right-0 h-[400px] w-[50vw] rounded-full bg-gradient-to-r from-blue-200 to-pink-200 opacity-10 blur-3xl"></div>
        </div>s
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos services détaillés</h2>
          <p className="text-lg text-muted-foreground">Une approche complète pour votre réussite web</p>
        </div>

        <div className="space-y-8">
          {[
            {
              icon: <Zap className="h-6 w-6 text-green-600" />,
              title: "🎨 Design Sur-Mesure Adapté à Vos Contraintes",
              problem: "Avoir un site unique sans les coûts d'un développement from scratch",
              features: [
                "Thème personnalisé respectant votre charte graphique",
                "Responsive natif avec adaptation automatique",
                "Composants modulaires réutilisables",
                "Templates spécialisés optimisés",
                "Évolutivité visuelle facilitée",
              ],
            },
            {
              icon: <Users className="h-6 w-6 text-green-600" />,
              title: "📋 Organisation des Contenus Dédiée à Votre Métier",
              problem: "Structurer l'information pour vos utilisateurs et les moteurs de recherche",
              features: [
                "Architecture de l'information pensée UX et SEO",
                "Types de contenus personnalisés",
                "Navigation intuitive avec menus optimisés",
                "Hiérarchisation selon vos priorités business",
                "Parcours utilisateur de la découverte à la conversion",
              ],
            },
            {
              icon: <Shield className="h-6 w-6 text-green-600" />,
              title: "⚙️ Fonctionnalités Adaptées Sans Surdéveloppement",
              problem: "Obtenir les fonctionnalités nécessaires sans complexité inutile",
              features: [
                "Formulaires intelligents avec notifications",
                "Gestion multimédia complète",
                "Blog/actualités avec système de publication",
                "Pages dynamiques (équipe, services)",
                "Intégrations légères (newsletters, analytics, chat)",
              ],
            },
          ].map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Le problème résolu :</strong> {service.problem}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investissement transparent</h2>
            <p className="text-lg text-muted-foreground">Budgétisation claire sans surprise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Site Vitrine</CardTitle>
                <CardDescription>Solution complète pour PME</CardDescription>
                <div className="text-3xl font-bold text-green-600">8k€ - 15k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Design sur-mesure",
                    "5-10 pages optimisées",
                    "Formulaire de contact",
                    "SEO de base",
                    "Formation incluse",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Demander un devis</Button>
              </CardContent>
            </Card>

            <Card className="relative border-green-200 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-700">Populaire</Badge>
                <CardTitle className="text-xl">Site Corporate</CardTitle>
                <CardDescription>Solution avancée pour entreprises</CardDescription>
                <div className="text-3xl font-bold text-green-600">15k€ - 25k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Design premium personnalisé",
                    "15-30 pages structurées",
                    "Blog et actualités",
                    "SEO avancé",
                    "Intégrations tierces",
                    "Formation équipe complète",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Demander un devis</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Portail Institutionnel</CardTitle>
                <CardDescription>Solution complète multi-niveaux</CardDescription>
                <div className="text-3xl font-bold text-green-600">20k€ - 35k€</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Architecture complexe",
                    "Multi-langues",
                    "Gestion utilisateurs",
                    "Modules spécialisés",
                    "Intégrations avancées",
                    "Support 12 mois",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Demander un devis</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>ROI typique :</strong> 6-18 mois selon le secteur •<strong> Coûts récurrents :</strong>{" "}
              300-800€/an hébergement + 100-300€/mois maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Méthode éprouvée en 5 étapes</h2>
          <p className="text-lg text-muted-foreground">Un processus rodé pour votre réussite</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              step: "1",
              title: "Analyse & Cadrage",
              duration: "1 semaine",
              description: "Audit de l'existant et définition des besoins",
            },
            {
              step: "2",
              title: "Conception & Validation",
              duration: "2 semaines",
              description: "Wireframes, maquettes et validation",
            },
            {
              step: "3",
              title: "Développement",
              duration: "3-4 semaines",
              description: "Développement du thème et intégration",
            },
            {
              step: "4",
              title: "Optimisation & Tests",
              duration: "1 semaine",
              description: "Performance, SEO et formation équipes",
            },
            { step: "5", title: "Mise en Ligne", duration: "1 semaine", description: "Migration, tests et support" },
          ].map((phase, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  {phase.step}
                </div>
                <CardTitle className="text-lg">{phase.title}</CardTitle>
                <CardDescription className="text-green-600 font-medium">{phase.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Évaluons ensemble la pertinence de WordPress traditionnel pour votre projet
          </p>

          <div className="bg-white/10 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Audit gratuit de 30 minutes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Analyse de vos besoins actuels
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Évaluation WordPress vs alternatives
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Estimation budgétaire personnalisée
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Recommandations d'architecture
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Planifier l'audit fonctionnel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Télécharger nos références
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la comparaison
          </Link>
          <Link
            href="/services/applications-headless"
            className="inline-flex items-center text-muted-foreground hover:text-foreground"
          >
            Découvrir les Applications Headless
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
