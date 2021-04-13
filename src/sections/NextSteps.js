// global
import * as React from 'react'
// local
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { Heading } from '../components/Heading'
import { Image } from '../components/Image'
import { ListItem } from '../components/ListItem'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  header: 'clear-fix mb-4',
  image: 'float-left mr-2',
  h3: 'float-left mt-1 mb-1'
})

export const NextSteps = ({ restaurantName, items }) => {
  return (
    <Card>
      <div style={styles.header}>
        <Image
          style={styles.image}
          src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/special-request.jpg'
        />
        <Heading level='3' style={styles.h3}>
          Next Steps for {restaurantName}...
        </Heading>
      </div>
      <Grid>
        {items.map((item, idx) => (
          <ListItem key={`step-${idx}`}>{item}</ListItem>
        ))}
      </Grid>
    </Card>
  )
}
