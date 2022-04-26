const awsServerlessExpress = require('aws-serverless-express');
const { resolve } = require('path');
const app = require('../app');
const routes = require('../routes');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
];

exports.handler = (event, context) => {
  routes.forEach(route => {
    app.get(route.path, (req, res) =>
      require(resolve(
        __dirname,
        '..',
        '..',
        '.next',
        'serverless',
        `pages${route.page}.js`,
      ).render(req, res)),
    );

    return awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(app, null, binaryMimeTypes),
      event,
      context,
    );
  });
};
