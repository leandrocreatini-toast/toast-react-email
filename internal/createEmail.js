const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Email = require('../.build/Email').default;

const DEFAULT_TITLE = 'Toast';
const DEFAULT_BG = '#fff';

const TITLE_TAG = '%TITLE%';
const STYLE_TAG = '%STYLE%';
const BG_TAG = '%BG%';
const CONTENT_TAG = '%CONTENT%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}

/**
 * Renders the React app with the passed data.
 * Returns a promise that resolves to the full email HTML.
 * @param {Object} data
 * @return {Promise.<String>}
 */
function createEmail(data) {
  return Promise.all([
    getFile('../src/inlined.css'),
    getFile('./email-template.html'),
  ])
    .then(([style, template]) => {
      const emailElement = React.createElement(Email, { data });
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML
        .replace(TITLE_TAG, data.title || DEFAULT_TITLE)
        .replace(BG_TAG, data.bgColor || DEFAULT_BG)
        .replace(STYLE_TAG, style)
        .replace(CONTENT_TAG, content)

      return emailHTML;
    });
}

module.exports = createEmail;
