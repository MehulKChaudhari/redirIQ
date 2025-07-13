import prisma from './prisma';
import passUtil from '../utils/helpers/password';

export interface CreateUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

/**
 * Creates a new user in the database
 * @param {user} user - User data for creation
 * @returns {Promise<string | null>} Created user ID or null if failed
 */
export async function createUser(user: CreateUserInput): Promise<string | null> {
  try {
    const userToCreate = {
      email: user.email.toLowerCase(),
      password: passUtil.hash(user.password),
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const createdUser = await prisma.user.create({
      data: userToCreate,
    });

    return createdUser.userId;
  } catch (error: any) {
    console.error(error);
    if (error?.code === 'P2002') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}
