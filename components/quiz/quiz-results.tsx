"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

interface QuizResultsProps {
  results: any[]
  onRestart: () => void
}

export function QuizResults({ results, onRestart }: QuizResultsProps) {
  const icons = [
    <Trophy key="trophy" className="h-8 w-8 text-yellow-500" />,
    <Medal key="medal" className="h-8 w-8 text-gray-400" />,
    <Award key="award" className="h-8 w-8 text-amber-700" />,
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Vos résultats</h2>
        <p className="text-muted-foreground">Voici les CMS les plus adaptés à vos besoins, basés sur vos réponses</p>
      </div>

      <div className="space-y-4">
        {results.map((result, index) => (
          <Card key={index} className={index === 0 ? "border-primary" : ""}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex-shrink-0">{icons[index]}</div>
              <div>
                <CardTitle className="text-xl">{result.cms}</CardTitle>
                <CardDescription>Score: {Math.round(result.score)}/100</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Points forts:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.strengths.map((strength: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Pourquoi ce CMS vous convient:</h4>
                {result.reasons && result.reasons.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {result.reasons.slice(0, 3).map((reason: string, i: number) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Ce CMS offre un bon équilibre de fonctionnalités pour vos besoins.
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground">{result.notes}</CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={onRestart}>Recommencer le quiz</Button>
      </div>
    </div>
  )
}
