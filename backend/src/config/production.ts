export default {
  nodeEnv: 'production',

  corsOptions: {
    origin: ['https://rediriq.mehul.wiki'],
    credentials: true,
    maxAge: 86400,
    optionsSuccessStatus: 200,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL,
  },
};
