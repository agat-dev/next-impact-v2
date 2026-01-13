import { Card } from "@/components/ui/card"

const CustomIcon = ({ src, className = "" }: { src: string; className?: string }) => (
  <img src={src || "/placeholder.svg"} alt="" className={className} style={{ width: "1.5rem", height: "1.5rem" }} />
)

export function AddonsSection() {
  const addons = [
    {
      icon: () => <CustomIcon src="/icons/database-icon.svg" />,
      title: "Migration de données",
      desc: "Récupération et nettoyage de vos anciens contenus",
    },
    {
      icon: () => <CustomIcon src="/icons/cloud-icon.svg" />,
      title: "Mode Offline (PWA)",
      desc: "Consultation du site sans connexion internet",
    },
    {
      icon: () => <CustomIcon src="/icons/settings-icon.svg" />,
      title: "Dark Mode",
      desc: "Interface adaptative jour/nuit",
    },
    {
      icon: () => <CustomIcon src="/icons/shield-icon.svg" />,
      title: "Maintenance Sérénité",
      desc: "Mises à jour mensuelles, monitoring 24/7 et sauvegardes",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Options "À la Carte"</h2>
        <p className="text-[#D0DCF2] text-lg">Personnalisez votre pack avec ces options supplémentaires</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {addons.map((addon, idx) => (
          <Card
            key={idx}
            className="p-6 bg-white/5 backdrop-blur-sm border-[#719ED9]/30 hover:bg-white/10 hover:border-[#F29F05]/50 transition-all cursor-pointer group"
            style={{
              animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s backwards`,
            }}
          >
            <div className="rounded-lg bg-[#F29F05]/10 p-3 w-fit mb-4 group-hover:bg-[#F29F05]/20 transition-colors">
              <div className="h-6 w-6 flex items-center justify-center">
                <addon.icon />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{addon.title}</h3>
            <p className="text-[#D0DCF2] text-sm">{addon.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
