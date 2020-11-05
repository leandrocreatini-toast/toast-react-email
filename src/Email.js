// global
import React from 'react'
// local
import {
  Layout,
  Grid,
  Row,
  Box,
  Card,
  Header,
  Text,
  Link,
  Microcopy,
  Circle,
  ItemLine
} from './components'

const isSubscription = (item) => item.category === 'software'
const isHardware = (item) => item.category === 'hardware'

/* RENDER EMAIL */
function Email({ data }) {
  const subscriptionItems = data.items.filter(isSubscription)
  const hardwareItems = data.items.filter(isHardware)

  return (
    <Layout>
      <Grid>
        <Row align="center">
          <Box span="8">
            <img
              className="logo mb-10"
              src="https://cdn.toasttab.com/static/d2ccf73204a9f598b46289ae4f168db2a888e8be/images/ecomm/email/activation/header_logo_toast.png"
              alt="Toast logo"
            />
          </Box>
        </Row>
      </Grid>

      <Card>
        <Grid>
          <Row align="center">
            <Box span="8">
              <img
                className="mt-4 mb-8"
                src="https://cdn.toasttab.com/static/8b28841d401526fc7176cecf2d2f2cf95171ec82/images/project_ui/celebration.svg"
                alt="Welcome"
              />
            </Box>
          </Row>
        </Grid>
        <Header level={1} className="text-center">
          {data.restaurantName} is growing!
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
              <Text className="mt-2">Your hardware should be shipped within 5-7 days.</Text>
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
        <Header level={2}>Order Details</Header>
        <Text className="mb-2">Order #{data.orderNumber}</Text>
        <Text className="mb-6">Date Ordered: {data.orderDate}</Text>
        <Grid>        
          <Row>
            <Box span="4" className="">
              <Header level={4}>Shipping Info</Header>
              <Text className="text-sm">{data.shipping.customerName}</Text>
              <Text className="text-sm">{data.shipping.addressLineOne}</Text>
              {data.shipping.addressLineTwo && <Text className="text-sm">{data.shipping.addressLineTwo}</Text>}
              <Text className="text-sm">{data.shipping.city}, {data.shipping.state}, {data.shipping.zip}</Text>
              <Text className="text-sm mb-6">T: {data.shipping.phone}</Text>
            </Box>
            <Box span="4">
              <Header level={4}>Shipping Method</Header>
              <Text className="text-sm">{data.shipping.method}</Text>
            </Box>
          </Row>
          <Row>
            <Box span="4">
              <Header level={4}>Biling Info</Header>
              <Text className="text-sm">{data.billing.customerName}</Text>
              <Text className="text-sm">{data.billing.addressLineOne}</Text>
              {data.billing.addressLineTwo && <Text className="text-sm">{data.billing.addressLineTwo}</Text>}
              <Text className="text-sm">{data.billing.city}, {data.billing.state}, {data.billing.zip}</Text>
              <Text className="text-sm m-0">T: {data.billing.phone}</Text>
            </Box>
            <Box span="4">
              <Header level={4}>Payment Method</Header>
              <Text className="text-sm">{data.billing.method}</Text>
            </Box>
          </Row>
        </Grid>
      </Card>

      <Card className="mb-10">
        <Header level={2}>Order Summary</Header>
        {subscriptionItems.length > 0 && (
          <>
            <Header level={4} className="mb-2">Subscription</Header>
            <Microcopy className="mb-4">New charges begin upon statement cycle.*</Microcopy>
            <Grid className="mb-4">
              {subscriptionItems.map(item => <ItemLine key={item.sku} item={item} />)}
            </Grid>
          </>
        )}
        {hardwareItems.length > 0 && (
          <>
            <Header level={4}>Hardware</Header>
            <Grid>
              {hardwareItems.map(item => <ItemLine key={item.sku} item={item} />)}
            </Grid>
          </>
        )}
        <hr />
        <Grid>
          <Row>
            <Box span="6">
              <Text>Shipping</Text>
            </Box>
            <Box span="2">
              <Text className="text-right">${data.shippingCost}</Text>
            </Box>
          </Row>
          <Row>
            <Box span="6">
              <Text className="m-0">Sales Tax</Text>
            </Box>
            <Box span="2">
              <Text className="text-right m-0">${data.salesTax}</Text>
            </Box>
          </Row>
        </Grid>
        <hr />
        <Grid>
          <Row>
            <Box span="6">
              <Text className="h3">Total</Text>
            </Box>
            <Box span="2">
              <Text className="h2 text-right m-0">${data.totalCost}</Text>
              <Text className="text-right">Paid Today</Text>
            </Box>
          </Row>
        </Grid>
      </Card>
      
      <Grid>
        <Row align="center">
          <Box span="8" className="mb-4">
            <img 
              className="mb-4"
              src="https://cdn.toasttab.com/static/9571ead87167510edcf8ab5b974d5eea79937320/images/powered-by-toast-orange.png"
              alt="powered by Toast"
            />
          </Box>
        </Row>
        <Row align="center">
          <Box span="8">
            <Link className="mb-2">Privacy Policy</Link>{' '}|{' '}
            <Link>Terms of Service</Link>{' '}|{' '}
            <Link>Refer a Restaurant & Earn $500</Link>
          </Box>
        </Row>
        <Row>
          <Box span="8">
            <Microcopy className="text-center">©Toast, Inc. {new Date().getFullYear()}. All Rights Reserved</Microcopy>
          </Box>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Email;
