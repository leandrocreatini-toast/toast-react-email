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
  logo: 'mb-8',
  order: 'pb-10',
  h1: 'type-headline-1 mb-6',
  h2: 'type-headline-4',
  text: 'type-default text-gray-60'
})

export const Head = ({ style, heading, text }) => {
  return (
    <Grid style={style}>
      <FullRow>
        <ToastLogo style={styles.logo} />
      </FullRow>
      <FullRow style={styles.order}>
        <Heading level='4' style={styles.h2}>
          Your Order #000014011
        </Heading>
        <Text style={styles.text}>
          Placed on Mar 17, 2021, 8:45:35 AM (EST)
        </Text>
      </FullRow>
      <FullRow>
        <Heading level='1' style={styles.h1}>
          {heading}
        </Heading>
        <Text style={styles.text}>{text}</Text>
      </FullRow>
    </Grid>
  )
}
