import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter text-regularblue md:text-4xl/tight">
                  Prêt à transformer votre présence en ligne ?
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-regularblue/70">
                  Réservez une consultation gratuite de 15 minutes pour discuter de votre projet et découvrir comment
                  nous pouvons vous aider.
                </p>
              </div>
              <div className="flex flex-col gap-8 min-[400px]:flex-row">
                <Button size="lg" className="gap-1 rounded-full text-white bg-regularblue/90 hover:bg-regularblue/80">
                  Réserver ma consultation gratuite <ArrowRight className="h-4 w-4" />
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
