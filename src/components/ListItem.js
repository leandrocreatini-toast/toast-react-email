// global
import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Box } from './Box'
import { Bullet } from './Bullet'
import { Row } from './Row'

const styles = fromTailwind({
  bulletBox: 'w-4',
  bullet: 'w-2 h-2',
  bulletSecondary: 'w-2 h-2 bg-gray-75',
  itemBox: 'w-full',
  item: 'ml-1 inline-block'
})

export const ListItem = ({ secondary, children }) => {
  return (
    <Row>
      <Box style={styles.bulletBox}>
        <Bullet style={secondary ? styles.bulletSecondary : styles.bullet} />
      </Box>
      <Box style={styles.itemBox}>
        <div style={styles.item}>{children}</div>
      </Box>
    </Row>
  )
}
