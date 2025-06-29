export default {
  port: 3000,
  nodeEnv: 'development',

  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      /^https:\/\/[a-zA-Z0-9-]+\.mehul\.wiki$/,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin','Content-Type', 'Accept'],
    credentials: true,
  },

  database: {
    url: 'postgresql://postgres:postgres@localhost:5432/redirIQ',
  },

  redis: {
    url: 'redis://localhost:6379',
  },
};
