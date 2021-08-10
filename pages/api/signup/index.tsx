import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  createNewSignup,
  getAllSignups,
} from '../../../controllers/signupController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();
/**
 *@GET gets all signup information
 *@POST stores client newsletter signup (email,country) for future contacts
 * @endpoint handles requests to ->  api/signup
 *
 */
handler.get(getAllSignups).post(createNewSignup);

export default handler;
