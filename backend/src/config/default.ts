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
      privateKey:
        '-----BEGIN EC PRIVATE KEY-----\n' +
        'MHcCAQEEIBVjUDTD87Ol5kF+46J79/nrTRoupdX2KCULaei/cd39oAoGCCqGSM49\n' +
        'AwEHoUQDQgAEeed9HVwikeLp/r1pCT8DC+YL2w85oiFra3HWhSVkx3FSaUg+BZJ0\n' +
        'y9hbgKZ9Ycw1k6Ehm3Q+FgtqKJeKiIvzyQ==\n' +
        '-----END EC PRIVATE KEY-----',
      publicKey:
        '-----BEGIN PUBLIC KEY-----\n' +
        'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeed9HVwikeLp/r1pCT8DC+YL2w85\n' +
        'oiFra3HWhSVkx3FSaUg+BZJ0y9hbgKZ9Ycw1k6Ehm3Q+FgtqKJeKiIvzyQ==\n' +
        '-----END PUBLIC KEY-----',
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

  cookies: {
    jwtToken: {
      access: {
        name: 'authToken',
        options: {
          domain: 'mehul.wiki',
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: 'strict',
          secure: true,
        },
      },
    },
  },
};
