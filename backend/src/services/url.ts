import prisma from './prisma';
import redisService from './redis';

function generateSlug(length: number = 6): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Creates short URL
 * @param {string} url - Original URL
 * @returns {Promise<string>} Short code
 */
async function createShortUrl(url: string): Promise<string> {
  const slug = generateSlug();

  await prisma.url.create({
    data: { slug, url },
  });

  await redisService.setUrl(slug, url);
  return slug;
}

/**
 * Gets original URL
 * @param {string} slug - Short code
 * @returns {Promise<string | null>} Original URL
 */
async function getOriginalUrl(slug: string): Promise<string | null> {
  const cachedUrl = await redisService.getUrl(slug);
  if (cachedUrl) return cachedUrl;

  const urlData = await prisma.url.findUnique({
    where: { slug },
  });

  if (urlData?.url) {
    await redisService.setUrl(slug, urlData.url);
    return urlData.url;
  }

  return null;
}

export default {
  createShortUrl,
  getOriginalUrl,
};
