"use client"

import { useState } from "react"
import { TextAnimate } from "@/components/magicui/text-animate"
import { CmsQuiz } from "@/components/quiz/cms-quiz"
import { SimplifiedQuiz } from "@/components/quiz/simplified-quiz"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [quizType, setQuizType] = useState("simplified")

  return (
    <main className="flex-1">
      <section className="w-full pt-4 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center space-y-4 py-8">
            <TextAnimate animation="blurInUp" by="character" once>
              Choisir le meilleur CMS pour son projet
            </TextAnimate>
          </div>
        </div>
      </section>

      <Tabs defaultValue="simplified" className="w-full max-w-3xl mx-auto mb-8" onValueChange={setQuizType}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="simplified">Quiz simplifié (7 questions)</TabsTrigger>
          <TabsTrigger value="complete">Quiz complet (25 questions)</TabsTrigger>
        </TabsList>
        <TabsContent value="simplified">
          <p className="text-center text-muted-foreground mb-8">
            Version courte avec les 7 questions essentielles pour une recommandation rapide.
          </p>
          <SimplifiedQuiz />
        </TabsContent>
        <TabsContent value="complete">
          <p className="text-center text-muted-foreground mb-8">
            Version complète avec 25 questions pour une analyse détaillée de vos besoins.
          </p>
          <CmsQuiz />
        </TabsContent>
      </Tabs>
    </main>
  )
}

