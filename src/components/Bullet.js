// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  bullet: 'w-2 h-2 m-2 bg-brand-50 inline-block rounded-full'
})

export const Bullet = ({ children, style, ...rest }) => (
  <span style={{ ...styles.bullet, ...style }} {...rest}>
    {children}
  </span>
)
