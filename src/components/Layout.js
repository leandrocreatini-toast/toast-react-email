// global
import React from 'react'

// inline-styles
const layoutStyles = {
  display: 'block',
  margin: '0 auto',
  padding: '48px',
}

// component
export const Layout = ({children, ...rest}) => (
  <span className="layout" style={layoutStyles} {...rest}>
    {children}
  </span>
)
