// global
import React from 'react'

// component
export const Grid = ({ children, ...rest }) => (
  <table border='0' cellPadding='0' cellSpacing='0' width='100%' {...rest}>
    {children}
  </table>
)
