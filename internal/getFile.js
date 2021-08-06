const fs = require('fs')
const Path = require('path')

const options = { encoding: 'utf8' }

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath)
    return fs.readFile(path, options, (err, file) =>
      err ? reject(err) : resolve(file)
    )
  })
}

module.exports = getFile
