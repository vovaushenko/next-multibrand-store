import { Dispatch } from 'redux';
import { CheckoutAction, CheckoutActionTypes } from '../../types/checkoutTypes';
import { UserShippingInfo } from './../../types/index';

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

    dispatch({
      type: CheckoutActionTypes.SHIPPING_ADDRESS_IS_CORRECT,
      payload: {
        isShippingInfoCollected: true,
        userShippingInfo: shippingInfo,
      },
    });
  };
export type collectCustomerShippingInfoType =
  typeof collectCustomerShippingInfo;
