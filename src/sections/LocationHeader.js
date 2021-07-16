import * as React from 'react'
// local
import { Header } from '../components/Header'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  container: {
    marginBottom: '24px',
    borderBottom: '2px solid #080809'
  },
  subheading: 'type-headline-4 mt-0 mb-0',
  heading: 'type-headline-2 mt-0 mb-0 uppercase'
})

export const LocationHeader = ({ number, name }) => {
  return (
    <div style={styles.container}>
      <Header level={4} style={styles.subheading}>
        Shipment {number}.
      </Header>
      <Header level={2} style={styles.heading}>
        {name}
      </Header>
    </div>
  )
}
