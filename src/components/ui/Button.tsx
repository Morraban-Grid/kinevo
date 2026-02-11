import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

/**
 * Reusable Button component following a minimal,
 * consistent and scalable design system approach.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
