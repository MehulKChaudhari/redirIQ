export default {
  nodeEnv: 'production',

  corsOptions: {
    origin: 'https://rediriq.mehul.wiki',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL,
  },
};
