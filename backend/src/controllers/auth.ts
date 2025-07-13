import { Request, Response, RequestHandler } from 'express';
import { createUser, CreateUserInput } from '../services/user';
import { getUserByEmail } from '../models/user';

/**
 * Handles user registration
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const register: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.status(409).json({
        errors: [
          {
            status: '409',
            title: 'User already exists',
          },
        ],
      });
      return;
    }

    const userId = await createUser(req.body as CreateUserInput);

    if (userId) {
      res.status(201).json({
        message: {
          status: '201',
          title: 'User successfully added',
        },
        data: { userId },
      });
      return;
    } else {
      throw new Error('Error occurred when registering a new user');
    }
  } catch (error: any) {
    res.status(500).json({
      errors: [{ status: '500', title: 'There is some internal server error' }],
    });
    throw error;
  }
};

export default {
  register,
};
