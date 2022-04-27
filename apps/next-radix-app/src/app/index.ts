import express from 'express';
import { resolve } from 'path';

const app = express();

app.set('trust proxy', true);
app.use('/_next', express.static(resolve(__dirname, '..', '..', '.next')));

export default app;
