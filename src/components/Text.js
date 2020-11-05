// global
import React from 'react'
import cx from 'classnames'

// inline-styles
const textStyles = {
  display: 'block',
}

export const Text = ({children, className, ...rest}) => (
  <p
    className={cx('text', className)}
    style={textStyles}
    {...rest}
  >
    {children}
  </p>
)
