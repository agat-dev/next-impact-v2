"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import type { AuditData, CategoryScore } from "@/lib/types"
import {
  BarChart,
  Zap,
  Search,
  FileText,
  TrendingUp,
  BarChart2,
  Share2,
  Users,
  ShoppingBag,
  Lightbulb,
} from "lucide-react"
import { CategoryDetail } from "@/components/category-details"

interface AuditResultsProps {
  data: AuditData
}

export function AuditResults({ data }: AuditResultsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "performance":
        return <Zap className="h-5 w-5" />
      case "seo":
        return <Search className="h-5 w-5" />
      case "content":
        return <FileText className="h-5 w-5" />
      case "conversion":
        return <TrendingUp className="h-5 w-5" />
      case "analytics":
        return <BarChart2 className="h-5 w-5" />
      case "acquisition":
        return <Share2 className="h-5 w-5" />
      case "social":
        return <Users className="h-5 w-5" />
      case "commercial":
        return <ShoppingBag className="h-5 w-5" />
      case "recommendations":
        return <Lightbulb className="h-5 w-5" />
      default:
        return <BarChart className="h-5 w-5" />
    }
  }

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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Score</span>
            <span className={getScoreColor(data.overallScore)}>{data.overallScore}/100</span>
          </CardTitle>
          <CardDescription>Based on analysis of {data.url}</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress
            value={data.overallScore}
            className="h-3"
            indicatorClassName={getProgressColor(data.overallScore)}
          />
          <p className="mt-4 text-sm text-slate-600">
            {data.overallScore >= 80
              ? "Excellent! Your website is performing well in most areas."
              : data.overallScore >= 60
                ? "Good, but there's room for improvement in several areas."
                : "Needs significant improvement across multiple areas."}
          </p>
        </CardContent>
      </Card>
      <div className="text-sm text-right text-slate-500 mt-2">
        Analysis completed: {new Date(data.timestamp).toLocaleString()}
      </div>

      <Tabs defaultValue="scores" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scores">Category Scores</TabsTrigger>
          <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="scores">
          <Card>
            <CardHeader>
              <CardTitle>Performance by Category</CardTitle>
              <CardDescription>Click on a category to see detailed recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.categoryScores.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-md transition-colors"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <div className="bg-slate-100 p-2 rounded-full">{getCategoryIcon(category.name)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium capitalize">{category.name}</span>
                        <span className={getScoreColor(category.score)}>{category.score}/100</span>
                      </div>
                      <Progress
                        value={category.score}
                        className="h-2"
                        indicatorClassName={getProgressColor(category.score)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          {selectedCategory ? (
            <CategoryDetail
              category={data.categoryScores.find((c) => c.name === selectedCategory) as CategoryScore}
              onBack={() => setSelectedCategory(null)}
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Select a Category</CardTitle>
                <CardDescription>Click on a category from the scores tab to view detailed analysis</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.categoryScores.map((category) => (
                  <div
                    key={category.name}
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(category.name)}
                      <span className="font-medium capitalize">{category.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Progress
                        value={category.score}
                        className="h-2 w-3/4"
                        indicatorClassName={getProgressColor(category.score)}
                      />
                      <span className={`font-bold ${getScoreColor(category.score)}`}>{category.score}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

