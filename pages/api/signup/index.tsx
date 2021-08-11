import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  createNewSignup,
  getAllSignups,
} from '../../../controllers/signupController';
import { authorizedRoles, isAuthenticatedUser } from '../../../middleware/auth';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 *@GET gets all signup information, only for admins
 *@POST stores client newsletter signup (email,country) for future contacts
 *@endpoint handles requests to ->  api/signup
 */

handler
  .post(createNewSignup)
  .use(isAuthenticatedUser, authorizedRoles('admin'))
  .get(getAllSignups);

export default handler;
