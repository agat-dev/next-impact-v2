"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { AuditResults } from "@/components/audit/audit-results"
import { runAudit } from "@/lib/audit-service"
import type { AuditData } from "@/lib/types"
import { Loader2 } from "lucide-react"

export function WebsiteAuditTool() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [auditData, setAuditData] = useState<AuditData | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic URL validation
    if (!url) {
      setError("Please enter a URL")
      return
    }

    // More comprehensive URL validation
    let formattedUrl = url
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      formattedUrl = `https://${url}`
    }

    try {
      // Test if it's a valid URL format
      new URL(formattedUrl)
    } catch (e) {
      setError("Please enter a valid URL")
      return
    }

    try {
      setIsLoading(true)
      setError("")
      const data = await runAudit(formattedUrl)
      setAuditData(data)
    } catch (err) {
      setError("Failed to analyze website. Please check the URL and try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8 my-20">
      <Card className="w-max mx-auto p-6 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-medium font-adobetext text-regularblue">
              URL du site
            </label>
            <div className="flex gap-2 w-[40rem]">
              <Input
                id="url"
                placeholder="example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading} className="gap-1 rounded-full text-md font-adobetitre font-regular text-white bg-regularblue hover:bg-regularblue/80">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze"
                )}
              </Button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center p-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-slate-600">Analyzing website... This may take a minute.</p>
        </div>
      )}

      {auditData && !isLoading && <AuditResults data={auditData} />}
    </div>
  )
}

