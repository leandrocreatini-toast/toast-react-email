// global
import React from 'react'
// local
import { fromTailwind } from '../utils/mailwind'

const styles = fromTailwind({
  link: 'cursor-pointer'
})

export const ImageLink = ({ className, href, alt, ...rest }) => (
  <a
    style={styles.link}
    href={href}
    target='_blank'
    rel='noreferrer noopener nofollow'
  >
    <img alt={alt} {...rest} />
  </a>
)
