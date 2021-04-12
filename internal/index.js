const createEmail = require('./createEmail')
const saveFile = require('./saveFile')

const data = require('../data/testOrderData.json')

const config = {
  emailType: 'prospect-confirmation-email',
  title: 'Your Toast Order Confirmation',
  bgColor: '#E5E5E5'
}

createEmail({ ...config, ...data }).then(saveFile('./public/index.html'))
