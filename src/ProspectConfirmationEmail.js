// global
import React from 'react'
// local
import { fromTailwind } from './utils/mailwind'
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
  pageWrap: 'p-12 pb-22 bg-white',
  section: 'mb-16',
  listItem: 'type-default mt-0 mb-2',
  questionCopy: 'type-default mt-2',
  link: 'text-link'
})

/* RENDER EMAIL */
function ProspectConfirmationEmail() {
  return (
    <Layout>
      <div style={styles.pageWrap}>
        <Head
          style={styles.head}
          heading="Thank you for ordering. We're excited to get you started!"
          text="You're almost ready to start using the #1 point of Sale system for Restaurants."
        />

        <NextSteps
          style={styles.section}
          restaurantName="Monk's Cafe"
          items={[
            <Text style={styles.listItem}>
              Complete restaurant setup, by{' '}
              <a style={styles.link} href='https://toasttab.com'>
                logging in
              </a>{' '}
              to your account.
            </Text>,
            <Text style={styles.listItem}>
              Accept contract terms. <b>Hardware ships once accepted.</b>
            </Text>,
            <Text style={styles.listItem}>
              Set up hardware, and start enjoying Toast!
            </Text>
          ]}
        />

        <BillingShipping style={styles.section} />

        <OrderItemsHardware style={styles.section} />

        <OrderItemsSoftware style={styles.section} />

        <PlanOverview
          planType='Pay as You Go pricing'
          items={[
            <Text style={styles.listItem}>
              Starter Kit and POS Software for $0 down.
            </Text>,
            <Text style={styles.listItem}>2.99%* + 15¢ per transaction.</Text>
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
