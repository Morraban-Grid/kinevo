import React from 'react'
import { NutritionItem } from '@/types/nutrition'
import { capitalize, truncateText } from '@/utils/formatters'

interface MealPlanCardProps {
  meal: NutritionItem
}

/**
 * MealPlanCard displays a structured overview
 * of a mock meal suggestion.
 * It is UI-only and does not track real nutrition data.
 */
const MealPlanCard: React.FC<MealPlanCardProps> = ({ meal }) => {
  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <h3>{meal.title}</h3>
        <span className="meal-type">
          {capitalize(meal.goal)}
        </span>
      </div>

      <div className="meal-card-body">
        <p className="meal-description">
          {truncateText(meal.description, 110)}
        </p>

        <div className="meal-stat">
          <span className="stat-label">Energía estimada</span>
          <span className="stat-value">{meal.calories} kcal</span>
        </div>
      </div>

      <div className="meal-card-footer">
        <span className="meal-date">
          Recomendación orientada a {capitalize(meal.goal)}
        </span>
      </div>
    </div>
  )
}

export default MealPlanCard
