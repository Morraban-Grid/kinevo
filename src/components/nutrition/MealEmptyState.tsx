import React from 'react'

interface MealEmptyStateProps {
  onAddMeal?: () => void
}

/**
 * MealEmptyState is displayed when the user
 * has no recorded meals.
 */
const MealEmptyState: React.FC<MealEmptyStateProps> = ({
  onAddMeal,
}) => {
  return (
    <div className="meal-empty-state">
      <div className="empty-content">
        <h3>No meals logged yet</h3>
        <p>
          Start tracking your nutrition to get smarter insights from Kinevo.
        </p>

        {onAddMeal && (
          <button
            type="button"
            className="empty-action-button"
            onClick={onAddMeal}
          >
            Add your first meal
          </button>
        )}
      </div>
    </div>
  )
}

export default MealEmptyState
