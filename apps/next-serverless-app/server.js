const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const { parse } = require('url');
const bodyParser = require('body-parser');
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

const getPage = page => require(`./.next/serverless/pages/${page}`).render;

app.get('/', getPage('index'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/_next/static', express.static('./.next/static'));

app.get('*', require('./.next/serverless/pages/_error').render);

isDev &&
  app.listen(3000, function () {
    console.log(`Ready on localhost:3000`);
  });

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
