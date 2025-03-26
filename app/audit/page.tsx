import { WebsiteAuditTool } from "@/components/website-audit-tool"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Website Marketing Audit Tool</h1>
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Analyze your website's marketing effectiveness across multiple dimensions including performance, SEO, content,
          and conversion optimization.
        </p>
        <WebsiteAuditTool />
      </div>
    </main>
  )
}

