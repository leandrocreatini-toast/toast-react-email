// global
import React from 'react'

// inline-styles
const bulletStyles = {
  display: 'inline-block'
}

export const Bullet = ({ children, className, ...rest }) => (
  <span className='bullet' style={bulletStyles} {...rest}>
    {children}
  </span>
)
