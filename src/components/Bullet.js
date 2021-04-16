// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  bullet: {
    display: 'inline-block',
    background: '#ff4c00',
    borderRadius: '50%',
    width: '6px',
    height: '6px',
    margin: '9px'
  }
})

export const Bullet = ({ children, style, ...rest }) => (
  <span style={{ ...styles.bullet, ...style }} {...rest}>
    {children}
  </span>
)
