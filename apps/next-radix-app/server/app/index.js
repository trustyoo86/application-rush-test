const express = require('express');
const { resolve } = require('path');

const app = express();

app.set('trust proxy', true);
app.use('/_next', express.static(resolve(__dirname, '..', '..', '.next')));

module.exports = app;
