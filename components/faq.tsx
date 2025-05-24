import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FAQ() {

    return (
        <section id="faq" className="py-24 md:py-32">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-brand-500/20 tracking-wider mb-4">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl text-regularblue font-bold mb-6">Questions fréquentes</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Vous avez des questions ? Voici les réponses aux questions les plus fréquentes que je reçois.
                    </p>
                </div>
                
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Comment se déroule une consultation vidéo ?</AccordionTrigger>
                  <AccordionContent>
                    Nos consultations se déroulent via Zoom ou Google Meet. Avant la session, nous vous envoyons un
                    questionnaire pour mieux comprendre vos besoins. Pendant la session, nous analysons votre situation
                    actuelle, identifions les axes d'amélioration et vous proposons des solutions concrètes. Après la
                    session, vous recevez un résumé des points abordés et un plan d'action.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quel pack choisir pour mon projet ?</AccordionTrigger>
                  <AccordionContent>
                    Si vous débutez ou avez besoin d'un avis ponctuel, la consultation simple est idéale. Pour un projet
                    en cours de développement ou une refonte, le pack accompagnement vous permettra de bénéficier d'un
                    suivi sur plusieurs semaines. Pour les projets complexes ou stratégiques, l'accompagnement premium
                    offre un support complet et personnalisé.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Combien de temps faut-il pour voir des résultats ?</AccordionTrigger>
                  <AccordionContent>
                    Les premiers résultats sont généralement visibles dans les 4 à 8 semaines suivant la mise en place
                    des recommandations. Cependant, cela dépend de nombreux facteurs comme votre secteur d'activité, la
                    concurrence, et la nature des changements effectués. Nous définissons ensemble des objectifs
                    réalistes et un calendrier adapté à votre situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Proposez-vous des services de développement web ?</AccordionTrigger>
                  <AccordionContent>
                    Nous nous concentrons sur le conseil et l'accompagnement stratégique. Nous ne développons pas
                    directement les sites web, mais nous pouvons vous recommander des partenaires de confiance selon vos
                    besoins spécifiques. Notre expertise vous aide à définir précisément vos besoins pour obtenir un
                    site parfaitement adapté à vos objectifs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Comment fonctionne l'audit marketing ?</AccordionTrigger>
                  <AccordionContent>
                    Notre audit marketing comprend une analyse approfondie de votre site web, de votre stratégie de
                    contenu, de votre référencement, et de votre expérience utilisateur. Nous utilisons des outils
                    professionnels pour évaluer les performances techniques et marketing de votre site. Vous recevez
                    ensuite un rapport détaillé avec des recommandations concrètes et un plan d'action prioritaire.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            </div>
        </section>
    );
}