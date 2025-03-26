"use server"

import type { CategoryScore } from "../types"

export async function commercialAudit(url: string): Promise<CategoryScore> {
  try {
    // In a real implementation, we would analyze commercial elements and value proposition

    // For demo purposes, we'll simulate the API response
    const simulatedScore = Math.floor(Math.random() * 25) + 55 // Random score between 55-80

    return {
      name: "commercial",
      score: simulatedScore,
      summary:
        "Commercial aspects of your site include pricing strategy, value proposition, and persuasive elements that drive conversions and sales.",
      findings: [
        {
          title: "Unclear value proposition",
          description: "Your unique selling points aren't clearly communicated on key landing pages.",
          impact: "high",
        },
        {
          title: "Pricing information is difficult to find",
          description: "Users have to click through multiple pages to find pricing details.",
          impact: "high",
        },
        {
          title: "Limited payment options",
          description: "Your checkout only offers credit card payments, potentially limiting conversions.",
          impact: "medium",
        },
        {
          title: "Weak product descriptions",
          description: "Product descriptions focus on features rather than benefits and use cases.",
          impact: "medium",
        },
      ],
      recommendations: [
        {
          title: "Clarify your value proposition",
          description: "Clearly communicate what makes your offering unique and valuable above the fold on key pages.",
          link: "https://www.nngroup.com/articles/value-proposition/",
        },
        {
          title: "Improve pricing transparency",
          description: "Make pricing information easily accessible and clearly structured.",
          link: "https://www.priceintelligently.com/blog/bid/195287/the-value-of-pricing-strategy-transparency",
        },
        {
          title: "Expand payment options",
          description: "Add popular payment methods like PayPal, Apple Pay, and buy-now-pay-later options.",
          link: "https://www.bigcommerce.com/blog/online-payment-methods/",
        },
        {
          title: "Enhance product descriptions",
          description: "Focus on benefits, use cases, and emotional appeals rather than just technical specifications.",
          link: "https://www.shopify.com/blog/8211159-9-simple-ways-to-write-product-descriptions-that-sell",
        },
      ],
      sources: [
        {
          name: "Nielsen Norman Group",
          url: "https://www.nngroup.com/",
        },
        {
          name: "Price Intelligently",
          url: "https://www.priceintelligently.com/",
        },
        {
          name: "Shopify Blog",
          url: "https://www.shopify.com/blog",
        },
      ],
    }
  } catch (error) {
    console.error("Error in commercial audit:", error)
    throw new Error("Failed to run commercial audit")
  }
}

