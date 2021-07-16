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
  addressInfo: 'mt-6',
  methodInfo: 'mt-4',
  sectionHeading: 'type-headline-4 mt-1 mb-2',
  text: 'type-default text-gray-60'
})

export const BillingShipping = ({ style }) => {
  return (
    <div style={style}>
      <Grid style={styles.addressInfo}>
        <Row>
          <Box span='4'>
            <Heading level='4' style={styles.sectionHeading}>
              Shipping Info
            </Heading>
            <Text style={styles.text}>Vera Bruklich</Text>
            <Text style={styles.text}>27 Longhill Rd</Text>
            <Text style={styles.text}>Ashland, MA 01721-2426</Text>
            <Text style={styles.text}>United States</Text>
          </Box>
          <Box span='4'>
            <Heading level='4' style={styles.sectionHeading}>
              Billing Info
            </Heading>
            <Text style={styles.text}>Vera Bruklich</Text>
            <Text style={styles.text}>27 Longhill Rd</Text>
            <Text style={styles.text}>Ashland, MA 01721-2426</Text>
            <Text style={styles.text}>United States</Text>
            <Text style={styles.text}>T: 5082156150</Text>
          </Box>
        </Row>
      </Grid>
      <Grid style={styles.methodInfo}>
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
