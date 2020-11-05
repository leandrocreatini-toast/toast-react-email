const createEmail = require('./createEmail')
const saveFile = require('./saveFile')

const data = require('../data/confirmationOrderData.json')

createEmail(data).then(saveFile('./public/index.html'))
