// global
import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Box } from './Box'
import { Bullet } from './Bullet'
import { Row } from './Row'

const styles = fromTailwind({
  container: '',
  bulletBox: 'w-4 h-6',
  bullet: 'w-2 h-2 m-2',
  bulletSecondary: 'w-2 h-2 m-2 bg-gray-75',
  itemBox: 'w-full',
  item: 'mt-1 mb-2 ml-1 inline-block'
})

export const ListItem = ({ secondary, children }) => {
  return (
    <Row style={styles.container}>
      <Box style={styles.bulletBox}>
        <Bullet style={secondary ? styles.bulletSecondary : styles.bullet} />
      </Box>
      <Box style={styles.itemBox}>
        <div style={styles.item}>{children}</div>
      </Box>
    </Row>
  )
}
