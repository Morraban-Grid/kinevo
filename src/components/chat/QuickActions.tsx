import React from 'react'

interface QuickActionsProps {
  onAction: (text: string) => void
}

/**
 * QuickActions provides predefined interaction shortcuts
 * to improve usability and reduce typing friction.
 */
const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
  const actions = [
    'Suggest a workout',
    'Analyze my weekly progress',
    'Give me nutrition advice',
    'Motivate me today',
  ]

  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          onClick={() => onAction(action)}
          className="quick-action-button"
        >
          {action}
        </button>
      ))}
    </div>
  )
}

export default QuickActions
