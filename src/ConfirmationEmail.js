// global
import React from 'react'
// local
import { Box } from './components/Box'
import { Card } from './components/Card'
import { Circle } from './components/Circle'
import { Divider } from './components/Divider'
import { Grid } from './components/Grid'
import { Header } from './components/Header'
import { Image } from './components/Image'
import { ItemLine } from './components/ItemLine'
import { Layout } from './components/Layout'
import { Link } from './components/Link'
import { Microcopy } from './components/Microcopy'
import { Row, FullRow } from './components/Row'
import { Text } from './components/Text'

const isSubscription = (item) => item.product_type === 'software'
const isHardware = (item) => item.product_type === 'hardware'
const getPaymentMethod = (intent) => intent.instrumentType === 'STRIPE_PAYMENT_INSTRUMENT' ? 'Credit Card' : 'ACH'

/* RENDER EMAIL */
function ConfirmationEmail({ data }) {
  const { order, payment_intent, order_date_time } = data

  const cartItems = order.cartBundle.cart.items
  const subscriptionItems = cartItems.filter(isSubscription)
  const hardwareItems = cartItems.filter(isHardware)

  return (
    <Layout>
      <Grid>
        <FullRow align="center">
          <Image
            className="logo mb-10"
            src="https://cdn.toasttab.com/static/d2ccf73204a9f598b46289ae4f168db2a888e8be/images/ecomm/email/activation/header_logo_toast.png"
            alt="Toast logo"
          />
        </FullRow>
      </Grid>

      <Card>
        <Grid>
          <FullRow align="center">
            <Image
              width="200px"
              className="mt-4 mb-8"
              src="https://cdn.toasttab.com/static/3499b6a3a399778caddb37da2eacc61997100219/images/ecomm/email/confirmation/growing-restaurant.png"
              alt="Growing Restaurant"
            />
          </FullRow>
        </Grid>
        <Header level={1} className="text-center">
          {order.restaurantName} is growing!
        </Header>
        <Text className="text-center m-0">
          We've received your order and we're excited to help you grow your business!
        </Text>
      </Card>

      <Card>
        <Header level={3}>What's next?</Header>
        <Grid>
          <Row>
            <Box span="1">
              <Circle className="mr-4 mb-4">1</Circle>
            </Box>
            <Box span="7">
              <Text className="mt-2">
                Your hardware should be shipped within 5-7 days.
              </Text>
            </Box>
          </Row>
          <Row>
            <Box span="1">
              <Circle className="mr-4">2</Circle>
            </Box>
            <Box span="7">
              <Text>
                You’ll receive a confirmation email with your <b>tracking{' '}
                information</b> as soon your hardware ships.
              </Text>
            </Box>
          </Row>
        </Grid>
      </Card>

      <Card>
        <Grid>
          <FullRow>        
            <Header level={2}>Order Details</Header>
            <Text>Order #{order.orderId}</Text>
            <Text className="mb-6">
              Date Ordered: {new Date(order_date_time).toLocaleDateString()}
            </Text>
          </FullRow>
        </Grid>
        <Grid>
          <Row>
            <Box span="4">
              <Header level={4}>Shipping Info</Header>
              <Text className="text-sm">
                {order.contact.firstName} {order.contact.lastName}
              </Text>
              {order.shippingAddress.streets.map(street =>
                <Text className="text-sm" key={street}>{street}</Text>
              )}
              <Text className="text-sm">
                {order.shippingAddress.city}, {order.shippingAddress.regionCode}, {order.shippingAddress.postCode}
              </Text>
              <Text className="text-sm mb-6">T: {order.contact.phone}</Text>
            </Box>
            <Box span="4">
              <Header level={4}>Shipping Method</Header>
              <Text className="text-sm">Ground</Text>
            </Box>
          </Row>
          <Row>
            <Box span="4">
              <Header level={4}>Biling Info</Header>
              <Text className="text-sm">
                {order.contact.firstName} {order.contact.lastName}
              </Text>
              {order.billingAddress.streets.map(street =>
                <Text className="text-sm" key={street}>{street}</Text>
              )}
              <Text className="text-sm">
                {order.billingAddress.city}, {order.billingAddress.regionCode}, {order.billingAddress.postCode}
              </Text>
              <Text className="text-sm mb-6">T: {order.contact.phone}</Text>
            </Box>
            <Box span="4">
              <Header level={4}>Payment Method</Header>
              <Text className="text-sm">
                {getPaymentMethod(payment_intent)}
              </Text>
            </Box>
          </Row>
        </Grid>
      </Card>

      <Card className="mb-10">
        <Header level={2}>Order Summary</Header>
        {subscriptionItems.length > 0 && (
          <>
            <Header level={4} className="mb-2">Subscription</Header>
            <Microcopy className="mb-4">
              New charges begin upon statement cycle.*
            </Microcopy>
            <Grid className="mb-4">
              {subscriptionItems.map(item =>
                <ItemLine
                  key={item.sku}
                  item={item}
                  term={order.cartBundle.term}
                />
              )}
            </Grid>
          </>
        )}
        {hardwareItems.length > 0 && (
          <>
            <Header level={4}>Hardware</Header>
            <Grid>
              {hardwareItems.map(item =>
                <ItemLine key={item.sku} item={item} />
              )}
            </Grid>
          </>
        )}

        <Divider />

        <Grid>
          <Row>
            <Box span="6">
              <Text>Shipping</Text>
            </Box>
            <Box span="2">
              <Text className="text-right">
                ${order.taxShipping.shipping}
              </Text>
            </Box>
          </Row>
          <Row>
            <Box span="6">
              <Text className="m-0">Sales Tax</Text>
            </Box>
            <Box span="2">
              <Text className="text-right m-0">
                ${order.taxShipping.tax}
              </Text>
            </Box>
          </Row>
        </Grid>

        <Divider />
        
        <Grid>
          <Row>
            <Box span="6">
              <Text className="h3">Total</Text>
            </Box>
            <Box span="2">
              <Text className="h2 text-right m-0">
                ${order.grandTotal}
              </Text>
              <Text className="text-right">Paid Today</Text>
            </Box>
          </Row>
        </Grid>
      </Card>
      
      <Grid>
        <FullRow align="center" className="mb-4">
          <Image 
            className="mb-4"
            src="https://cdn.toasttab.com/static/9571ead87167510edcf8ab5b974d5eea79937320/images/powered-by-toast-orange.png"
            alt="powered by Toast"
          />
        </FullRow>
        <FullRow align="center">
            <Link className="mb-2">Privacy Policy</Link>{' '}|{' '}
            <Link>Terms of Service</Link>{' '}|{' '}
            <Link>Refer a Restaurant & Earn $500</Link>
        </FullRow>
        <FullRow>
          <Microcopy className="text-center">
            ©Toast, Inc. {new Date().getFullYear()}. All Rights Reserved
          </Microcopy>
        </FullRow>
      </Grid>
    </Layout>
  );
}

export default ConfirmationEmail;
