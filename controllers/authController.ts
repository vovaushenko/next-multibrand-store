import cloudinary from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import User from '../models/user';
import { NextApiResponseWithAuth } from '../types/authTypes';

// Setting up cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Register User
 * @POST /api/auth/register
 * @function registerUser
 * @param {NextApiRequest} req  Next API request
 * @param {Next.Response} res  Next API response
 * @return {undefined}
 */
const registerUser = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    //* Upload user avatar to cloudinary CDN
    const cloudinaryAvatar = await cloudinary.v2.uploader.upload(
      req.body.avatar,
      {
        folder: 'sneaker-maniacs/user_avatars',
        width: '150',
        crop: 'scale',
      }
    );

    const { name, email, password } = req.body;

    await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: cloudinaryAvatar.public_id,
        url: cloudinaryAvatar.url,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Account was successfully created',
    });
  }
);

/**
 * Get user account details
 * @GET /api/me
 * @function getCurrentUserProfile
 * @param {NextApiResponseWithAuth} req  Next API request with user info
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
const getCurrentUserProfile = async (
  req: NextApiResponseWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
};

export { registerUser, getCurrentUserProfile };
