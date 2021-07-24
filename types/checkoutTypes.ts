/**
 * Checkout Reducer state interface
 *@interface
 */

import { UserShippingInfo } from '.';

export type ShippingMethod = 'free' | 'expressTwoDay';

export interface CheckoutState {
  isLoading: boolean;
  userShippingInfo: UserShippingInfo | null;
  shippingMethod: ShippingMethod;
  isShippingInfoCollected: boolean;
  isShippingMethodSelected: boolean;
  isPaymentInfoCollected: boolean;
}

/**
 * Checkout Reducer action types
 *@interface
 */
export enum CheckoutActionTypes {
  VERIFY_SHIPPING_ADDRESS = 'VERIFY_SHIPPING_ADDRESS',
  SHIPPING_ADDRESS_IS_CORRECT = 'SHIPPING_ADDRESS_IS_CORRECT',
  SHIPPING_ADDRESS_IS_INCORRECT = 'SHIPPING_ADDRESS_IS_INCORRECT',

  SELECT_SHIPPING_METHOD = 'SELECT_SHIPPING_METHOD',

  SHIPPING_METHOD_IS_SELECTED = 'SHIPPING_METHOD_IS_SELECTED',

  REMEMBER_CUSTOMER_INFO = 'REMEMBER_CUSTOMER_INFO',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * Checkout action interfaces
 */
interface VerifyShippingAddressAction {
  type: CheckoutActionTypes.VERIFY_SHIPPING_ADDRESS;
}
interface ShippingAddressIsCorrectAction {
  type: CheckoutActionTypes.SHIPPING_ADDRESS_IS_CORRECT;
  payload: {
    isShippingInfoCollected: boolean;
    userShippingInfo: UserShippingInfo;
  };
}

interface SelectShippingMethodAction {
  type: CheckoutActionTypes.SELECT_SHIPPING_METHOD;
}
interface ShippingMethodIsSelectedAction {
  type: CheckoutActionTypes.SHIPPING_METHOD_IS_SELECTED;
  payload: {
    isShippingMethodSelected: boolean;
    shippingMethod: ShippingMethod;
  };
}

interface RememberCustomerAction {
  type: CheckoutActionTypes.REMEMBER_CUSTOMER_INFO;
  payload: UserShippingInfo;
}
/**
 *Combined type for Checkout action creators
 *@type
 */
export type CheckoutAction =
  | VerifyShippingAddressAction
  | ShippingAddressIsCorrectAction
  | SelectShippingMethodAction
  | ShippingMethodIsSelectedAction
  | RememberCustomerAction;
