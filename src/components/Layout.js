// global
import React from 'react'
import cx from 'classnames'

// inline-styles
const layoutStyles = {
  display: 'block',
  margin: '48px auto',
  padding: '48px',
  background: '#ffffff'
}

// component
export const Layout = ({ children, className, ...rest }) => (
  <span className={cx('layout', className)} style={layoutStyles} {...rest}>
    {children}
  </span>
)
