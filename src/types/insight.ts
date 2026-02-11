/**
 * Represents the category of an insight shown to the user.
 */
export type InsightCategory =
  | 'performance'
  | 'consistency'
  | 'recovery'
  | 'nutrition'
  | 'motivation'

/**
 * Represents a single insight displayed in the UI.
 * Insights are UI-generated and do not imply real AI analysis.
 */
export interface Insight {
  id: string
  title: string
  message: string
  category: InsightCategory
  createdAt: Date
}
