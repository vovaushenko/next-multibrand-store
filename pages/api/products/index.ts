import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllProducts } from '../../../controllers/productsController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.get(getAllProducts);

export default handler;
