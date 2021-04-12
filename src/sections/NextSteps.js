// global
import * as React from 'react'
// local
import { Heading } from '../components/Heading'
import { ListItem } from '../components/ListItem'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  container: 'border-2 border-gray-200 rounded-lg p-6'
})

export const NextSteps = ({ restaurantName, items }) => {
  return (
    <div style={styles.container}>
      <Heading level='3'>Next Steps for {restaurantName}...</Heading>
      <div>
        {items.map((item, idx) => (
          <ListItem key={`step-${idx}`}>{item}</ListItem>
        ))}
      </div>
    </div>
  )
}
