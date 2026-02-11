import React from 'react'
import { Meal } from '@/types/nutrition'
import { formatDate } from '@/utils/formatters'

interface MealPlanCardProps {
  meal: Meal
}

/**
 * MealPlanCard displays a structured overview
 * of a user's meal plan entry.
 */
const MealPlanCard: React.FC<MealPlanCardProps> = ({ meal }) => {
  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span className="meal-type">{meal.type}</span>
      </div>

      <div className="meal-card-body">
        <div className="meal-stat">
          <span className="stat-label">Calories</span>
          <span className="stat-value">{meal.calories} kcal</span>
        </div>

        <div className="meal-stat">
          <span className="stat-label">Protein</span>
          <span className="stat-value">{meal.protein} g</span>
        </div>

        <div className="meal-stat">
          <span className="stat-label">Carbs</span>
          <span className="stat-value">{meal.carbs} g</span>
        </div>

        <div className="meal-stat">
          <span className="stat-label">Fat</span>
          <span className="stat-value">{meal.fat} g</span>
        </div>
      </div>

      <div className="meal-card-footer">
        <span className="meal-date">
          {formatDate(meal.date)}
        </span>
      </div>
    </div>
  )
}

export default MealPlanCard
