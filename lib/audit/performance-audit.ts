"use server"

import type { CategoryScore } from "../types"

export async function performanceAudit(url: string): Promise<CategoryScore> {
  try {
    // Call the PageSpeed Insights API with the provided API key
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${process.env.PAGESPEED_API_KEY}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`PageSpeed API returned ${response.status}`)
    }

    const data = await response.json()

    // Extract performance metrics
    const lighthouseResult = data.lighthouseResult
    const performanceScore = Math.round(lighthouseResult.categories.performance.score * 100)

    // Extract Core Web Vitals
    const lcp = lighthouseResult.audits["largest-contentful-paint"]
    const fid = lighthouseResult.audits["max-potential-fid"] || lighthouseResult.audits["total-blocking-time"]
    const cls = lighthouseResult.audits["cumulative-layout-shift"]
    const ttfb = lighthouseResult.audits["server-response-time"]

    // Create findings based on actual results
    const findings = []
    const recommendations = []

    if (lcp.score < 0.9) {
      findings.push({
        title: "Slow Largest Contentful Paint (LCP)",
        description: `Your LCP is ${lcp.displayValue}, which is slower than the recommended 2.5 seconds.`,
        impact: lcp.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Improve Largest Contentful Paint",
        description: "Optimize your main content loading, including images, videos, or large text blocks.",
        link: "https://web.dev/lcp/",
      })
    }

    if (fid.score < 0.9) {
      findings.push({
        title: "Poor Interactivity",
        description: `Your ${fid.title} is ${fid.displayValue}, which may cause users to experience lag when interacting with your page.`,
        impact: fid.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Improve Interactivity",
        description: "Optimize JavaScript execution and minimize main thread work to improve responsiveness.",
        link: "https://web.dev/fid/",
      })
    }

    if (cls.score < 0.9) {
      findings.push({
        title: "Layout Instability Issues",
        description: `Your Cumulative Layout Shift is ${cls.displayValue}, which creates a poor user experience as elements move around during page load.`,
        impact: cls.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Reduce Layout Shifts",
        description:
          "Set size attributes on images and videos, avoid inserting content above existing content, and use transform animations.",
        link: "https://web.dev/cls/",
      })
    }

    if (ttfb.score < 0.9) {
      findings.push({
        title: "Slow Server Response Time",
        description: `Your server takes ${ttfb.displayValue} to respond, which delays every aspect of page loading.`,
        impact: ttfb.score < 0.5 ? "high" : "medium",
      })

      recommendations.push({
        title: "Improve Server Response Time",
        description: "Optimize server processing, use a CDN, cache responses, or consider a better hosting solution.",
        link: "https://web.dev/ttfb/",
      })
    }

    // Add general recommendations if needed
    if (recommendations.length < 3) {
      recommendations.push({
        title: "Optimize Images",
        description: "Use modern formats like WebP, proper sizing, and compression to reduce image file sizes.",
        link: "https://web.dev/use-imagemin-to-compress-images/",
      })

      recommendations.push({
        title: "Implement Resource Hints",
        description: "Use preload, prefetch, and preconnect to prioritize loading of critical resources.",
        link: "https://web.dev/preload-critical-assets/",
      })
    }

    // If no major issues found, add a positive finding
    if (findings.length === 0) {
      findings.push({
        title: "Good performance overall",
        description: "Your site performs well on core performance metrics, but there's always room for improvement.",
        impact: "low",
      })
    }

    return {
      name: "performance",
      score: performanceScore,
      summary:
        "Your website's performance affects user experience, conversion rates, and SEO rankings. Mobile performance is particularly important as most users browse on mobile devices.",
      findings: findings.slice(0, 4), // Limit to top 4 findings
      recommendations: recommendations.slice(0, 4), // Limit to top 4 recommendations
      sources: [
        {
          name: "Google PageSpeed Insights",
          url: "https://pagespeed.web.dev/",
        },
        {
          name: "Web.dev Core Web Vitals",
          url: "https://web.dev/vitals/",
        },
      ],
    }
  } catch (error) {
    console.error("Error in performance audit:", error)

    // Fallback to a generic response if the API call fails
    return {
      name: "performance",
      score: 50,
      summary:
        "We encountered an issue while analyzing your site's performance. The score and recommendations below are generic and not specific to your site.",
      findings: [
        {
          title: "Unable to complete performance analysis",
          description: "We couldn't retrieve performance data from PageSpeed Insights API. Please try again later.",
          impact: "high",
        },
      ],
      recommendations: [
        {
          title: "Optimize images",
          description: "Ensure all images are properly sized and compressed for web delivery.",
          link: "https://web.dev/use-imagemin-to-compress-images/",
        },
        {
          title: "Minimize JavaScript",
          description: "Reduce, minify, and compress JavaScript to improve load times.",
          link: "https://web.dev/reduce-javascript-payloads-with-code-splitting/",
        },
        {
          title: "Implement caching",
          description: "Use browser caching and CDNs to reduce load times for returning visitors.",
          link: "https://web.dev/http-cache/",
        },
      ],
      sources: [
        {
          name: "Google PageSpeed Insights",
          url: "https://pagespeed.web.dev/",
        },
        {
          name: "Web.dev Core Web Vitals",
          url: "https://web.dev/vitals/",
        },
      ],
    }
  }
}

