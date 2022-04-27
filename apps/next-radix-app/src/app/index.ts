import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import nextConfig from '../../next.config';

const app = express();
app.set('trust proxy', true);
app.use(helmet({ dnsPrefetchControl: false }));
app.use(compression());
app.use('/health', (req, res) => res.send({ 'nextjs-serverless': true }));
app.use('/_next', express.static(nextConfig.distDir));

export default app;
