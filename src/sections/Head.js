// global
import * as React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'
import { Grid } from '../components/Grid'
import { Heading } from '../components/Heading'
import { ToastLogo } from '../components/ToastLogo'
import { FullRow } from '../components/Row'
import { Text } from '../components/Text'

const styles = fromTailwind({
  logo: 'mb-12',
  heading: 'type-headline-1 mb-6',
  subtext: 'type-default text-secondary'
})

export const Head = ({ style, heading, text }) => {
  return (
    <Grid style={style}>
      <ToastLogo style={styles.logo} />
      <FullRow>
        <Heading level='1' style={styles.heading}>
          {heading}
        </Heading>
        <Text style={styles.subtext}>{text}</Text>
      </FullRow>
    </Grid>
  )
}
