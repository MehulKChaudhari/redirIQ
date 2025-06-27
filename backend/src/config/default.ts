export default {
  port: 3000,
  nodeEnv: 'development',

  corsOptions: {
    origin: ['http://localhost:5173'],
    credentials: true,
    maxAge: 86400,
    optionsSuccessStatus: 200,
  },

  database: {
    url: 'postgresql://postgres:postgres@localhost:5432/redirIQ',
  },

  redis: {
    url: 'redis://localhost:6379',
  },
};
