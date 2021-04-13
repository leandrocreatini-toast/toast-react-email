// global
import React from 'react'
// local
import { fromTailwind } from './utils/mailwind'
import { Layout } from './components/Layout'
import { Text } from './components/Text'
import { Head } from './sections/Head'
import { NextSteps } from './sections/NextSteps'
import { BillingShipping } from './sections/BillingShipping'

const styles = fromTailwind({
  head: 'mb-6',
  step: 'block clear-fix',
  billing: 'mt-16 mb-16'
})

/* RENDER EMAIL */
function ProspectConfirmationEmail({ data }) {
  return (
    <Layout>
      <Head
        style={styles.head}
        heading="Thank you for ordering. We're excited to get you started!"
        text="You're almost ready to start using the #1 point of Sale system for Restaurants."
      />
      <NextSteps
        restaurantName="Monk's Cafe"
        items={[
          <Text style={styles.step}>
            Complete restaurant setup, by logging in to your account.
          </Text>,
          <Text style={styles.step}>
            Accept contract terms.{' '}
            <strong>Hardware ships once accepted.</strong>
          </Text>,
          <Text style={styles.step}>
            Set up hardware, and start enjoying Toast!
          </Text>
        ]}
      />
      <BillingShipping style={styles.billing} />
    </Layout>
  )
}

export default ProspectConfirmationEmail
