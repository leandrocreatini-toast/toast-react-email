// global
import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Bullet } from './Bullet'

const styles = fromTailwind({
  container: 'block clear-fix',
  bullet: 'float-left clear-left',
  item: 'ml-2 inline-block float-left clear-right'
})

export const ListItem = ({ children }) => {
  return (
    <div style={styles.container}>
      <Bullet style={styles.bullet} />
      <div style={styles.item}>{children}</div>
    </div>
  )
}
