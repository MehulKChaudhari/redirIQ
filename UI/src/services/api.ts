import axios from 'axios';
import { env } from '../config/env';

const api = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export async function shortenUrl(url: string) {
  try {
    const response = await api.post('/shorten', { URL: url });
    return response.data;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
}

export default api; 