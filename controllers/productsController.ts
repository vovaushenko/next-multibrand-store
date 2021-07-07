import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Products from '../models/products';
import ErrorHandler from '../utils/errorHandler';

/**
 * Get all products route controller
 * @GET /api/products
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
 * @POST /api/products
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

/**
 * Get single product by ID
 * @GET /api/products/:id
 * @function
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
export const getSingleProduct = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const foundProduct = await Products.findById(req.query.id);

    if (!foundProduct) {
      return new ErrorHandler(
        `Product with the id ${req.query.id} does not exist`,
        404
      );
    }

    res.status(200).json({
      success: true,
      product: foundProduct,
    });
  }
);

/**
 * Update single product by ID
 * @PUT /api/products/:id
 * @function
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
export const updateSingleProduct = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    let foundProduct = await Products.findById(req.query.id);

    if (!foundProduct) {
      return new ErrorHandler(
        `Product with the id ${req.query.id} does not exist`,
        404
      );
    }

    //TODO: After integration with image CDN add image update feature

    foundProduct = await Products.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product: foundProduct,
    });
  }
);

/**
 * Delete single product by ID
 * @DELETE /api/products/:id
 * @function
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */

export const deleteSingleProduct = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    let foundProduct = await Products.findById(req.query.id);

    if (!foundProduct) {
      return new ErrorHandler(
        `Product with the id ${req.query.id} does not exist`,
        404
      );
    }
    foundProduct = await foundProduct.remove();

    res.status(204).json({ status: 'success', data: null });
  }
);
