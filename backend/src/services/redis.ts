import { createClient } from 'redis';
import { config } from '../config';

export class RedisService {
  private client;

  constructor() {
    this.client = createClient({
      url: config.redis.url,
    });

    this.client.on('error', (err) => console.error('Redis Client Error', err));
    this.client.connect();
  }

  async setUrl(slug: string, originalUrl: string): Promise<void> {
    await this.client.set(`slug:${slug}`, originalUrl);
  }

  async getUrl(slug: string): Promise<string | null> {
    return await this.client.get(`slug:${slug}`);
  }
} 