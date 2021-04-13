// global
import React from 'react'
import cx from 'classnames'

// component
export const Box = ({ children, className, span, ...rest }) => (
  <td
    valign='top'
    className={cx({ [`span-${span}`]: Boolean(span) }, className)}
    {...rest}
  >
    {children}
  </td>
)
