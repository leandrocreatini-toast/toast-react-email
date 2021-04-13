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
  headingText: 'mt-1 mb-5',
  text: 'mt-1 mb-3',
  boldText: 'mt-1 mb-3 font-bold',
  rightText: 'mt-1 mb-3 text-right',
  space: 'block h-12 w-full',
  totalsGroup: 'w-full'
})

export const OrderItems = () => {
  return (
    <div style={styles.container}>
      <Grid style={styles.table}>
        {/* Heading */}
        <Row style={styles.headingGroup}>
          <Box span='4'>
            <Heading level='3' style={styles.headingText}>
              Items
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='3' style={styles.headingText}>
              Quantity
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
          <Box span='3' />
          <Box span='3'>
            <Text style={styles.text}>Subtotal</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.rightText}>$2,446.00</Text>
          </Box>
        </Row>
        <Row>
          <Box span='3' />
          <Box span='3'>
            <Text style={styles.text}>Shipping & Handling</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.rightText}>$36.12</Text>
          </Box>
        </Row>
        <Row>
          <Box span='2' />
          <Box span='3'>
            <Text style={styles.boldText}>Grand Total</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.rightText}>$2,482.12</Text>
          </Box>
        </Row>
      </Grid>
    </div>
  )
}
