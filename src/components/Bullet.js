// global
import React from 'react'

export const Bullet = ({ children, style, ...rest }) => (
  <span className='bullet' style={style} {...rest}>
    {children}
  </span>
)
