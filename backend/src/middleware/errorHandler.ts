import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import config from 'config';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public status: string = 'error'
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  logger.error({
    msg: err.message,
    url: req.url,
    status: err.statusCode,
  });

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(config.get('nodeEnv') === 'development' && { stack: err.stack }),
  });
};
