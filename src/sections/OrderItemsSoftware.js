// global
import * as React from 'react'
import { Box } from '../components/Box'
import { Grid } from '../components/Grid'
// local
import { Heading } from '../components/Heading'
import { FullRow, Row } from '../components/Row'
import { ItemLineSoftware } from '../components/ItemLineSoftware'
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
  totalsGroup: 'w-full',
  detailsGroup: 'mt-8 mb-16 pl-4',
  detail: 'type-small mb-2',
  link: 'text-link'
})

export const OrderItemsSoftware = () => {
  return (
    <div style={styles.container}>
      {/* SOFTWARE */}
      <Grid style={styles.table}>
        {/* Heading */}
        <Row>
          <Box span='4'>
            <Heading level='3' style={styles.headingText}>
              Upcoming Software Charges
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='3' style={styles.headingText}>
              Qty
            </Heading>
          </Box>
          <Box span='2'>
            <Heading level='3' style={styles.headingText} align='right'>
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
          quantity='1'
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
            <Text style={styles.textBold}>Total</Text>
          </Box>
          <Box span='2'>
            <Text style={styles.textPrice}>$294/month</Text>
          </Box>
        </Row>
      </Grid>

      <ul style={styles.detailsGroup}>
        <li style={styles.detail}>
          New subscription charged after your restaurant opens. These fees may
          vary from your normal cycle and your first bill may be prorated.
        </li>
        <li style={styles.detail}>
          If you are billed in arrears, this invoice may be separate from your
          primary cycle.
        </li>
        <li style={styles.detail}>
          Contact Customer Care at{' '}
          <a style={styles.link} href='tel:6176820225'>
            (617) 682-0225
          </a>{' '}
          for questions about your total software bill.
        </li>
      </ul>
    </div>
  )
}
