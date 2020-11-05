// global
import React from 'react'
import cx from 'classnames'

// inline-styles
const circleStyles = {
  display: 'inline-block',
}

export const Circle = ({children, className, ...rest}) => (
  <span
    className={cx('circle', className)}
    style={circleStyles}
    {...rest}
  >
    {children}
  </span>
)
