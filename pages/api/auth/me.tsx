import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getCurrentUserProfile } from '../../../controllers/authController';
import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

/**
 * Get user account details
 * @Authenticated users only
 * @Handles requests to ->  api/auth/me
 */
const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.use(isAuthenticatedUser).get(getCurrentUserProfile);

export default handler;
