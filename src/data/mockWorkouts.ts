import { Workout } from '@/types/workout'

/**
 * Mock workout data for UI development purposes.
 * This data is static and does not represent real user information.
 */
export const mockWorkouts: Workout[] = [
  {
    id: 'w1',
    title: 'Morning Mobility Flow',
    description:
      'A gentle routine designed to activate joints and improve flexibility at the start of the day.',
    level: 'beginner',
    totalDurationMinutes: 20,
    exercises: [
      { id: 'e1', name: 'Neck Rolls', durationMinutes: 3 },
      { id: 'e2', name: 'Shoulder Circles', durationMinutes: 5 },
      { id: 'e3', name: 'Hip Openers', durationMinutes: 6 },
      { id: 'e4', name: 'Light Stretching', durationMinutes: 6 },
    ],
  },
  {
    id: 'w2',
    title: 'Core Strength Builder',
    description:
      'Focused abdominal and lower back exercises to enhance posture and stability.',
    level: 'intermediate',
    totalDurationMinutes: 35,
    exercises: [
      { id: 'e5', name: 'Plank Hold', durationMinutes: 10 },
      { id: 'e6', name: 'Russian Twists', durationMinutes: 8 },
      { id: 'e7', name: 'Leg Raises', durationMinutes: 9 },
      { id: 'e8', name: 'Superman Hold', durationMinutes: 8 },
    ],
  },
  {
    id: 'w3',
    title: 'High-Intensity Cardio',
    description:
      'A dynamic session to boost endurance, burn calories, and elevate heart rate.',
    level: 'advanced',
    totalDurationMinutes: 30,
    exercises: [
      { id: 'e9', name: 'Jump Squats', durationMinutes: 8 },
      { id: 'e10', name: 'Burpees', durationMinutes: 10 },
      { id: 'e11', name: 'Mountain Climbers', durationMinutes: 6 },
      { id: 'e12', name: 'Sprint Intervals', durationMinutes: 6 },
    ],
  },
]
