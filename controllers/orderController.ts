import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Order, { IOrder } from '../models/order';
import { NextApiRequestWithAuth } from '../types/authTypes';
import { APIfeatures } from '../utils/apiFeatures';
import { StatusCodes } from 'http-status-codes';

/**
 * Create new order
 * @POST /api/orders
 * @function createNewOrder
 * @param {NextApiRequestWithAuth} req  Next API request with authenticated user
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */

const createNewOrder = async (
  req: NextApiRequestWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const { orderTotal, purchase, shippingInfo, paymentInfo } = req.body;

  const deliveryStatus = 'Not delivered';

  const newOrder: IOrder = await Order.create({
    user: req.user._id,
    orderTotal,
    purchase,
    shippingInfo,
    paymentInfo,
    paidAt: Date.now(),
    deliveryStatus,
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    newOrder,
  });
};

/**
 * Get all Customers Orders
 * @GET /api/orders/
 * @function registerUser
 * @param {NextApiRequestWithAuth} req  Next API request with authenticated user
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */

const getAllCustomerOrders = async (
  req: NextApiRequestWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const features = new APIfeatures(
    Order.find({ user: req.user._id }),
    req.query as {
      [key: string]: string;
    }
  ).sort();

  const allCustomerOrders = await features.query;

  res.status(StatusCodes.OK).json({
    success: true,
    orders: allCustomerOrders,
  });
};

/**
 * @ADMIN route
 * Get all orders
 * @GET /api/admin/orders
 * @function getAllOrders
 * @param {NextApiRequest} req  The Next request
 * @param {NextApiResponse} res The Next response
 * @return {undefined}
 */
const getAllOrders = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const features = new APIfeatures(
      Order.find(),
      req.query as {
        [key: string]: string;
      }
    ).sort();

    const orders = await features.query;

    res.status(StatusCodes.OK).json({
      success: true,
      count: orders.length,
      orders,
    });
  }
);

export { createNewOrder, getAllOrders, getAllCustomerOrders };
