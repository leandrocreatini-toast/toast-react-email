// global
import React from 'react'
import cx from 'classnames'

// component
export const Box = ({children, className, span, ...rest}) => (
  <td
    valign="top"
    className={cx('box', `span-${span}`, className)}
    {...rest}
  >
    {children}
  </td>
)
