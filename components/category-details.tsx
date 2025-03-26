"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { CategoryScore } from "@/lib/types"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface CategoryDetailProps {
  category: CategoryScore
  onBack: () => void
}

export function CategoryDetail({ category, onBack }: CategoryDetailProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600"
    if (score >= 60) return "bg-yellow-600"
    return "bg-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="capitalize">{category.name} Analysis</CardTitle>
            <CardDescription>
              Score: <span className={getScoreColor(category.score)}>{category.score}/100</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Overview</h3>
          <Progress value={category.score} className="h-3 mb-2" indicatorClassName={getProgressColor(category.score)} />
          <p className="text-sm text-slate-600">{category.summary}</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Key Findings</h3>
          <ul className="space-y-2">
            {category.findings.map((finding, index) => (
              <li key={index} className="bg-slate-50 p-3 rounded-md">
                <div className="flex items-start">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${
                      finding.impact === "high"
                        ? "bg-red-500"
                        : finding.impact === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{finding.title}</p>
                    <p className="text-sm text-slate-600">{finding.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Recommendations</h3>
          <ul className="space-y-2">
            {category.recommendations.map((recommendation, index) => (
              <li key={index} className="bg-slate-50 p-3 rounded-md">
                <p className="font-medium">{recommendation.title}</p>
                <p className="text-sm text-slate-600">{recommendation.description}</p>
                {recommendation.link && (
                  <a
                    href={recommendation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary flex items-center mt-1 hover:underline"
                  >
                    Learn more <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {category.sources && category.sources.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Sources</h3>
            <ul className="text-sm text-slate-600">
              {category.sources.map((source, index) => (
                <li key={index} className="mb-1">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    {source.name} <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

