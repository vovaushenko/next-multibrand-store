import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllOrders } from '../../../controllers/orderController';
import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/orders
 * only for authenticated users
 *
 */
// TODO: restrict to ADMIN
handler.use(isAuthenticatedUser).get(getAllOrders);

export default handler;
