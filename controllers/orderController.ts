import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Order, { IOrder } from '../models/order';
import { NextApiRequestWithAuth } from '../types/authTypes';

/**
 * Create new order
 * @POST /api/orders
 * @function registerUser
 * @param {NextApiRequestWithAuth} req  Next API request with authenticated user
 * @param {Next.Response} res  Next API response
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

  res.status(200).json({
    success: true,
    newOrder,
  });
};

/**
 * Get all Customers Orders
 * @GET /api/orders/
 * @function registerUser
 * @param {NextApiRequestWithAuth} req  Next API request with authenticated user
 * @param {Next.Response} res  Next API response
 * @return {undefined}
 */

const getAllCustomerOrders = async (
  req: NextApiRequestWithAuth,
  res: NextApiResponse
): Promise<void> => {
  const allCustomerOrders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders: allCustomerOrders,
  });
};

/**
 * @ADMIN route
 * Get all orders
 * @GET /api/admin/orders
 * @function getAllOrders
 * @param {Next.Request} req  The Next request
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
const getAllOrders = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const orders = await Order.find({});

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  }
);

export { createNewOrder, getAllOrders, getAllCustomerOrders };
