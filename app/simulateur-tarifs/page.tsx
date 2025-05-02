import PricingCalculator from "@/components/pricing-calculator"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Calculateur de Tarifs pour Sites Web</h1>
      <PricingCalculator />
    </main>
  )
}
