// global
import * as React from 'react'
import { Box } from '../components/Box'
// local
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { Heading } from '../components/Heading'
import { Image } from '../components/Image'
import { ListItem } from '../components/ListItem'
import { Row } from '../components/Row'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  header: 'mb-4',
  imageBox: 'w-10',
  image: 'mt-1 mr-2',
  heading: 'mt-1 mb-1'
})

export const NextSteps = ({ restaurantName, items }) => {
  return (
    <Card>
      <Grid style={styles.header}>
        <Row>
          <Box style={styles.imageBox}>
            <Image
              style={styles.image}
              src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/special-request.jpg'
            />
          </Box>
          <Box>
            <Heading level='3' style={styles.heading}>
              Next Steps for {restaurantName}...
            </Heading>
          </Box>
        </Row>
      </Grid>
      <Grid>
        {items.map((item, idx) => (
          <ListItem key={`step-${idx}`}>{item}</ListItem>
        ))}
      </Grid>
    </Card>
  )
}
