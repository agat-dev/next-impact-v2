import PricingCalculator from "@/components/pricing-calculator/pricing-calculator"

export default function Home() {
  return (
    <main>
       <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 py-8">
            <h1 className="font-medium text-center">
              Simulateur de Tarif de site web 
            </h1>            
            <p className="text-regularblue/70 text-center max-w-3xl mx-auto">
              Estimez le coût de votre projet web selon les prestataires et fonctionnalités souhaitées.
            </p>
          </div>
      <PricingCalculator />
      </div>
    </section> 
    </main>
  )
}
