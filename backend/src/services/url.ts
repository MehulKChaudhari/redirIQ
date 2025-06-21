import { Pool } from 'pg';
import { createClient } from 'redis';
import { config } from '../config';

const pool = new Pool({
  connectionString: config.database.url,
});

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
  async createShortUrl(originalUrl: string): Promise<string> {
    const slug = generateSlug();

    await pool.query(
      'INSERT INTO urls (slug, original_url) VALUES ($1, $2)',
      [slug, originalUrl]
    );

    await redis.set(`slug:${slug}`, originalUrl);

    return slug;
  }

  async getOriginalUrl(slug: string): Promise<string | null> {
    const cachedUrl = await redis.get(`slug:${slug}`);
    if (cachedUrl) return cachedUrl;

    const result = await pool.query(
      'SELECT original_url FROM urls WHERE slug = $1',
      [slug]
    );

    const originalUrl = result.rows[0]?.original_url;
    if (originalUrl) {
      await redis.set(`slug:${slug}`, originalUrl);
    }

    return originalUrl || null;
  }
} 