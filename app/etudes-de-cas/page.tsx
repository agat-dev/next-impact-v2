import CaseStudiesFilter from "@/components/case-studies-filters" 

export const metadata = {
  title: "Études de cas - Next Impact Digital",
  description: "Découvrez nos réalisations de sites web pour PME, associations et indépendants",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-12">
        <CaseStudiesFilter />
      </div>
    </main>
  )
}
