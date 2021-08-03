import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  createNewReview,
  getAllReviews,
  moderateReview,
} from '../../../controllers/reviewController';
import { authorizedRoles, isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/reviews
 * only for authenticated users
 */
handler.post(createNewReview);

//only admin users can get all reviews
handler
  .use(isAuthenticatedUser, authorizedRoles('admin'))
  .get(getAllReviews)
  .put(moderateReview);

export default handler;
