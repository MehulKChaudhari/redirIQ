import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

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