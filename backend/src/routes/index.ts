import { Router } from 'express';
import urlController from '../controllers/url';
import validateUrlMiddleware from '../middleware/validateUrl';
import authRoutes from './auth';

const router = Router();

router.post('/shorten', validateUrlMiddleware.validateUrl, urlController.shortenUrl);
router.get('/:slug', urlController.redirectToOriginal);

router.use('/auth', authRoutes);

export default router;
