import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Card className="bg-gradient-to-r from-[#F29F05] to-[#FF6B6B] border-0 p-12 text-center">
        <h2 className="text-3xl font-bold text-[#020F59] mb-4 text-balance">Prêt à passer à l'étape suivante ?</h2>
        <p className="text-[#020F59]/80 text-lg mb-8 max-w-2xl mx-auto">
          Discutons de votre projet et trouvons ensemble le pack qui correspond parfaitement à vos besoins
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#020F59] hover:bg-[#021373] text-white font-semibold h-14 px-10 text-lg">
            Demander un devis personnalisé
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#020F59] text-[#020F59] hover:bg-[#020F59] hover:text-white h-14 px-10 text-lg bg-transparent font-semibold"
          >
            Planifier un appel découverte
          </Button>
        </div>
      </Card>
    </div>
  )
}
