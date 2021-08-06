import * as React from 'react'
// local
import { fromTailwind, blend } from '../utils/mailwind'
import { Box } from '../components/Box'
import { Grid } from '../components/Grid'
import { Heading } from '../components/Heading'
import { Row } from '../components/Row'
import { Text } from '../components/Text'

const styles = fromTailwind({
  table: 'border-collapse',
  tableHeader: 'border-b border-t-0 border-r-0 border-l-0 border-gray-200',
  headingText: 'type-headline-4 mt-0 mb-2',
  text: 'type-default mt-0 mb-0',
  bold: 'font-bold',
  textRight: 'text-right',
  totalsGroup: 'w-full text-right mt-4 mb-6'
})

export function OrderSummarySection({ style, title, total }) {
  return (
    <div style={style}>
      <Grid style={styles.table}>
        {/* Heading */}
        <Row style={styles.tableHeader}>
          <Box span='8'>
            <Heading level='4' style={styles.headingText}>
              {title}
            </Heading>
          </Box>
        </Row>
      </Grid>

      <Grid style={styles.totalsGroup}>
        <Row>
          <Box span='6'>
            <Text style={styles.text}>Frank Pepe Pizzeria</Text>
          </Box>
          <Box span='2'>
            <Text style={blend(styles.text, styles.textRight)}>$2,446.00</Text>
          </Box>
        </Row>

        <Row>
          <Box span='6'>
            <Text style={styles.text}>Red Parka Steakhouse</Text>
          </Box>
          <Box span='2'>
            <Text style={blend(styles.text, styles.textRight)}>$612.14</Text>
          </Box>
        </Row>

        {total ? (
          <Row>
            <Box span='6'>
              <Text style={blend(styles.text, styles.bold)}>Grand Total</Text>
            </Box>
            <Box span='2'>
              <Text style={blend(styles.text, styles.bold)}>$3,255.36</Text>
            </Box>
          </Row>
        ) : null}
      </Grid>
    </div>
  )
}
