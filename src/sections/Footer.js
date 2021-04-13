// global
import * as React from 'react'
// local
import { ToastLogo } from '../components/ToastLogo'
import { Image } from '../components/Image'
import { Text } from '../components/Text'
import { Legal } from '../sections/Legal'
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  companyInfoGroup: 'clear-fix w-full mb-8',
  copyrightGroup: 'float-left',
  copyright: 'type-small text-xs mt-1 mb-2',
  socialIconGroup: 'float-right mt-2',
  socialIcon: 'h-8 ml-2',
  logo: 'mb-20'
})

export const Footer = ({ style }) => {
  return (
    <div style={style}>
      <div style={styles.companyInfoGroup}>
        <div style={styles.copyrightGroup}>
          <Text style={styles.copyright}>Copyright @ 2021 Toast Inc.</Text>
          <Text style={styles.copyright}>
            401 Park Drive Suite 801 Boston, MA 02215
          </Text>
        </div>
        <div style={styles.socialIconGroup}>
          <Image
            style={styles.socialIcon}
            src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/linkedin.jpg'
          />
          <Image
            style={styles.socialIcon}
            src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/facebook.jpg'
          />
          <Image
            style={styles.socialIcon}
            src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/twitter.jpg'
          />
          <Image
            style={styles.socialIcon}
            src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/instagram-icon.jpg'
          />
        </div>
      </div>
      <ToastLogo style={styles.logo} />
      <Legal />
    </div>
  )
}
