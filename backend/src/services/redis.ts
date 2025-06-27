import { createClient } from 'redis';
import config from 'config';

const client = createClient({
  url: config.get<string>('redis.url'),
});

client.on('error', err => console.error('Redis Client Error', err));
client.connect().catch(console.error);

/**
 * Caches URL
 * @param {string} slug - Short code
 * @param {string} originalUrl - Original URL
 * @returns {Promise<void>}
 */
async function setUrl(slug: string, originalUrl: string): Promise<void> {
  await client.set(`slug:${slug}`, originalUrl);
}

/**
 * Gets cached URL
 * @param {string} slug - Short code
 * @returns {Promise<string | null>} Original URL
 */
async function getUrl(slug: string): Promise<string | null> {
  return await client.get(`slug:${slug}`);
}

export default {
  setUrl,
  getUrl,
};
