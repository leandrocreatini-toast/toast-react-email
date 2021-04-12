// global
import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Heading } from '../components/Heading'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Row } from '../components/Row'
import { Box } from '../components/Box'

const styles = fromTailwind({
  heading: 'type-headline-4',
  subheading: 'type-headline-5',
  sectionHeading: 'type-default mb-3',
  text: 'type-small text-gray-75 leading-none mt-1 mb-2'
})

export const BillingShipping = ({ style, orderNumber, orderDate }) => {
  return (
    <div style={style}>
      <Heading level='3' style={styles.heading}>
        Your Order #{orderNumber}
      </Heading>
      <Text style={styles.subheading}>Placed on {orderDate}</Text>
      <Grid>
        <Row>
          <Box span='4'>
            <Heading level='4' style={styles.sectionHeading}>
              Billing
            </Heading>
            <Text style={styles.text}>Vera Bruklich</Text>
            <Text style={styles.text}>27 Longhill Rd</Text>
            <Text style={styles.text}>Ashland, MA 01721-2426</Text>
            <Text style={styles.text}>United States</Text>
            <Text style={styles.text}>T: 5082156150</Text>
          </Box>
          <Box span='4'>
            <Heading level='4' style={styles.sectionHeading}>
              Shipping
            </Heading>
            <Text style={styles.text}>Vera Bruklich</Text>
            <Text style={styles.text}>27 Longhill Rd</Text>
            <Text style={styles.text}>Ashland, MA 01721-2426</Text>
            <Text style={styles.text}>United States</Text>
            <Text style={styles.text}>T: 5082156150</Text>
          </Box>
        </Row>
        <Row>
          <Box span='4'>
            <Heading level='4' style={styles.sectionHeading}>
              Shipping Method
            </Heading>
            <Text style={styles.text}>Toast Shipping - Ground</Text>
          </Box>
          <Box span='4'></Box>
        </Row>
      </Grid>
    </div>
  )
}
