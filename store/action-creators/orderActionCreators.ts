import axios from 'axios';
import { Dispatch } from 'redux';
import { OrdersAction, OrdersActionTypes } from '../../types/orderTypes';

/**
 * async action creator, will dispatch action to get all customer orders from DB, also will dispatch error action if async operation fails
 * @function loadAllCustomerOrders
 * @GET All customer orders from /api/orders endpoint
 * @Will dispatch action to fetch orders from DB
 * @Will dispatch Error in the case of failure
 * @returns {undefined} void
 */

export const loadAllCustomerOrders = () => {
  return async (dispatch: Dispatch<OrdersAction>): Promise<void> => {
    dispatch({ type: OrdersActionTypes.LOAD_ORDERS });

    try {
      const { data } = await axios.get(`/api/orders`);

      dispatch({
        type: OrdersActionTypes.ORDERS_DID_LOAD,
        payload: data.orders,
      });
    } catch (error) {
      dispatch({
        type: OrdersActionTypes.ORDERS_LOAD_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };
};

/**
 * async action creator, will dispatch action to get ALL orders from DB, also will dispatch error action if async operation fails
 * @function loadAllOrders
 * @GET All orders from /api/orders endpoint
 * @Will dispatch action to fetch orders from DB
 * @Will dispatch Error in the case of failure
 * @returns {undefined} void
 */

export const loadAllOrders = () => {
  return async (dispatch: Dispatch<OrdersAction>): Promise<void> => {
    dispatch({ type: OrdersActionTypes.LOAD_ORDERS });

    try {
      const { data } = await axios.get(`/api/admin/orders`);

      dispatch({
        type: OrdersActionTypes.ORDERS_DID_LOAD,
        payload: data.orders,
      });
    } catch (error) {
      dispatch({
        type: OrdersActionTypes.ORDERS_LOAD_ERROR,
        payload: error.response.data.error.message,
      });
    }
  };
};
