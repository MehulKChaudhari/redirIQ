interface EnvConfig {
  API_BASE_URL: string;
}

export const env: EnvConfig = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
};

// Validate required environment variables
const requiredEnvVars: (keyof EnvConfig)[] = ['API_BASE_URL'];

for (const envVar of requiredEnvVars) {
  if (!env[envVar]) {
    console.warn(`Warning: Environment variable ${envVar} is not set`);
  }
} 