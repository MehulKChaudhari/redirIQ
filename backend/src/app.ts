import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import config from 'config';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import urlRoutes from './routes';

const app: Express = express();

app.use(helmet());
app.use(cors(config.get('corsOptions')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', urlRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
