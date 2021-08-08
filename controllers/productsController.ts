import cloudinary from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Products, { IProduct } from '../models/products';
import { APIfeatures } from '../utils/apiFeatures';
import ErrorHandler from '../utils/errorHandler';

/**
 *Cloudinary image CDN configuration
 *more info https://cloudinary.com/documentation/node_integration
 */
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    const features = new APIfeatures(
      Products.find(),
      req.query as {
        [key: string]: string;
      }
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allProducts: IProduct[] = await features.query;

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
    //*images will be stored in Cloudinary CDN
    const images = req.body.images;
    const imagesLinks = [];
    //*each image will be uploaded to CDN
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: 'sneaker-maniacs/products',
      });
      //*and image urls will be stored in imageLinks array
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    //*don't gorget to add these newly generated CDN links to body
    req.body.images = imagesLinks;

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

    if (req.body.images) {
      //* Delete images associated with the product
      for (let i = 0; i < foundProduct.images.length; i++) {
        await cloudinary.v2.uploader.destroy(foundProduct.images[i].public_id);
      }
      //* Prepare new images for the product
      const imagesLinks = [];
      const images = req.body.images;

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: 'sneaker-maniacs/products',
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      //* Add newly uploaded images to body
      req.body.images = imagesLinks;
    }

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
 * Delete single product by ID and associated images in CDN
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
    //* Will delete images associated with the room from the CDN
    for (let i = 0; i < foundProduct.images.length; i++) {
      await cloudinary.v2.uploader.destroy(foundProduct.images[i].public_id);
    }

    foundProduct = await foundProduct.remove();

    res.status(204).json({ status: 'success', data: null });
  }
);
