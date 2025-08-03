import { CahierDesChargesForm } from "@/components/cahier-des-charges/cahier-des-charges-form"
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Générateur de cahier des charges de projet de site web | Next Impact",
    description: "Générateur de cahier des charges pour votre projet de site web. Remplissez le formulaire pour obtenir un document complet et personnalisé.",
    openGraph: {
      title: "Générateur de cahier des charges de projet de site web | Next Impact",
      url: "https://next-impact.digital/cahier-des-charges",
      description: "Générateur de cahier des charges pour votre projet de site web. Remplissez le formulaire pour obtenir un document complet et personnalisé.",
      type: "website",
      siteName: "Next Impact - Développeuse WordPress Freelance",
      images: [
        {
          url: "/img/avatar.png",
          width: 1200,
          height: 630,
          alt: "Next Impact - Développeuse WordPress Freelance",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
        <div className="flex justify-center space-y-4 py-12">
            <h1 className="font-medium text-center">
              Générateur de Cahier des Charges
            </h1>
          </div>
      <p className="text-center mb-8 text-regularblue/80 max-w-2xl mx-auto">
        Remplissez le formulaire ci-dessous pour générer un cahier des charges complet pour votre projet de site web.
      </p>
      <CahierDesChargesForm />
    </main>
  )
}
