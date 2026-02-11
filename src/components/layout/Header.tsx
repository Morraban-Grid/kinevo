import React from 'react'

interface HeaderProps {
  title?: string
  subtitle?: string
}

/**
 * Header component represents the top section of the application.
 * It displays contextual information while maintaining a minimal aesthetic.
 */
const Header: React.FC<HeaderProps> = ({
  title = 'Kinevo',
  subtitle = 'Your intelligent fitness companion',
}) => {
  return (
    <header className="app-header" role="banner">
      <div className="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}

export default Header
