import bcrypt from 'bcrypt';
import config from 'config';

const SALT = Number(config.get('bcrypt.salt'));

/**
 * Hashes the string
 * @param {string} password - password string
 * @returns {string} Hashed password string
 */
function hash(password: string): string {
  return bcrypt.hashSync(password, SALT);
}

/**
 * Compare the password string with the hashed password string
 * @param {string} password - password string
 * @param {string} hashedPassword - hashed password string
 * @returns {boolean}
 */
function compare(password: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

export default {
  hash,
  compare,
};
