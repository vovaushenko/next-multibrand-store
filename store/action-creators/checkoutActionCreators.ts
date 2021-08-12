import { Dispatch } from 'redux';
import { processCustomerOrder } from '../../fetch-client/rest/orders';
import { CheckoutAction, CheckoutActionTypes } from '../../types/checkoutTypes';
import { ShippingMethod } from './../../types/checkoutTypes';
import {
  ClientOrder,
  OrderInformation,
  UserShippingInfo,
} from './../../types/index';

/**
 *@Checkout async action creator, will dispatch action to check shipping info and save shipping info
 *@function collectCustomerShippingInfo
 *@param {UserShippingInfo} shippingInfo - user shipping information that will be submitted through form
 *@returns {undefined}
 */
export const collectCustomerShippingInfo =
  (shippingInfo: UserShippingInfo) =>
  async (dispatch: Dispatch<CheckoutAction>): Promise<void> => {
    dispatch({ type: CheckoutActionTypes.VERIFY_SHIPPING_ADDRESS });
    // TODO:Add case if shipping info is incorrect

    setTimeout(() => {
      dispatch({
        type: CheckoutActionTypes.SHIPPING_ADDRESS_IS_CORRECT,
        payload: {
          isShippingInfoCollected: true,
          userShippingInfo: shippingInfo,
        },
      });
    }, 1500);
  };
export type collectCustomerShippingInfoType =
  typeof collectCustomerShippingInfo;

/**
 *@Checkout async action creator, will dispatch action to get preferred customer's shipping method
 *@function collectCustomerShippingMethod
 *@param {ShippingMethod} shippingMethod - preferred shipped method - express or free
 *@returns {undefined}
 */
export const collectCustomerShippingMethod =
  (shippingMethod: ShippingMethod) =>
  async (dispatch: Dispatch<CheckoutAction>): Promise<void> => {
    dispatch({ type: CheckoutActionTypes.SELECT_SHIPPING_METHOD });

    setTimeout(() => {
      dispatch({
        type: CheckoutActionTypes.SHIPPING_METHOD_IS_SELECTED,
        payload: {
          isShippingMethodSelected: true,
          shippingMethod,
        },
      });
    }, 500);
  };
export type collectCustomerShippingMethod =
  typeof collectCustomerShippingMethod;

/**
 *@Checkout async action creator, will dispatch action to persist customer's shipping info to local storage for future use
 *@function rememberCustomerInfo
 *@param {UserShippingInfo} shippingInfo - user shipping information
 *@returns {undefined}
 */
export const rememberCustomerInfo =
  (shippingInfo: UserShippingInfo) =>
  async (dispatch: Dispatch<CheckoutAction>): Promise<void> => {
    dispatch({
      type: CheckoutActionTypes.REMEMBER_CUSTOMER_INFO,
      payload: true,
    });

    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
  };

/**
 *@Checkout async action creator, will dispatch action to process customer's payment
 @important This is a placeholder that will be replaced by integrated functionality of payment providers
 *@function processPayment
 *@param {OrderInformation} orderInfo - details of order
 *@returns {undefined}
 */
export const processPayment =
  (orderInfo: OrderInformation) =>
  async (dispatch: Dispatch<CheckoutAction>): Promise<void> => {
    dispatch({
      type: CheckoutActionTypes.PROCESS_PAYMENT,
    });
    try {
      //TODO: after connecting payment methods get payment info from provider
      const paymentInfo = {
        paymentID: 'test123',
        status: 'Processed/Paid',
      };
      const order: ClientOrder = {
        orderTotal: orderInfo.total,
        purchase: orderInfo.purchasedItems,
        shippingInfo: orderInfo.customerInfo,
        paymentInfo,
      };
      const { data } = await processCustomerOrder(order);
      dispatch({
        type: CheckoutActionTypes.PAYMENT_WAS_SUCCESSFUL,
        payload: data.success,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: CheckoutActionTypes.PAYMENT_WAS_DENIED,
        payload: error.response.data.message || error.response.statusText,
      });
    }
  };
