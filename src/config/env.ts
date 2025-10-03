// Environment Configuration
export const ENV = {
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // API Configuration
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  API_TIMEOUT: parseInt(process.env.API_TIMEOUT || '10000', 10),
  
  // Debug Settings
  DEBUG_MODE: process.env.DEBUG_MODE === 'true' || process.env.NODE_ENV === 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  
  // App Configuration
  APP_NAME: process.env.APP_NAME || 'MyApp',
  APP_VERSION: process.env.APP_VERSION || '1.0.0',
} as const;

// Type definitions for environment variables
export type EnvConfig = typeof ENV;
