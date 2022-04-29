import { APIGatewayProxyHandler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import { resolve } from 'path';
import app from '../app';
import routes from '../routes';

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

export const handler: APIGatewayProxyHandler = (event, context) => {
  routes.forEach(route => {
    app.get(route.path, (req, res) => {
      require(`../../build/serverless/pages${route.page}.js`).render(req, res);
    });

    return awsServerlessExpress.proxy(
      awsServerlessExpress.createServer(app, undefined, binaryMimeTypes),
      event,
      context,
    );
  });
};
