// global
import React from 'react'

// component
export const Heading = ({ children, level = 2, ...rest }) => {
  const Component = `h${level.toString()}`
  return <Component {...rest}>{children}</Component>
}
