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

  jwtToken: {
    access: {
      privateKey: process.env.JWT_PRIVATE_KEY,
      publicKey: process.env.JWT_PUBLIC_KEY,
      signOptions: {
        issuer: 'rediriq',
        audience: process.env.APP_BASE_URL,
        expiresIn: '7d',
        algorithm: 'ES256',
      },
      verifyOptions: {
        issuer: 'rediriq',
        audience: process.env.APP_BASE_URL,
        expiresIn: '7d',
        algorithm: ['ES256'],
      },
    },
    refresh: {
      ttl: 30 * 24 * 60 * 60,
    },
  },
  bcrypt: {
    salt: 12,
  },
};
