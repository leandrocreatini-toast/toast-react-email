// global
import * as React from 'react'
// local
import { blend, fromTailwind } from '../utils/mailwind'
import { Image } from './Image'
import { FullRow } from './Row'

const styles = fromTailwind({
  image: 'h-7 mb-4'
})

export const ToastLogo = ({ style }) => {
  return (
    <FullRow align='left'>
      <Image
        style={blend(styles.image, style)}
        src='https://cdn.toasttab.com/static/d2ccf73204a9f598b46289ae4f168db2a888e8be/images/ecomm/email/activation/header_logo_toast.png'
        alt='Toast logo'
      />
    </FullRow>
  )
}
