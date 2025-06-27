import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import joiHelper from '../utils/helpers/joi';

const validateUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const schema = Joi.object({
    URL: Joi.string().uri().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(422).json({
      success: false,
      errors: joiHelper.getErrorDetails(error as Joi.ValidationError),
    });
  }
};

export default {
  validateUrl,
};
