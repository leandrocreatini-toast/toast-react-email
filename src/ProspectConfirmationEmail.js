// global
import React from 'react'
// local
import { fromTailwind } from './utils/mailwind'
import { Layout } from './components/Layout'
import { Text } from './components/Text'
import { LocationHeader } from './sections/LocationHeader'
import { BillingShipping } from './sections/BillingShipping'
import { Footer } from './sections/Footer'
import { Head } from './sections/Head'
import { NextSteps } from './sections/NextSteps'
import { OrderItemsHardware } from './sections/OrderItemsHardware'
import { OrderItemsSoftware } from './sections/OrderItemsSoftware'
import { OrderSummary } from './sections/OrderSummary'
import { PlanOverview } from './sections/PlanOverview'

const styles = fromTailwind({
  head: 'mb-6',
  pageWrap: 'p-12 pb-22 bg-white',
  section: 'mb-16',
  subsection: 'mb-6',
  listItem: 'type-default mt-0 mb-2',
  link: 'text-link',
  questionCopy: 'type-default mb-8',
  detailsGroup: 'mt-8 mb-16',
  detail: 'type-small mb-2'
})

/* RENDER EMAIL */
function ProspectConfirmationEmail() {
  return (
    <Layout>
      <div style={styles.pageWrap}>
        <Head
          style={styles.head}
          heading="Thank you for ordering. We're excited to get you started!"
          text="You're almost ready to start using the #1 Point of Sale system for Restaurants."
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

        <div style={styles.section}>
          <LocationHeader number={1} name="Monk's Cafe" />
          <BillingShipping style={styles.subsection} />
          <OrderItemsHardware style={styles.subsection} />
          <OrderItemsSoftware />
        </div>

        <div style={styles.section}>
          <LocationHeader number={2} name="Frank Pepe's Pizzeria" />
          <BillingShipping style={styles.subsection} />
          <OrderItemsHardware style={styles.subsection} />
          <OrderItemsSoftware />
        </div>

        <OrderSummary style={styles.section} />

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

        <div style={styles.detailsGroup}>
          <p style={styles.detail}>
            *Software subscriptions will be charged to the payment method on
            file for each restaurant where the software is in use.
          </p>
          <p style={styles.detail}>
            New subscriptions will be charged on your next billing cycle in
            addition to any other subscriptions you already have. These fees may
            vary from your normal cycle and your first bill may be prorated. If
            you are billed in arrears, this invoice may be separate from your
            primary cycle. Contact Customer Care at{' '}
            <a style={styles.link} href='tel:6176820225'>
              (617) 682-0225
            </a>{' '}
            for questions about your total software bill.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default ProspectConfirmationEmail
