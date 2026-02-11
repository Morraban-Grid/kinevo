import { NutritionItem } from '@/types/nutrition'

/**
 * Mock meal data for UI development.
 * These examples are fictional and used only for interface testing.
 */
export const mockMeals: NutritionItem[] = [
  {
    id: 'm1',
    title: 'Protein Oat Bowl',
    description:
      'Oats with almond milk, banana slices, chia seeds, and a scoop of plant-based protein.',
    calories: 420,
    goal: 'muscle',
  },
  {
    id: 'm2',
    title: 'Grilled Chicken Salad',
    description:
      'Mixed greens with grilled chicken, avocado, cherry tomatoes, and olive oil dressing.',
    calories: 510,
    goal: 'balance',
  },
  {
    id: 'm3',
    title: 'Green Energy Smoothie',
    description:
      'Spinach, pineapple, mango, coconut water, and a touch of fresh ginger.',
    calories: 280,
    goal: 'energy',
  },
  {
    id: 'm4',
    title: 'Light Veggie Wrap',
    description:
      'Whole-grain wrap filled with hummus, roasted vegetables, and fresh greens.',
    calories: 350,
    goal: 'weight-loss',
  },
]
