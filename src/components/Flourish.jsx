import React from 'react'

/**
 * Renders luxury editorial swash / flourish letters matching the high-fashion typography
 * seen in the reference designs (e.g. loops in L, B, D, A, E, S, Y, O, X, &)
 */
export default function Flourish({ children, type = 'serif-italic', className = '' }) {
  if (type === 'script') {
    return (
      <span
        className={`font-script-flourish ${className}`}
        style={{
          fontFamily: "'Italianno', 'Alex Brush', cursive",
          fontWeight: 400,
          display: 'inline-block',
          transform: 'scale(1.22) translateY(0.02em)',
          marginRight: '0.04em',
          marginLeft: '0.02em',
          verticalAlign: 'baseline',
          letterSpacing: '0',
          lineHeight: '0.8',
        }}
      >
        {children}
      </span>
    )
  }

  // High-contrast luxury italic serif with swash styling
  return (
    <span
      className={`font-swash ${className}`}
      style={{
        fontFamily: "'Cormorant Garamond', 'Bodoni Moda', Georgia, serif",
        fontStyle: 'italic',
        fontWeight: 400,
        display: 'inline-block',
        transform: 'scale(1.15) translateY(-0.02em)',
        letterSpacing: '0.01em',
        marginRight: '0.02em',
      }}
    >
      {children}
    </span>
  )
}
