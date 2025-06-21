import dotenv from 'dotenv';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: isProd 
      ? process.env.PROD_DATABASE_URL 
      : process.env.LOCAL_DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/url_shortener',
  },
  redis: {
    url: isProd
      ? process.env.PROD_REDIS_URL
      : process.env.LOCAL_REDIS_URL || 'redis://localhost:6379',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
} as const; 