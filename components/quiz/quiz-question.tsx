"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Question } from "@/lib/questions"

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string | string[] | undefined
  onSelectAnswer: (answer: string | string[]) => void
  isMultipleChoice?: boolean
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  isMultipleChoice = false,
}: QuizQuestionProps) {
  // Fonction pour gérer les sélections multiples
  const handleCheckboxChange = (value: string) => {
    if (!Array.isArray(selectedAnswer)) {
      onSelectAnswer([value])
      return
    }

    if (selectedAnswer.includes(value)) {
      onSelectAnswer(selectedAnswer.filter((item) => item !== value))
    } else {
      onSelectAnswer([...selectedAnswer, value])
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{question.text}</h2>

      {isMultipleChoice ? (
        // Affichage pour les questions à choix multiples
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = Array.isArray(selectedAnswer) && selectedAnswer.includes(option.value)
            return (
              <div
                key={option.value}
                className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                  isSelected ? "bg-muted" : ""
                }`}
                onClick={() => handleCheckboxChange(option.value)}
              >
                <input
                  type="checkbox"
                  id={option.value}
                  checked={isSelected}
                  className="h-4 w-4"
                  onChange={() => handleCheckboxChange(option.value)}
                />
                <label htmlFor={option.value} className="flex-1 cursor-pointer">
                  {option.label}
                </label>
              </div>
            )
          })}
        </div>
      ) : (
        // Affichage pour les questions à choix unique (inchangé)
        <RadioGroup
          value={Array.isArray(selectedAnswer) ? selectedAnswer[0] : selectedAnswer}
          onValueChange={onSelectAnswer}
          className="space-y-3"
        >
          {question.options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                Array.isArray(selectedAnswer)
                  ? selectedAnswer.includes(option.value)
                    ? "bg-muted"
                    : ""
                  : selectedAnswer === option.value
                    ? "bg-muted"
                    : ""
              }`}
              onClick={() => onSelectAnswer(option.value)}
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  )
}

