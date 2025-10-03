// Environment Variables Example
// Copy this file to env.ts and update the values

export const ENV_EXAMPLE = {
  // Environment
  NODE_ENV: 'development' as const,
  
  // API Configuration
  API_BASE_URL: 'http://localhost:3000/api',
  API_TIMEOUT: 10000,
  
  // Debug Settings
  DEBUG_MODE: true,
  LOG_LEVEL: 'debug' as const,
  
  // App Configuration
  APP_NAME: 'MyApp',
  APP_VERSION: '1.0.0',
} as const;

// Instructions:
// 1. Copy this file to env.ts
// 2. Update the values according to your environment
// 3. For production, set NODE_ENV=production and update API_BASE_URL
// 4. For staging, create env.staging.ts with staging values
