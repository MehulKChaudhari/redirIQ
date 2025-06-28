export default {
  port: 3000,
  nodeEnv: 'development',

  database: {
    url: 'postgresql://postgres:postgres@localhost:5432/redirIQ',
  },

  redis: {
    url: 'redis://localhost:6379',
  },
};
