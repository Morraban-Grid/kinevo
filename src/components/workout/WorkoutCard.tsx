import React from 'react'
import { Workout } from '@/types/workout'
import { capitalize, formatDuration } from '@/utils/formatters'

interface WorkoutCardProps {
  workout: Workout
}

/**
 * WorkoutCard displays a summary of a workout routine.
 * It is purely presentational and uses mock data only.
 */
const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <div className="workout-card">
      <div className="workout-card-header">
        <h3>{workout.title}</h3>
        <span className="workout-type">
          {capitalize(workout.level)}
        </span>
      </div>

      <div className="workout-card-body">
        <div className="workout-stat">
          <span className="stat-label">Duración</span>
          <span className="stat-value">
            {formatDuration(workout.totalDurationMinutes)}
          </span>
        </div>

        <div className="workout-stat">
          <span className="stat-label">Ejercicios</span>
          <span className="stat-value">
            {workout.exercises.length}
          </span>
        </div>
      </div>

      <div className="workout-card-footer">
        <span className="workout-date">
          Rutina enfocada en {capitalize(workout.level)}
        </span>
      </div>
    </div>
  )
}

export default WorkoutCard
