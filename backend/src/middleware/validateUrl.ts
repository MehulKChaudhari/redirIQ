import { Request, Response, NextFunction } from 'express';

export const validateUrl = (req: Request, res: Response, next: NextFunction): void => {
  const { URL } = req.body;
  
  if (!URL) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }
  
  try {
    new URL(URL);
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid URL format' });
  }
}; 