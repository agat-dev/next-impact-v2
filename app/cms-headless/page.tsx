"use client"

// Update the import path if the file is named differently or located elsewhere
import CmsQuizComponent from "@/components/cms-choice-quiz"

export default function CmsQuiz() {
  return (
    <main>
      <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
        <div className="flex justify-center space-y-4 py-8">
            <h1 className="font-medium">
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
