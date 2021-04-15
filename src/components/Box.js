// global
import React from 'react'
import cx from 'classnames'

// component
export const Box = ({ children, className, span, valign = 'top', ...rest }) => (
  <td
    valign={valign}
    className={cx({ [`span-${span}`]: Boolean(span) }, className)}
    {...rest}
  >
    {children}
  </td>
)
