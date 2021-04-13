// global
import * as React from 'react'
// local
import { Card } from '../components/Card'
import { Heading } from '../components/Heading'
import { Image } from '../components/Image'
import { ListItem } from '../components/ListItem'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  head: 'clear-fix mb-4',
  image: 'float-left mr-2',
  heading: 'float-left mt-1 mb-1 font-normal'
})

export const PlanOverview = ({ planType, items }) => {
  return (
    <Card>
      <div style={styles.head}>
        <Image
          style={styles.image}
          src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/special-request.jpg'
        />
        <Heading level='3' style={styles.heading}>
          Your plan: <b>{planType}</b>
        </Heading>
      </div>
      <div>
        {items.map((item, idx) => (
          <ListItem key={`detail-${idx}`}>{item}</ListItem>
        ))}
      </div>
    </Card>
  )
}
