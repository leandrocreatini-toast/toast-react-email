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
  heading: 'type-headline-1',
  subtext: 'type-overline text-gray-75 mb-8'
})

export const Head = ({ style, heading, text }) => {
  return (
    <Grid style={style}>
      <ToastLogo />
      <FullRow>
        <Heading level='1' style={styles.heading}>
          {heading}
        </Heading>
        <Text style={styles.subtext}>{text}</Text>
      </FullRow>
    </Grid>
  )
}
