import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 opacity-20">
        <img src="/backgrounds/chipset-minimal.svg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-[#F29F05]/10 text-[#F29F05] border-[#F29F05]/20 hover:bg-[#F29F05]/20 text-base px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Nos Packs Solutions WordPress Headless
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
            Packagés pour votre <span className="text-[#F29F05]">succès</span>
          </h1>

          <p className="text-lg text-[#D0DCF2] md:text-xl max-w-3xl mx-auto text-pretty">
            De la migration simple à l'accompagnement premium, choisissez le pack qui correspond à vos ambitions
          </p>
        </div>
      </div>
    </section>
  )
}
