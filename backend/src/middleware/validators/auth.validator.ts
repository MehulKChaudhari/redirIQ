import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationError } from 'joi';
import joiHelper from '../../utils/helpers/joi';

async function register(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object().keys({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
      .required()
      .messages({
        'string.pattern.base':
          'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
        'string.min': 'Password must be at least 8 characters long',
      }),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const errrorDetails = joiHelper.getErrorDetails(error);
      res.status(422).json({
        errors: errrorDetails,
      });
    }
  }
}

export default {
  register,
};
