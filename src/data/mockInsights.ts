import { Insight } from '@/types/insight'

/**
 * Mock insight data for UI simulation.
 * These insights are statically generated and do not reflect real AI analysis.
 */
export const mockInsights: Insight[] = [
  {
    id: 'i1',
    title: 'Consistency is improving',
    message:
      'You have completed 3 workouts this week. Maintaining this rhythm can significantly improve your endurance.',
    category: 'consistency',
    createdAt: new Date(),
  },
  {
    id: 'i2',
    title: 'Recovery suggestion',
    message:
      'After your recent high-intensity session, consider a mobility-focused workout to support muscle recovery.',
    category: 'recovery',
    createdAt: new Date(),
  },
  {
    id: 'i3',
    title: 'Performance boost',
    message:
      'Your average workout duration has increased. This suggests growing stamina and commitment.',
    category: 'performance',
    createdAt: new Date(),
  },
  {
    id: 'i4',
    title: 'Nutrition alignment',
    message:
      'Meals aligned with your energy goal are helping sustain consistent activity levels.',
    category: 'nutrition',
    createdAt: new Date(),
  },
  {
    id: 'i5',
    title: 'Motivation reminder',
    message:
      'Small daily actions compound over time. Stay consistent and focus on progress, not perfection.',
    category: 'motivation',
    createdAt: new Date(),
  },
]
