"use client"

// Update the import path if the file is named differently or located elsewhere
import CmsQuizComponent from "@/components/cms-choice-quiz"
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aide au choix d'une solution technique pour son projet de site web | Next Impact",
    description: "Outil d'évaluation pour le choix d'une solution technique pour votre projet web selon les prestataires et fonctionnalités souhaitées.",
    openGraph: {
      title: "Aide au choix d'une solution technique pour son projet de site web | Next Impact",
      url: "https://next-impact.digital/cms-headless",
      description: "Outil d'évaluation pour le choix d'une solution technique pour votre projet web selon les prestataires et fonctionnalités souhaitées.",
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

export default function CmsQuiz() {
  return (
    <main>
      <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
        <div className="flex justify-center space-y-4 py-8">
            <h1 className="font-medium text-center">
              WordPress ou WordPress Headless pour mon projet ? 
            </h1>
          </div>
            <p className="text-regularblue/70 text-center max-w-3xl mx-auto">
              Répondez à ce quiz pour déterminer la solution la plus adapté à vos besoins.
            </p>
      <CmsQuizComponent />
      </div>
    </section>
    </main>
  )
}
