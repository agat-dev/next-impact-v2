import PricingCalculator from "@/components/pricing-calculator/pricing-calculator"

export default function Home() {
  return (
    <main>
       <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
        <div className="flex justify-center space-y-4 py-8">
            <h1 className="font-medium">
              Simulateur de Tarif de site web 
            </h1>
          </div>
      <PricingCalculator />
      </div>
    </section> 
    </main>
  )
}
