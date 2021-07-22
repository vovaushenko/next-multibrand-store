import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { updateUserProfile } from '../../../controllers/authController';
import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

/**
 * Update user account details
 * @Authenticated users only
 * @Handles requests to ->  api/me/update
 */
const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.use(isAuthenticatedUser).put(updateUserProfile);

export default handler;
