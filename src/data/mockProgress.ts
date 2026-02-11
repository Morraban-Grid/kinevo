/**
 * Represents a daily activity record in the UI.
 */
export interface DailyProgress {
  date: string
  minutesTrained: number
}

/**
 * Mock progress data for UI visualization.
 * This data is fictional and used only for interface simulation.
 */
export const mockWeeklyProgress: DailyProgress[] = [
  { date: 'Mon', minutesTrained: 30 },
  { date: 'Tue', minutesTrained: 45 },
  { date: 'Wed', minutesTrained: 20 },
  { date: 'Thu', minutesTrained: 50 },
  { date: 'Fri', minutesTrained: 40 },
  { date: 'Sat', minutesTrained: 35 },
  { date: 'Sun', minutesTrained: 25 },
]

/**
 * Mock summary metrics displayed in dashboard cards.
 */
export const mockProgressSummary = {
  totalWorkoutsThisWeek: 5,
  totalMinutesThisWeek: 245,
  currentStreakDays: 3,
}
