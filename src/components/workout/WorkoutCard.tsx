import React from 'react'
import { Workout } from '@/types/workout'
import { formatDate } from '@/utils/formatters'

interface WorkoutCardProps {
  workout: Workout
}

/**
 * WorkoutCard displays a summary of a completed workout session.
 * Designed with clarity and minimalism in mind.
 */
const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <div className="workout-card">
      <div className="workout-card-header">
        <h3>{workout.name}</h3>
        <span className="workout-type">{workout.type}</span>
      </div>

      <div className="workout-card-body">
        <div className="workout-stat">
          <span className="stat-label">Duration</span>
          <span className="stat-value">{workout.duration} min</span>
        </div>

        <div className="workout-stat">
          <span className="stat-label">Calories</span>
          <span className="stat-value">{workout.calories} kcal</span>
        </div>
      </div>

      <div className="workout-card-footer">
        <span className="workout-date">
          {formatDate(workout.date)}
        </span>
      </div>
    </div>
  )
}

export default WorkoutCard
