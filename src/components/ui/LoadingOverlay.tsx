import React from 'react'

interface LoadingOverlayProps {
  isVisible: boolean
  message?: string
}

/**
 * LoadingOverlay displays a centered loading indicator
 * with a subtle blurred background effect.
 */
const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = 'Loading...',
}) => {
  if (!isVisible) return null

  return (
    <div className="loading-overlay" role="alert" aria-busy="true">
      <div className="loading-content">
        <div className="spinner" />
        <p>{message}</p>
      </div>
    </div>
  )
}

export default LoadingOverlay
