// global
import React from 'react'
import cx from 'classnames'

// components
export const Layout = ({children, ...rest}) => (
  <span className="layout" {...rest}>
    {children}
  </span>
)

export const Grid = ({children, ...rest}) => (
  <table className="grid" {...rest} border="0" cellPadding="0" cellSpacing="0" width="100%">
    {children}
  </table>
)

export const Row = ({children, ...rest}) => (
  <tr className="row" {...rest}>
    {children}
  </tr>
)

export const Box = ({children, className, span, ...rest}) => (
  <td valign="top" className={cx('box', `span-${span}`, className)} {...rest}>
    {children}
  </td>
)

export const Card = ({children, className}) => (
  <span className={cx('card', className)}>
    {children}
  </span>
)

export const Header = ({children, className, level = 2, ...rest}) => {
  const Component = `h${level.toString()}`
  return (
  <Component className={cx(className, level && Component)} {...rest}>
    {children}
  </Component>
)}

export const Text = ({children, className, ...rest}) => (
  <p className={cx('text', className)} {...rest}>
    {children}
  </p>
)

export const Link = ({children, className, ...rest}) => (
  <a className={cx('link', className)} {...rest} target="_blank" rel="noopener noreferrer nofollow">
    {children}
  </a>
)

export const Microcopy = ({children, className, ...rest}) => (
  <p className={cx('microcopy', className)} {...rest}>
    {children}
  </p>
)

export const Circle = ({children, className, ...rest}) => (
  <span className={cx('circle', className)} {...rest}>
    {children}
  </span>
)

export const Image = ({className, alt, ...rest}) => (
  <img className={cx('image', className)} alt={alt} {...rest} />
)

export const ItemLine = ({item}) => (
  <Row>
    <Box span="1">
      <Text className="text-center">{item.quantity}</Text>
    </Box>
    <Box span="5">
      <Text>{item.name}</Text>
    </Box>
    <Box span="2">
      <Text className="text-right">{item.total}</Text>
    </Box>
  </Row>
)

export const Divider = () => (
  <hr className="divider" />
)
