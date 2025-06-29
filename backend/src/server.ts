import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
process.env.NODE_CONFIG_DIR = `${__dirname}/config`;

import config from 'config';
import app from './app';
import { logger } from './utils/logger';

const PORT = config.get<number>('port');
const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`🚀 Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});
