import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
process.env.NODE_CONFIG_DIR = `${__dirname}/config`;

import config from 'config';
import app from './app';

const PORT = config.get<number>('port');
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});