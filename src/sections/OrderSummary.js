import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Header } from '../components/Header'
import { OrderSummarySection } from './OrderSummarySection'

const styles = fromTailwind({
  container: {
    marginBottom: '24px',
    borderBottom: '2px solid #080809'
  },
  heading: 'type-headline-2 mt-0 mb-0 uppercase'
})

export function OrderSummary({ style }) {
  return (
    <div style={style}>
      <div style={styles.container}>
        <Header level={2} style={styles.heading}>
          Order Summary
        </Header>
      </div>

      <OrderSummarySection title='Hardware Summary' total />

      <OrderSummarySection title='New Software Summary*' />
    </div>
  )
}
