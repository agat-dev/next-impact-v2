"use server"

import type { AuditData, CategoryScore } from "@/lib/types"
import { performanceAudit } from "./audit/performance-audit"
import { seoAudit } from "./audit/seo-audit"
import { contentAudit } from "./audit/content-audit"
import { conversionAudit } from "./audit/conversion-audit"
import { analyticsAudit } from "./audit/analytics-audit"
import { acquisitionAudit } from "./audit/acquisition-audit"
import { socialAudit } from "./audit/social-audit"
import { commercialAudit } from "./audit/commercial-audit"
import { recommendationsAudit } from "./audit/recommendations-audit"

export async function runAudit(url: string): Promise<AuditData> {
  try {
    // Ensure URL has a protocol 
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url
    }

    // Run all audits in parallel
    const results = await Promise.allSettled([
      performanceAudit(url),
      seoAudit(url),
      contentAudit(url),
      conversionAudit(url),
      analyticsAudit(url),
      acquisitionAudit(url),
      socialAudit(url),
      commercialAudit(url),
      recommendationsAudit(url),
    ])

    // Process results, using fallbacks for any failed audits
    const categoryScores: CategoryScore[] = []

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        categoryScores.push(result.value)
      } else {
        console.error(`Audit ${index} failed:`, result.reason)
        // Add a fallback category with error information
        const categories = [
          "performance",
          "seo",
          "content",
          "conversion",
          "analytics",
          "acquisition",
          "social",
          "commercial",
          "recommendations",
        ]
        categoryScores.push({
          name: categories[index],
          score: 50,
          summary: "We encountered an issue while analyzing this aspect of your site.",
          findings: [
            {
              title: "Analysis error",
              description: "We couldn't complete this part of the audit. Please try again later.",
              impact: "medium",
            },
          ],
          recommendations: [
            {
              title: "Try again later",
              description: "This part of the audit encountered a technical issue.",
              link: "",
            },
          ],
        })
      }
    })

    // Calculate overall score (weighted average)
    const weights = {
      performance: 1.5,
      seo: 1.5,
      content: 1.2,
      conversion: 1.2,
      analytics: 1,
      acquisition: 1,
      social: 0.8,
      commercial: 1,
      recommendations: 0.8,
    }

    let totalWeight = 0
    let weightedSum = 0

    categoryScores.forEach((category) => {
      const weight = weights[category.name as keyof typeof weights] || 1
      totalWeight += weight
      weightedSum += category.score * weight
    })

    const overallScore = Math.round(weightedSum / totalWeight)

    return {
      url,
      overallScore,
      categoryScores,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error running audit:", error)
    throw new Error("Failed to run website audit")
  }
}

