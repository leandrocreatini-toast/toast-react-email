// global
import React from 'react'
import cx from 'classnames'

// inline-styles
const cardStyles = {
  display: 'block',
}

export const Card = ({children, className}) => (
  <span className={cx('card', className)} style={cardStyles}>
    {children}
  </span>
)
