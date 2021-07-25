import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  createNewOrder,
  getAllCustomerOrders,
} from '../../../controllers/orderController';
import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/orders
 * only for authenticated users
 *
 */
handler.use(isAuthenticatedUser).get(getAllCustomerOrders).post(createNewOrder);

export default handler;
