"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { QuizQuestion } from "@/components/quiz/quiz-question"
import { QuizResults } from "@/components/quiz/quiz-results"
import { simplifiedQuestions } from "@/lib/simplified-questions"
import { selectBestCMS } from "@/lib/cms-algorithm"

export function SimplifiedQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const currentQuestion = simplifiedQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / simplifiedQuestions.length) * 100

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  // Modifier la fonction handleNext pour gérer correctement les réponses à choix multiples

  const handleNext = () => {
    if (currentQuestionIndex < simplifiedQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // S'assurer que toutes les questions ont une réponse
      const completeAnswers: Record<string, string> = Object.fromEntries(
        Object.entries(answers).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(",") : value,
        ])
      )

      // Ajouter des réponses par défaut pour les questions sans réponse
      simplifiedQuestions.forEach((question) => {
        if (!completeAnswers[question.id]) {
          // Prendre la première option comme réponse par défaut
          completeAnswers[question.id] = question.options[0].value
        } else if (Array.isArray(completeAnswers[question.id])) {
          // Si c'est un tableau (choix multiple), le convertir en chaîne pour l'algorithme
          const selectedValues = Array.isArray(completeAnswers[question.id])
            ? (Array.isArray(completeAnswers[question.id]) ? completeAnswers[question.id] as string[] : [])
            : []
          if (selectedValues.length === 0) {
            completeAnswers[question.id] = "None"
          } else {
            // Pour specificFeatures, on joint les valeurs avec des virgules
            completeAnswers[question.id] = selectedValues.join(",")
          }
        }
      })

      // Calculer les résultats avec les réponses complètes
      const results = selectBestCMS(completeAnswers as Record<string, string>)
      setResults(results)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
    setResults([])
  }

  // Vérifier si la question actuelle est celle des fonctionnalités spécifiques
  const isMultipleChoiceQuestion = currentQuestion.id === "specificFeatures"

  // Vérifier si une réponse a été sélectionnée pour la question actuelle
  const hasAnswer = () => {
    const answer = answers[currentQuestion.id]
    if (Array.isArray(answer)) {
      return answer.length > 0
    }
    return !!answer
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        {!showResults ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  Question {currentQuestionIndex + 1} sur {simplifiedQuestions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <QuizQuestion
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
              isMultipleChoice={isMultipleChoiceQuestion}
            />

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                Précédent
              </Button>
              <Button onClick={handleNext} disabled={!hasAnswer()}>
                {currentQuestionIndex === simplifiedQuestions.length - 1 ? "Voir les résultats" : "Suivant"}
              </Button>
            </div>
          </>
        ) : (
          <QuizResults results={results} onRestart={handleRestart} />
        )}
      </CardContent>
    </Card>
  )
}

