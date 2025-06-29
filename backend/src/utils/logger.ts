import pino from 'pino';
import { pinoHttp } from 'pino-http';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname',
      messageFormat: '{msg} {req.method} {req.url} {res.statusCode} {responseTime}ms',
    },
  },
});

export const httpLogger = pinoHttp({
  logger,
  autoLogging: {
    ignore: req => req.url === '/health-check',
  },
  customProps: req => ({
    ip: req.socket.remoteAddress,
  }),
});
