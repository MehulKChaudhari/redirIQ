import { Request, Response } from 'express';
import { createUser, CreateUserInput } from '../services/user';
import { getUserByEmail } from '../models/user';
import passwordHelper from '../utils/helpers/password';
import jwt from '../utils/helpers/jwt';
import config from 'config';
import { AccessTooken } from '../@types/config';

const ACCESS_TOKEN: AccessTooken = config.get('cookies.jwtToken.access');

/**
 * Check if the user is registered
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      res.status(401).json({
        errors: [{ status: '401', title: 'Incorrect email or password' }],
      });
      return;
    }

    if (!passwordHelper.compare(password, user.password as string)) {
      res.status(401).json({
        errors: [{ status: '401', title: 'Incorrect email or password' }],
      });
      return;
    }

    const accessToken = jwt.generateJwt({ userId: user.userId });
    res.cookie(ACCESS_TOKEN.name, accessToken, ACCESS_TOKEN.options);

    res.status(200).json({
      message: { status: '200', title: 'login success' },
      data: { userId: user.userId },
    });
    return;
  } catch (err) {
    res.status(500).json({
      errors: [{ status: '500', title: 'There is some internal server error' }],
    });
    throw err;
  }
}

/**
 * Handles user registration
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
async function register(req: Request, res: Response): Promise<void> {
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
}

export default {
  register,
  login,
};
