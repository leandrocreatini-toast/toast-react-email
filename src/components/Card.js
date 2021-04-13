// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  container: 'border-2 border-gray-200 rounded-lg p-6'
})

export const Card = ({ children }) => (
  <div style={styles.container}>{children}</div>
)
