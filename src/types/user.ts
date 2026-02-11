/**
 * Represents the fitness level of the user.
 */
export type UserLevel = 'beginner' | 'intermediate' | 'advanced'

/**
 * Represents the main goal selected by the user.
 */
export type UserGoal =
  | 'stay-active'
  | 'build-strength'
  | 'lose-weight'
  | 'improve-mobility'

/**
 * Represents user preferences for the UI experience.
 */
export interface UserPreferences {
  prefersDarkMode: boolean
  notificationsEnabled: boolean
}

/**
 * Represents the user profile used by the UI.
 * This data is mock-based and does not represent real user information.
 */
export interface UserProfile {
  id: string
  name: string
  level: UserLevel
  goal: UserGoal
  preferences: UserPreferences
}
