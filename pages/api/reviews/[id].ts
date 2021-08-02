import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllProductReviews } from '../../../controllers/reviewController';
// import { isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 * @endpoint handles requests to ->  api/reviews/:productID
 *
 */
handler.get(getAllProductReviews);

export default handler;
