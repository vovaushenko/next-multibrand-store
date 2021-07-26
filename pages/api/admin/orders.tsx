import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllOrders } from '../../../controllers/orderController';
import { authorizedRoles, isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/orders
 * @protected only authenticated admins can use this endpoint
 */

handler.use(isAuthenticatedUser, authorizedRoles('admin')).get(getAllOrders);

export default handler;
