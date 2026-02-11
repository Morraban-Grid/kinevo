import React from 'react'

interface AppLayoutProps {
  children: React.ReactNode
}

/**
 * AppLayout defines the main structural container of the application.
 * It ensures consistent spacing, alignment, and visual balance.
 */
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      {children}
    </div>
  )
}

export default AppLayout
