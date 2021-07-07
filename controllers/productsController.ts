import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Products from '../models/products';

/**
 * Get all products
 * @function
 * @GET /api/news
 */

export const getAllProducts = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const allProducts = await Products.find();
    res.status(200).json({
      success: true,
      count: allProducts.length,
      allProducts,
    });
  }
);
