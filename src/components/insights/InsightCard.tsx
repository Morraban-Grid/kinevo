import React from 'react'
import { Insight } from '@/types/insight'
import { formatDate } from '@/utils/formatters'

interface InsightCardProps {
  insight: Insight
}

/**
 * InsightCard displays an AI-generated insight in a clean,
 * structured and premium layout.
 */
const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <div className="insight-card">
      <div className="insight-card-header">
        <h3>{insight.title}</h3>
        <span className="insight-category">
          {insight.category}
        </span>
      </div>

      <p className="insight-message">
        {insight.message}
      </p>

      <div className="insight-footer">
        <span className="insight-date">
          {formatDate(insight.createdAt)}
        </span>
      </div>
    </div>
  )
}

export default InsightCard
