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
  imageBox: 'w-8',
  image: 'w-6 h-6 mt-1',
  heading: 'type-headline-2 mb-0',
  itemsGroup: { marginBottom: '-8px' }
})

export const NextSteps = ({ style, restaurantName, items }) => {
  return (
    <Card style={style}>
      <Grid style={styles.header}>
        <Row>
          <Box style={styles.imageBox}>
            <Image
              style={styles.image}
              src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/special-request.jpg'
            />
          </Box>
          <Box>
            <Heading level='2' style={styles.heading}>
              What's next for you...
            </Heading>
          </Box>
        </Row>
      </Grid>
      <Grid style={styles.itemsGroup}>
        {items.map((item, idx) => (
          <ListItem key={`step-${idx}`}>{item}</ListItem>
        ))}
      </Grid>
    </Card>
  )
}
