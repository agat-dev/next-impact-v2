import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from "lucide-react"

export default function SolutionsCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="animate-fadeInUp">
          <Rocket className="h-16 w-16 text-coral mx-auto mb-6" />
          <h2 className="text-5xl font-googletitre font-medium text-white mb-6 text-balance">
            Un projet spécifique en tête ?
          </h2>
          <p className="text-lg text-extralightblue mb-10 text-pretty max-w-2xl mx-auto">
            Discutons de votre architecture idéale et trouvons ensemble la solution qui correspond à vos objectifs de croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-darkblue font-medium h-14 px-10 text-lg rounded-full shadow-lg"
            >
              Discutons de votre architecture
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg bg-transparent rounded-full"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
