import { Router } from 'express';
import urlController from '../controllers/url';
import validateUrlMiddleware from '../middleware/validateUrl';

const router = Router();

router.post('/shorten', validateUrlMiddleware.validateUrl, urlController.shortenUrl);
router.get('/:slug', urlController.redirectToOriginal);

export default router;  