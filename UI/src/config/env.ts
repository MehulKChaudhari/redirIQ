interface EnvConfig {
  API_BASE_URL: string;
  FRONTEND_URL: string;
}

export const env: EnvConfig = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || window.location.origin,
};

const requiredEnvVars: (keyof EnvConfig)[] = ['API_BASE_URL', 'FRONTEND_URL'];

for (const envVar of requiredEnvVars) {
  if (!env[envVar]) {
    console.warn(`Warning: Environment variable ${envVar} is not set`);
  }
} 