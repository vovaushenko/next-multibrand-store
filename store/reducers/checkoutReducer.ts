import {
  CheckoutAction,
  CheckoutActionTypes,
  CheckoutState,
} from '../../types/checkoutTypes';

const initialState: CheckoutState = {
  isLoading: false,
  userShippingInfo: null,
  shippingMethod: 'free',
  isShippingInfoCollected: false,
  isShippingMethodSelected: false,
  isPaymentInfoCollected: false,
};

export const checkoutReducer = (
  state = initialState,
  action: CheckoutAction
): CheckoutState => {
  switch (action.type) {
    case CheckoutActionTypes.VERIFY_SHIPPING_ADDRESS:
      return { ...state, isLoading: true };

    case CheckoutActionTypes.SHIPPING_ADDRESS_IS_CORRECT:
      return {
        ...state,
        isLoading: false,
        userShippingInfo: action.payload.userShippingInfo,
        isShippingInfoCollected: action.payload.isShippingInfoCollected,
      };

    case CheckoutActionTypes.SELECT_SHIPPING_METHOD:
      return { ...state, isLoading: true };

    case CheckoutActionTypes.SHIPPING_METHOD_IS_SELECTED:
      return {
        ...state,
        shippingMethod: action.payload.shippingMethod,
        isShippingMethodSelected: action.payload.isShippingMethodSelected,
      };

    case CheckoutActionTypes.REMEMBER_CUSTOMER_INFO:
      return { ...state };

    default:
      return state;
  }
};
