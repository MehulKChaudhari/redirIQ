export default {
  nodeEnv: 'production',

  corsOptions: {
    origin: 'https://rediriq.mehul.wiki',
    credentials: true,
    preflightContinue: false,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL,
  },
};
