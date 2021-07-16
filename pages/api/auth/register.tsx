import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { registerUser } from '../../../controllers/authController';
import { onError } from '../../../middleware/onError';

/**
 * @Handles requests to ->  api/auth/register
 */
const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.post(registerUser);

export default handler;
