// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  container: 'border-2 border-gray-200 rounded-lg p-4'
})

export const Card = ({ style, children }) => (
  <div style={{ ...styles.container, ...style }}>{children}</div>
)
