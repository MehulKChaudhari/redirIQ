import { Request, Response } from 'express';
import { UrlService } from '../services/url';

const urlService = new UrlService();

export const shortenUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const slug = await urlService.createShortUrl(req.body.URL);
    res.json({ slug });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create short URL' });
  }
};

export const redirectToOriginal = async (req: Request, res: Response): Promise<void> => {
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