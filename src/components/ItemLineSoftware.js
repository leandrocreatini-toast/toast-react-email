// global
import React from 'react'
// local
import { formatCurrency } from '../utils/text'
import { Row } from './Row'
import { Box } from './Box'
import { Text } from './Text'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  row: 'border-t border-gray-200 border-r-0 border-b-0 border-l-0',
  text: 'type-default mt-2 mb-2',
  price: 'type-default text-right mt-2 mb-2'
})

export const ItemLineSoftware = ({ name, quantity, price }) => (
  <Row style={styles.row}>
    <Box span='4'>
      <Text style={styles.text}>{name}</Text>
    </Box>
    <Box span='2'>
      <Text style={styles.text}>{quantity}</Text>
    </Box>
    <Box span='2'>
      <Text style={styles.price}>{formatCurrency(price, 0)}/month</Text>
    </Box>
  </Row>
)
