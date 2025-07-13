import prisma from '../services/prisma';

export interface User {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Gets the user data by searching for email
 * @param {string} email - Email address to search for
 * @returns {Promise<User | null>} A Promise resolved with the user data or null if not found
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    return user;
  } catch (error) {
    console.error('Error in getUserByEmail:', error);
    throw error;
  }
}
