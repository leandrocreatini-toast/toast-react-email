// global
import React from 'react'
// local
import { formatCurrency } from '../utils/text'
import { Row } from './Row'
import { Box } from './Box'
import { Text } from './Text'

export const ItemLine = ({item, term}) => (
  <Row>
    <Box span="1">
      <Text className="text-center">
        {item.quantity}
      </Text>
    </Box>
    <Box span="5">
      <Text>{item.name}</Text>
    </Box>
    <Box span="2">
      <Text className="text-right">
        {formatCurrency(item.price)}
        {item.price > 0 && term && `/${term}`}
      </Text>
    </Box>
  </Row>
)
