import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Products from '../models/products';

/**
 * Get all products route controller
 * @GET /api/news
 * @function
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
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

/**
 * Create new product route controller
 * @POST /api/news
 * @function
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */

export const addNewProduct = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    //TODO: @upload news images to Cloudinary CDN
    const newProduct = await Products.create(req.body);
    res.status(200).json({
      success: true,
      newProduct,
    });
  }
);
