// global
import React from 'react'
import cx from 'classnames'

// component
export const Header = ({children, className, level = 2, ...rest}) => {
  const Component = `h${level.toString()}`
  return (
    <Component
      className={cx(className, level && Component)}
      {...rest}
    >
      {children}
    </Component>
  )
}
