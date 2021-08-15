import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Signup, { ISignup } from '../models/signup';
import { APIfeatures } from '../utils/apiFeatures';

/**
 * @EXPORTS
 */
export { createNewSignup, getAllSignups };

/**
 * Create new newsletter signup
 * @POST /api/signup
 * @function createNewSignup
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const createNewSignup = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const newSignup: ISignup = await Signup.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({
      success: true,
      newSignup,
    });
  }
);

/**
 * Get all newsletter signups
 * @GET /api/signup
 * @function getAllSignups
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const getAllSignups = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const apiFeatures = new APIfeatures(
      Signup.find(),
      req.query as {
        [key: string]: string;
      }
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const allSignups = await apiFeatures.query;

    res.status(StatusCodes.OK).json({
      success: true,
      allSignups,
    });
  }
);
