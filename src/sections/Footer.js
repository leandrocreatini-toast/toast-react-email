// global
import * as React from 'react'
// local
import { ToastLogo } from '../components/ToastLogo'
import { Image } from '../components/Image'
import { Text } from '../components/Text'
import { Legal } from '../sections/Legal'
import { fromTailwind } from '../utils/mailwind'
import { Grid } from '../components/Grid'
import { Box } from '../components/Box'
import { Row } from '../components/Row'

const styles = fromTailwind({
  illustration: 'w-full mb-8',
  aboutUsGroup: 'w-full mb-8',
  companyInfoGroup: { marginBottom: '-8px' },
  copyright: 'type-small mt-0 mb-2',
  address: 'type-small mt-0 mb-0',
  socialIconGroup: 'mt-2',
  socialIcon: 'h-8 ml-2',
  logo: 'mb-14'
})

export const Footer = ({ style }) => {
  return (
    <div style={style}>
      <Image
        style={styles.illustration}
        src='https://d2w1ef2ao9g8r9.cloudfront.net/images/email-images/Illustration.jpg'
      />

      <Grid style={styles.aboutUsGroup}>
        <Row>
          <Box span='4' style={styles.companyInfoGroup}>
            <Text style={styles.copyright}>Copyright @ 2021 Toast Inc.</Text>
            <Text style={styles.address}>
              401 Park Drive Suite 801 Boston, MA 02215
            </Text>
          </Box>

          <Box
            span='4'
            style={styles.socialIconGroup}
            valign='bottom'
            align='right'
          >
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
          </Box>
        </Row>
      </Grid>

      <Grid>
        <ToastLogo style={styles.logo} />
      </Grid>

      <Legal />
    </div>
  )
}
