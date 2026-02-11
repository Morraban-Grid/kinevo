/**
 * Represents the main nutritional goal of a meal or plan.
 */
export type NutritionGoal =
  | 'energy'
  | 'muscle'
  | 'weight-loss'
  | 'balance'

/**
 * Represents a single nutritional item displayed in the UI.
 */
export interface NutritionItem {
  id: string
  title: string
  description: string
  calories: number
  goal: NutritionGoal
}

/**
 * Represents a daily nutrition suggestion shown to the user.
 */
export interface NutritionPlan {
  id: string
  name: string
  items: NutritionItem[]
  totalCalories: number
}
