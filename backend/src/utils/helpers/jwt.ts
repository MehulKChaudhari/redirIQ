import jwt from 'jsonwebtoken';
import config from 'config';

type JwtTokenData = { userId: string };
type DecodedJwtTokenData = { userId: string; iat: number; exp: number };

const privateKey: string = config.get('jwtToken.access.privateKey');
const publicKey: string = config.get('jwtToken.access.publicKey');

const signOptions: jwt.SignOptions = config.get('jwtToken.access.signOptions');
const verifyOptions: jwt.VerifyOptions = config.get('jwtToken.access.verifyOptions');

/**
 * Gets the JWT value by signing it with a signature
 * @param {Object} payload - JWT payload object
 * @returns {string} JWT generated value
 */
function generateJwt(payload: JwtTokenData): string {
  return jwt.sign(payload, privateKey, signOptions);
}

/**
 * Verify the JWT signature and decode's it
 * @param {string} token - JWT token string
 * @returns {Object} Decoded object from JWT
 */
function verifyJwt(token: string): DecodedJwtTokenData {
  return jwt.verify(token, publicKey, verifyOptions) as DecodedJwtTokenData;
}

/**
 * Decode the JWT with out verifying the signature
 * @param {string} token - JWT token string
 * @returns {Object} Decoded object from JWT
 */
function decodeJwt(token: string): DecodedJwtTokenData {
  return jwt.decode(token) as DecodedJwtTokenData;
}

export default {
  generateJwt,
  verifyJwt,
  decodeJwt,
};
