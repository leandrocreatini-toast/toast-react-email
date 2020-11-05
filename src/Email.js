// global
import React from 'react'
// local
import ConfirmationEmail from './ConfirmationEmail'

/* RENDER EMAIL */
function Email({ data }) {
  switch (data.emailType) {
    case 'confirmation':
      return <ConfirmationEmail data={data} />
    default:
      return <span>Specify an email 'type' in the renderer.</span>
  }
}

export default Email;
