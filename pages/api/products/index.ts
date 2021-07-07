import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectWithDB from '../../../config/connectWithDB';
import { getAllProducts } from '../../../controllers/productsController';

const handler = nc<NextApiRequest, NextApiResponse>();

connectWithDB();

handler.get(getAllProducts);

export default handler;
