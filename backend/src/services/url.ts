import { createClient } from 'redis';
import { config } from '../config';
import prisma from './prisma';

const redis = createClient({
  url: config.redis.url,
});

redis.connect().catch(console.error);

function generateSlug(length: number = 6): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export class UrlService {
  async createShortUrl(url: string): Promise<string> {
    const slug = generateSlug();
    
    await prisma.url.create({
      data: {
        slug,
        url,
      },
    });

    await redis.set(`slug:${slug}`, url);

    return slug;
  }

  async getOriginalUrl(slug: string): Promise<string | null> {
    const cachedUrl = await redis.get(`slug:${slug}`);
    if (cachedUrl) return cachedUrl;

    const urlData = await prisma.url.findUnique({
      where: { slug },
    });

    if (urlData?.url) {
      await redis.set(`slug:${slug}`, urlData.url);
      return urlData.url;
    }

    return null;
  }
} 