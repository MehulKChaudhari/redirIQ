export default {
  nodeEnv: 'production',

  cors: {
    origin: 'https://rediriq.mehul.wiki',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
    credentials: true,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL,
  },
};
