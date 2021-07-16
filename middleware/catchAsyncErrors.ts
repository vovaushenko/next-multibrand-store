/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Custom Error Handling Middleware for catching errors async functions
 * @function
 * @import this function in any async function and wrap it
 * @returns error catching boundary for async functions
 */
export const catchAsyncErrors =
  (func: any) => (req: NextApiRequest, res: NextApiResponse, next: any) =>
    Promise.resolve(func(req, res, next)).catch(next);
