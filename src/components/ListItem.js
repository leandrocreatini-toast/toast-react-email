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
  bulletSecondary: {
    width: '4px',
    height: '4px',
    margin: '10px 8px',
    background: '#525252'
  },
  itemBox: 'w-full',
  item: 'mt-1 mb-2 ml-1 inline-block'
})

export const ListItem = ({ secondary, children }) => {
  return (
    <Row style={styles.container}>
      <Box style={styles.bulletBox}>
        <Bullet style={secondary && styles.bulletSecondary} />
      </Box>
      <Box style={styles.itemBox}>
        <div style={styles.item}>{children}</div>
      </Box>
    </Row>
  )
}
