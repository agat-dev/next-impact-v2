"use client"

import { useState } from "react"
import { CmsQuiz } from "@/components/quiz/cms-quiz"
import { SimplifiedQuiz } from "@/components/quiz/simplified-quiz"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [quizType, setQuizType] = useState("simplified")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Quel CMS ou outil web est le plus adapté à votre projet ?</h1>

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
    </div>
  )
}

