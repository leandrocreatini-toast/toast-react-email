// global
import * as React from 'react'
import { Box } from '../components/Box'
import { Grid } from '../components/Grid'
// local
import { Heading } from '../components/Heading'
import { FullRow, Row } from '../components/Row'
import { ItemLineSoftware } from '../components/ItemLineSoftware'
import { blend, fromTailwind } from '../utils/mailwind'
import { Text } from '../components/Text'

const styles = fromTailwind({
  container: 'mb-12',
  table: 'border-collapse',
  tableHeader: 'border-b-2 border-t-0 border-r-0 border-l-0 border-gray-200',
  headingText: 'type-headline-2 mt-0 mb-2',
  text: 'type-default text-gray-150 mt-0 mb-3',
  bold: 'font-bold',
  space: 'block h-6 w-full',
  totalsGroup: 'w-full mb-16 text-right',
  link: 'text-link'
})

export const OrderItemsSoftware = ({ style }) => {
  return (
    <div style={style}>
      {/* SOFTWARE */}
      <Grid style={styles.table}>
        {/* Heading */}
        <Row style={styles.tableHeader}>
          <Box span='4'>
            <Heading level='4' style={styles.headingText}>
              Upcoming Software Charges
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='4' style={styles.headingText}>
              Qty
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='4' style={styles.headingText} align='right'>
              Rate
            </Heading>
          </Box>
        </Row>

        {/* Rows of Ordered Items */}
        <ItemLineSoftware
          name='Core Software Subscription'
          quantity='1'
          price='69'
        />
        <ItemLineSoftware
          name='Kitchen Display Screen subscription'
          quantity='1'
          price='25'
        />
        <ItemLineSoftware
          name='Toast Go subscription'
          quantity='2'
          price='100'
        />
        <ItemLineSoftware name='Loyalty subscription' quantity='1' price='50' />
        <ItemLineSoftware
          name='Gift Cards subscription'
          quantity='1'
          price='50'
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
            <Text style={blend(styles.text, styles.bold)}>Total</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.text}>$294/month</Text>
          </Box>
        </Row>
      </Grid>
    </div>
  )
}
