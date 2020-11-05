// global
import React from 'react'
// local
import { Box } from './Box'

// component
export const Row = ({children, ...rest}) => (
  <tr className="row" {...rest}>
    {children}
  </tr>
)

export const FullRow = ({children, align, ...rest}) => (
  <Row align={align}>
    <Box span="8" {...rest}>
      {children}
    </Box>
  </Row>
)
