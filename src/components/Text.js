// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  text: 'type-default',
  inlineText: 'type-default inline-block'
})

export const Text = ({ children, className, ...rest }) => (
  <p style={styles.text} {...rest}>
    {children}
  </p>
)

export const InlineText = ({ children, className, ...rest }) => (
  <p style={styles.inlineText} {...rest}>
    {children}
  </p>
)
