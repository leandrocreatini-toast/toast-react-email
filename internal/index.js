const createEmail = require('./createEmail')
const saveFile = require('./saveFile')

const data = require('../data/testOrderData.json')

const config = {
  emailType: 'confirmation',
  title: 'Your Toast Order Confirmation',
  bgColor: '#f7f8fb',
}

createEmail({...config, ...data}).then(saveFile('./public/index.html'))
