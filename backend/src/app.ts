import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import urlRoutes from './routes';
import config from 'config';

const app: Express = express();

app.use(helmet());
app.use(cors(config.get('cors')));

app.get('/health-check', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use(express.json());

app.use('/', urlRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
