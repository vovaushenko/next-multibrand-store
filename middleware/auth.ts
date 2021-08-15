import { NextApiResponse } from 'next';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession } from 'next-auth/client';
import { NextApiRequestWithAuth, Role } from '../types/authTypes';
import ErrorHandler from '../utils/errorHandler';
import { catchAsyncErrors } from './catchAsyncErrors';

/**
 * @function isAuthenticatedUser
 * @middleware function to check whether the user is authenticated
 * @param  {NextApiRequestWithAuth} req
 * @param  {NextApiResponse} res
 * @param  {any} next
 * @returns {undefined}
 */
const isAuthenticatedUser = catchAsyncErrors(
  async (req: NextApiRequestWithAuth, res: NextApiResponse, next: any) => {
    //* getSession gets auth-token from req.headers
    const session = await getSession({ req });

    if (!session) {
      return next(new ErrorHandler('Login first to access this resource', 401));
    }
    //* Store logged-in user on session
    req.user = session.user;
    next();
  }
);
/**
 * @function authorizedRoles
 * @middleware function to check authorization role of a user
 * @param  {Role[]} roles - users eligible to use a service
 * @returns {undefined}
 */
const authorizedRoles = (...roles: Role[]) => {
  return (
    req: NextApiRequestWithAuth,
    res: NextApiResponse,
    next: any
  ): any => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to access this resource.`,
          403
        )
      );
    }

    next();
  };
};

export { isAuthenticatedUser, authorizedRoles };
