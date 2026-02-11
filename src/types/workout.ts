/**
 * Represents the difficulty level of a workout.
 */
export type WorkoutLevel = 'beginner' | 'intermediate' | 'advanced'

/**
 * Represents a single exercise within a workout routine.
 */
export interface Exercise {
  id: string
  name: string
  durationMinutes: number
}

/**
 * Represents a workout routine displayed in the UI.
 */
export interface Workout {
  id: string
  title: string
  description: string
  level: WorkoutLevel
  totalDurationMinutes: number
  exercises: Exercise[]
}
