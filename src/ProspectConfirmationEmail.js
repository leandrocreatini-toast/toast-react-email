// global
import React from 'react'
// local
import { fromTailwind } from './utils/mailwind'
import { Image } from './components/Image'
import { Layout } from './components/Layout'
import { Text } from './components/Text'
import { BillingShipping } from './sections/BillingShipping'
import { Footer } from './sections/Footer'
import { Head } from './sections/Head'
import { NextSteps } from './sections/NextSteps'
import { OrderItemsHardware } from './sections/OrderItemsHardware'
import { OrderItemsSoftware } from './sections/OrderItemsSoftware'
import { PlanOverview } from './sections/PlanOverview'

const styles = fromTailwind({
  head: 'mb-6',
  pageWrap: 'p-12 bg-white',
  nextSteps: 'mb-16',
  step: 'type-default mt-0 mb-2',
  planDetail: 'type-default mt-0 mb-2 text-secondary',
  billing: 'mb-16',
  hardwareItems: 'mb-16',
  softwareItems: 'mb-16',
  questionCopy: 'type-default text-secondary mt-2 mb-10',
  link: 'text-link'
})

console.log(styles)

/* RENDER EMAIL */
function ProspectConfirmationEmail({ data }) {
  return (
    <Layout>
      <div style={styles.pageWrap}>
        <Head
          style={styles.head}
          heading="Thank you for ordering. We're excited to get you started!"
          text="You're almost ready to start using the #1 point of Sale system for Restaurants."
        />

        <NextSteps
          style={styles.nextSteps}
          restaurantName="Monk's Cafe"
          items={[
            <Text style={styles.step}>
              Complete restaurant setup, by{' '}
              <a style={styles.link} href='https://toasttab.com'>
                logging in
              </a>{' '}
              to your account.
            </Text>,
            <Text style={styles.step}>
              Accept contract terms. <b>Hardware ships once accepted.</b>
            </Text>,
            <Text style={styles.step}>
              Set up hardware, and start enjoying Toast!
            </Text>
          ]}
        />

        <BillingShipping style={styles.billing} />

        <OrderItemsHardware style={styles.hardwareItems} />

        <OrderItemsSoftware />

        <PlanOverview
          planType='Pay as You Go pricing'
          items={[
            <Text style={styles.planDetail}>
              Starter Kit and POS Software for $0 down.
            </Text>,
            <Text style={styles.planDetail}>2.99%* + 15¢ per transaction.</Text>
          ]}
        />

        <Text style={styles.questionCopy}>
          Questions? Contact us at{' '}
          <a style={styles.link} href='mailto:toastsupport@toasttab.com'>
            toastsupport@toasttab.com
          </a>
        </Text>
      </div>

      <Footer />
    </Layout>
  )
}

export default ProspectConfirmationEmail
