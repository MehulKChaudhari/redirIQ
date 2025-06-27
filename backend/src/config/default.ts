export default {
  port: 3000,
  nodeEnv: 'development',

  database: {
    url: 'postgresql://postgres:postgres@localhost:5432/url_shortener'
  },

  redis: {
    url: 'redis://localhost:6379'
  }
}; 