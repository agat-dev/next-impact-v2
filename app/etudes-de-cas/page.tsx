import Realisations from "@/components/case-studies/realisations" 

export const metadata = {
  title: "Études de cas - Next Impact Digital",
  description: "Découvrez nos réalisations de sites web pour PME, associations et indépendants",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-12">
        <Realisations count={100} />
      </div>
    </main>
  )
}
