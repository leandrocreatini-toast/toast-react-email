// global
import React from 'react'
import cx from 'classnames'

// inline-styles
export const Image = ({className, alt, ...rest}) => (
  <img
    className={cx('image', className)}
    alt={alt}
    {...rest}
  />
)
