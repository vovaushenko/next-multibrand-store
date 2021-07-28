import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllClients } from '../../../controllers/authController';
import { authorizedRoles, isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/admin/clients
 * @protected only authenticated admins can use this endpoint
 */

handler.use(isAuthenticatedUser, authorizedRoles('admin')).get(getAllClients);

export default handler;
