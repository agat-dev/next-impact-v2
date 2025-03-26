"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Question } from "@/lib/questions"

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string | undefined
  onSelectAnswer: (answer: string) => void
}

export function QuizQuestion({ question, selectedAnswer, onSelectAnswer }: QuizQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <RadioGroup value={selectedAnswer} onValueChange={onSelectAnswer} className="space-y-3">
        {question.options.map((option) => (
          <div
            key={option.value}
            className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
              selectedAnswer === option.value ? "bg-muted" : ""
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
    </div>
  )
}

