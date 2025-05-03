import { CahierDesChargesForm } from "@/components/cahier-des-charges-form"

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Générateur de Cahier des Charges</h1>
      <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
        Remplissez le formulaire ci-dessous pour générer un cahier des charges complet pour votre projet de site web.
      </p>
      <CahierDesChargesForm />
    </main>
  )
}
