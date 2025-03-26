"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { QuizQuestion } from "@/components/quiz/quiz-question"
import { QuizResults } from "@/components/quiz/quiz-results"
import { questions } from "@/lib/questions"
import { selectBestCMS } from "../../lib/cms-algorithm"

console.log(questions)

export function CmsQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // S'assurer que toutes les questions ont une réponse
      const completeAnswers = { ...answers }

      // Ajouter des réponses par défaut pour les questions sans réponse
      questions.forEach((question) => {
        if (!completeAnswers[question.id]) {
          // Prendre la première option comme réponse par défaut
          completeAnswers[question.id] = question.options[0].value
        }
      })

      // Calculer les résultats avec les réponses complètes
      const results = selectBestCMS(completeAnswers)
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

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        {!showResults ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  Question {currentQuestionIndex + 1} sur {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <QuizQuestion
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
            />

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                Précédent
              </Button>
              <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
                {currentQuestionIndex === questions.length - 1 ? "Voir les résultats" : "Suivant"}
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

