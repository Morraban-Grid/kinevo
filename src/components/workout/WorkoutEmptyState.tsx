import React from 'react'

interface WorkoutEmptyStateProps {
  onCreateWorkout?: () => void
}

/**
 * WorkoutEmptyState is displayed when the user
 * has no recorded workouts.
 */
const WorkoutEmptyState: React.FC<WorkoutEmptyStateProps> = ({
  onCreateWorkout,
}) => {
  return (
    <div className="workout-empty-state">
      <div className="empty-content">
        <h3>No workouts yet</h3>
        <p>
          Start tracking your fitness journey by adding your first workout.
        </p>

        {onCreateWorkout && (
          <button
            type="button"
            className="empty-action-button"
            onClick={onCreateWorkout}
          >
            Add your first workout
          </button>
        )}
      </div>
    </div>
  )
}

export default WorkoutEmptyState
