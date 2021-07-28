import cloudinary from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import { User as UserType } from 'next-auth';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import User, { IUser } from '../models/user';
import { NextApiRequestWithAuth } from '../types/authTypes';

export {
  registerUser,
  getCurrentUserProfile,
  updateUserProfile,
  getAllClients,
};

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
  req: NextApiRequestWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
};

/**
 * Update user account details
 * @params name, email, password, avatar will be in request and will be used to update current user profile
 * @PUT /api/me/update
 * @function updateUserProfile
 * @param {NextApiResponseWithAuth} req  Next API request with user info
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
const updateUserProfile = async (
  req: NextApiRequestWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const user: IUser = await User.findById(req.user._id);

  // Update User's name and email
  // Also Update User's Password, is specified
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
  }

  // Update User's avatar in cloudinary CDN
  if (req.body.avatar) {
    const image_id = user.avatar?.public_id;
    // Delete User's previous avatar
    if (image_id) {
      await cloudinary.v2.uploader.destroy(image_id);
    }
    // Upload New Avatar
    const cloudinaryImg = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: 'sneaker-maniacs/user_avatars',
      width: '150',
      crop: 'scale',
    });

    user.avatar = {
      public_id: cloudinaryImg.public_id,
      url: cloudinaryImg.secure_url,
    };
  }

  await user.save();

  res.status(200).json({
    success: true,
  });
};

type Response = {
  success: true;
  clients: UserType[];
};
/**
 * @ADMIN
 * Get all clients
 * @GET /api/admin/clients
 * @function getAllClients
 * @param {NextApiResponseWithAuth} req  Next API request with user info
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
const getAllClients = async (
  req: NextApiRequestWithAuth,
  res: NextApiResponse<Response>
): Promise<void> => {
  const allClients = await User.find({});

  res.status(200).json({
    success: true,
    clients: allClients,
  });
};
