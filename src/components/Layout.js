// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  container: 'block mt-12 mb-12 mr-auto ml-auto'
})

// component
export const Layout = ({ children, className, ...rest }) => (
  <span className='layout' style={styles.container} {...rest}>
    {children}
  </span>
)
