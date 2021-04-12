// global
import React from 'react'
// local
import ProspectConfirmationEmail from './ProspectConfirmationEmail'
import UpsellConfirmationEmail from './UpsellConfirmationEmail'

/* RENDER EMAIL */
function Email({ data }) {
  switch (data.emailType) {
    case 'prospect-confirmation-email':
      return <ProspectConfirmationEmail data={data} />
    case 'upsell-confirmation-email':
      return <UpsellConfirmationEmail data={data} />
    default:
      return <span>Specify an email 'type' in the renderer.</span>
  }
}

export default Email
