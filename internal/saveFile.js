const fs = require('fs');

const saveFile = (filename) => (content) =>
  new Promise((resolve, reject) =>
    fs.writeFile(
      filename,
      content,
      err =>  err ? reject(err) : resolve()
    )
  )


module.exports = saveFile;
