import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-MEDIUM tracking-tighter text-regularblue md:text-4xl/tight">
                  Prêt à transformer votre présence en ligne ?
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-regularblue/70">
                  Réservez une consultation gratuite de 15 minutes pour discuter de votre projet et découvrir comment
                  nous pouvons vous aider.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="gap-1 text-lg font-medium rounded-full text-white bg-pink-700 hover:bg-pink-700/90 hover:text-white"
                  asChild
                >
                  <a href="tel:0673981638">
                    Appeler maintenant <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-1 text-lg font-medium rounded-full border-pink-600 text-pink-600 hover:bg-transparent hover:text-pink-600"
                  asChild
                >
                  <a href="mailto:agathe@next-impact.digital">
                    Envoyer un e-mail <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              {/*}
              <p className="text-sm">Ou inscrivez-vous à notre newsletter pour recevoir nos conseils et astuces</p>
              <div className="w-full max-w-sm">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="max-w-lg flex-1 border-regularblue/20 focus:border-regularblue/80"
                  />
                  <Button type="submit" className="gap-1 rounded-full text-regularblue bg-extralightblue/40 hover:bg-extralightblue/30">
                    S'inscrire
                  </Button>
                </div>
              </div>
              */}
            </div>
          </div>
        </section>
        );
};
