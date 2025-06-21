import { Router } from 'express';
import { shortenUrl, redirectToOriginal } from '../controllers/url';
import { validateUrl } from '../middleware/validateUrl';

const router = Router();

router.post('/shorten', validateUrl, shortenUrl);
router.get('/:slug', redirectToOriginal);

export default router;