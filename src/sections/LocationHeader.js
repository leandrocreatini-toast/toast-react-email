import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Header } from '../components/Header'
import { Text } from '../components/Text'

const styles = fromTailwind({
  container: {
    marginBottom: '24px',
    borderBottom: '2px solid #080809'
  },
  subheading: 'type-default mt-0 mb-0',
  heading: 'type-headline-2 mt-0 mb-0 uppercase',
  text: 'type-default mt-0 mb-0'
})

export const LocationHeader = ({ number, name }) => {
  return (
    <div style={styles.container}>
      <Text level={4} style={styles.subheading}>
        Location ID: {number}
      </Text>
      <Header level={2} style={styles.heading}>
        {name}
      </Header>
    </div>
  )
}
