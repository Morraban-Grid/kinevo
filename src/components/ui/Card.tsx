import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

/**
 * Card is a reusable layout container
 * that ensures consistent visual structure across the app.
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export default Card
