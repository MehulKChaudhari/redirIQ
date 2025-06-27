import { useMutation } from '@tanstack/react-query';
import { shortenUrl } from '../services/api';

export interface ShortenUrlResponse {
  slug: string;
}

export const useUrlShortener = () => {
  return useMutation({
    mutationFn: shortenUrl,
    onError: (error) => {
      console.error('Error shortening URL:', error);
    },
  });
}; 