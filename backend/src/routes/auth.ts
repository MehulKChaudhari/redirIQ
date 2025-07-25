import { Router } from 'express';
import authController from '../controllers/auth';
import authValidator from '../middleware/validators/auth.validator';

const router = Router();

router.post('/register', authValidator.register, authController.register);
router.post('/login', authValidator.login, authController.login);

export default router;
