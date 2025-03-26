export interface Finding {
    title: string
    description: string
    impact: "high" | "medium" | "low"
  }
  
  export interface Recommendation {
    title: string
    description: string
    link?: string
  }
  
  export interface Source {
    name: string
    url: string
  }
  
  export interface CategoryScore {
    name: string
    score: number
    summary: string
    findings: Finding[]
    recommendations: Recommendation[]
    sources?: Source[]
  }
  
  export interface AuditData {
    url: string
    overallScore: number
    categoryScores: CategoryScore[]
    timestamp: string
  }
  
  