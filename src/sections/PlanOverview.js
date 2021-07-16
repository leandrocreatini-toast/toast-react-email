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
  container: 'mb-2',
  header: 'mb-4',
  imageBox: 'w-8',
  image: 'w-6 h-6 mt-1',
  heading: 'type-headline-4 mt-1',
  itemsGroup: { marginBottom: '-8px' }
})

export const PlanOverview = ({ planType, items }) => {
  return (
    <Card style={styles.container}>
      <Grid style={styles.header}>
        <Row>
          <Box style={styles.imageBox}>
            <Image
              style={styles.image}
              src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/your-plan.png'
            />
          </Box>
          <Box>
            <Heading level='4' style={styles.heading}>
              Your plan: <b>{planType}</b>
            </Heading>
          </Box>
        </Row>
      </Grid>
      <Grid style={styles.itemsGroup}>
        {items.map((item, idx) => (
          <ListItem secondary key={`detail-${idx}`}>
            {item}
          </ListItem>
        ))}
      </Grid>
    </Card>
  )
}
