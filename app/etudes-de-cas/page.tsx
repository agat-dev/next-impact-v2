import Realisations from "@/components/case-studies/realisations" 

export const metadata = {
  title: "Études de cas - Next Impact Digital",
  description: "Découvrez nos réalisations de sites web pour PME, associations et indépendants",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
              {/* Hero Section */}
        <section className="container mx-auto px-4 md:py-16 pt-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-12 mb-6">
            Etudes de cas 
          </h1>
          <p className="text-xl text-regularblue/80 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des sites web performants et adaptés à leurs besoins.
          </p>
        </section>
      <div className="container mx-auto pb-12">
        <Realisations count={100} />
      </div>
    </main>
  )
}
