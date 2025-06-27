import { Request, Response } from 'express';
import urlService from '../services/url';

/**
 * Takes a long URL and returns a shortened version
 * @param {Request} req - Express request object containing URL in the body
 * @param {Response} res - Express response object
 * @returns {Promise<void>} Returns a JSON response with the generated slug
 */
const shortenUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const slug = await urlService.createShortUrl(req.body.URL);
    res.json({ slug });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create short URL' });
  }
};

/**
 * Sends user to their original URL when they visit a short link
 * @param {Request} req - Express request object containing slug in params
 * @param {Response} res - Express response object
 * @returns {Promise<void>} Redirects to the original URL or returns error response
 */
const redirectToOriginal = async (req: Request, res: Response): Promise<void> => {
  try {
    const originalUrl = await urlService.getOriginalUrl(req.params.slug);
    if (!originalUrl) {
      res.status(404).json({ error: 'URL not found' });
      return;
    }
    res.redirect(originalUrl);
  } catch (error) {
    res.status(500).json({ error: 'Failed to redirect' });
  }
};

export default {
  shortenUrl,
  redirectToOriginal,
};
