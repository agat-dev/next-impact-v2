import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-googletitre font-medium tracking-tight text-white sm:text-6xl md:text-7xl mb-8 text-balance">
            Des sites web performants, <span className="text-coral">adaptés à vos ambitions</span>
          </h1>
          <p className="text-xl text-extralightblue mb-10 text-pretty max-w-3xl mx-auto">
            Du site vitrine administrable à l'application web haute performance, nous choisissons l'architecture qui sert vos objectifs de croissance.
          </p>
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-darkblue font-medium text-lg h-14 px-10 rounded-full shadow-lg transition-all duration-300"
          >
            Demander un audit gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
