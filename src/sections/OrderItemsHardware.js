// global
import * as React from 'react'
import { Box } from '../components/Box'
import { Grid } from '../components/Grid'
// local
import { Heading } from '../components/Heading'
import { FullRow, Row } from '../components/Row'
import { ItemLine } from '../components/ItemLine'
import { fromTailwind } from '../utils/mailwind'
import { Text } from '../components/Text'

const styles = fromTailwind({
  container: 'mb-12',
  table: 'border-collapse',
  headingText: 'type-headline-2 mt-0 mb-2',
  text: 'type-default text-gray-150 mt-0 mb-3',
  textBold: 'type-default text-gray-150 mt-0 mb-3 font-bold',
  textPrice: 'type-default text-gray-150 mt-0 mb-3 text-right',
  space: 'block h-6 w-full',
  totalsGroup: 'w-full'
})

export const OrderItemsHardware = ({ style }) => {
  return (
    <div style={style}>
      {/* HARDWARE + INSTALLATION ITEMS */}
      <Grid style={styles.table}>
        {/* Heading */}
        <Row>
          <Box span='4'>
            <Heading level='3' style={styles.headingText}>
              Items
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='3' style={styles.headingText}>
              Qty
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='3' style={styles.headingText} align='right'>
              Price
            </Heading>
          </Box>
        </Row>
        {/* Rows of Ordered Items */}
        <ItemLine name='Toast Flex POS' quantity='1' price='499.00' />
        <ItemLine name='Toast Tap' quantity='1' price='149.99' />
        <ItemLine name='Router (Meraki Z3)' quantity='1' price='99.99' />
        <ItemLine name='Toast Go 2' quantity='2' price='399.98' />
        <ItemLine
          name='Professional Remote Install'
          quantity='1'
          price='99.99'
        />
        {/* Space */}
        <FullRow>
          <span style={styles.space} />
        </FullRow>
      </Grid>
      {/* Subtotal & Total */}
      <Grid style={styles.totalsGroup}>
        <Row>
          <Box span='4' />
          <Box span='2'>
            <Text style={styles.text}>Subtotal</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.textPrice}>$2,446.00</Text>
          </Box>
        </Row>
        <Row>
          <Box span='4' />
          <Box span='2'>
            <Text style={styles.text}>Shipping & Handling</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.textPrice}>$36.12</Text>
          </Box>
        </Row>
        <Row>
          <Box span='4' />
          <Box span='2'>
            <Text style={styles.textBold}>Grand Total</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.textPrice}>$2,482.12</Text>
          </Box>
        </Row>
      </Grid>
    </div>
  )
}
