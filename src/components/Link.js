// global
import React from 'react'
import cx from 'classnames'

// inline-styles
const linkStyles = {
  display: 'inline-block',
}

export const Link = ({children, className, ...rest}) => (
  <a
    className={cx('link', className)}
    style={linkStyles}
    target="_blank"
    rel="noopener noreferrer nofollow"
    {...rest}
  >
    {children}
  </a>
)
