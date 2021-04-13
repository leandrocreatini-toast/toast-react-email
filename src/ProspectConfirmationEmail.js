// global
import React from 'react'
// local
import { fromTailwind } from './utils/mailwind'
import { Layout } from './components/Layout'
import { Text } from './components/Text'
import { Head } from './sections/Head'
import { Footer } from './sections/Footer'
import { NextSteps } from './sections/NextSteps'
import { BillingShipping } from './sections/BillingShipping'
import { Image } from './components/Image'
import { PlanOverview } from './sections/PlanOverview'

const styles = fromTailwind({
  head: 'mb-6',
  pageWrap: 'p-12 bg-white',
  step: 'block clear-fix',
  planDetail: 'block clear-fix text-secondary',
  billing: 'mt-16 mb-16',
  illustration: 'w-full',
  questionCopy: 'text-small text-secondary',
  link: 'text-link',
  footer: 'mt-8'
})

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
          restaurantName="Monk's Cafe"
          items={[
            <Text style={styles.step}>
              Complete restaurant setup, by logging in to your account.
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
      <Image
        style={styles.illustration}
        src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/Illustration.jpg'
      />
      <Footer style={styles.footer} />
    </Layout>
  )
}

export default ProspectConfirmationEmail
