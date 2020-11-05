// global
import React from 'react'

// inline-styles
const layoutStyles = {
  display: 'block',
}

// component
export const Layout = ({children, ...rest}) => (
  <span className="layout" style={layoutStyles} {...rest}>
    {children}
  </span>
)
