import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import urlRoutes from './routes/url';

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/url', urlRoutes);

app.use(notFoundHandler);
// app.use(errorHandler);

export default app;
