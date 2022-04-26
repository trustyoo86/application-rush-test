const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const { parse } = require('url');
const { resolve, join } = require('path');
const isDev = process.env.STAGE !== 'production';

const app = express();

const getPage = page => require(`./.next/serverless/pages/${page}`).render;
app.get('/', getPage('index'));

app.use('/_next/static', express.static(resolve(__dirname, '.next', 'static')));
app.use(
  '*',
  require(join(__dirname, '.next', 'serverless', 'pages', '_error')).render,
);

isDev &&
  app.listen(3000, function () {
    console.log('Ready on localhost:3000');
  });

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
