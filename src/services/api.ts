import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 15000,
});
api.interceptors.request.use(cfg => {
  // gắn token nếu cần
  return cfg;
});
api.interceptors.response.use(
  r => r,
  e => Promise.reject(e),
);
