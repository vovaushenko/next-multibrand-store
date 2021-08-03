import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  deleteCustomerReview,
  getAllProductReviews,
} from '../../../controllers/reviewController';
import { authorizedRoles, isAuthenticatedUser } from '../../../middleware/auth';
// import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/reviews/:productID
 *
 */
handler.get(getAllProductReviews);

handler
  .use(isAuthenticatedUser, authorizedRoles('admin'))
  .delete(deleteCustomerReview);

export default handler;
