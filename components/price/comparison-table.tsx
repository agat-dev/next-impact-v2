import { Card } from "@/components/ui/card"
import { CheckCircle2, X } from "lucide-react"

export function ComparisonTable() {
  const comparison = [
    { feature: "Vitesse < 1s", pack1: true, pack2: true, pack3: true },
    { feature: "Sécurité accrue", pack1: true, pack2: true, pack3: true },
    { feature: "Autonomie Marketing", pack1: "Basique", pack2: "Avancée (Blocks)", pack3: "Totale" },
    { feature: "Recherche Instantanée", pack1: false, pack2: true, pack3: true },
    { feature: "Multi-sources API", pack1: false, pack2: false, pack3: true },
    { feature: "Support Prioritaire", pack1: false, pack2: "3 mois", pack3: "12 mois" },
  ]

  return (
    <section className="bg-gradient-to-br from-[#D0DCF2] to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#020F59] text-center mb-10">Comparatif des Packs</h2>

        <Card className="overflow-hidden bg-white border-[#719ED9]/30 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#719ED9]/30 bg-[#D0DCF2]/30">
                  <th className="text-left p-6 text-[#020F59] font-semibold">Fonctionnalité</th>
                  <th className="text-center p-6 text-[#719ED9] font-semibold">Performance Boost</th>
                  <th className="text-center p-6 text-[#1F54BF] font-semibold">Business Évolutif</th>
                  <th className="text-center p-6 text-[#F29F05] font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#719ED9]/20 hover:bg-[#D0DCF2]/20 transition-colors">
                    <td className="p-6 text-[#021373]">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.pack1 === "boolean" ? (
                        row.pack1 ? (
                          <CheckCircle2 className="h-5 w-5 text-[#719ED9] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-[#719ED9]/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#021373]">{row.pack1}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.pack2 === "boolean" ? (
                        row.pack2 ? (
                          <CheckCircle2 className="h-5 w-5 text-[#1F54BF] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-[#1F54BF]/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#021373] font-semibold">{row.pack2}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.pack3 === "boolean" ? (
                        row.pack3 ? (
                          <CheckCircle2 className="h-5 w-5 text-[#F29F05] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-[#F29F05]/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#021373] font-semibold">{row.pack3}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
