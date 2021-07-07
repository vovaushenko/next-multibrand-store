import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import {
  deleteSingleProduct,
  getSingleProduct,
  updateSingleProduct,
} from '../../../controllers/productsController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler
  .get(getSingleProduct)
  .put(updateSingleProduct)
  .delete(deleteSingleProduct);

export default handler;
