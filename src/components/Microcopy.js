// global
import React from 'react'
import cx from 'classnames'

export const Microcopy = ({children, className, ...rest}) => (
  <p className={cx('microcopy', className)} {...rest}>
    {children}
  </p>
)
