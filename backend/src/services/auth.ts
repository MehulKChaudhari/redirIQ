import { createClient } from 'redis';
import config from 'config';
import { User } from '../models/user';
import prisma from './prisma';

const client = createClient({
  url: config.get<string>('redis.url'),
});

client.on('error', err => console.error('Redis Client Error', err));
client.connect().catch(console.error);

/**
 * Creates a new user
 * @param {User} user - user data object
 * @returns {Promise<string>} A promise resolved with user id
 */
async function createUser(user: User): Promise<void> {
  const { email, password, firstName, lastName } = user;
  const userObj = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
  });

  return userObj;
}

export default {
  createUser,
};
