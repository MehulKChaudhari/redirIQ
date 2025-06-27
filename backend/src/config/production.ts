export default {
  nodeEnv: 'production',
  
  database: {
    url: process.env.DATABASE_URL
  },

  redis: {
    url: process.env.REDIS_URL
  }
}; 