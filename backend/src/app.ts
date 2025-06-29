import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import urlRoutes from './routes';
import config from 'config';
import { logger, httpLogger } from './utils/logger';

const app: Express = express();

logger.info('Initializing application...');

app.use(helmet());
app.use(cors(config.get('cors')));
app.use(express.json());
app.use(httpLogger);

app.get('/health-check', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use('/', urlRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

logger.info(`App initialized in ${config.get('nodeEnv')} mode`);

export default app;
