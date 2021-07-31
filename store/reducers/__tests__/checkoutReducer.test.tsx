import {
  CheckoutActionTypes,
  CheckoutState,
} from '../../../types/checkoutTypes';
import { checkoutReducer } from '../checkoutReducer';

const initialState: CheckoutState = {
  isLoading: false,
  userShippingInfo: null,
  shippingMethod: 'free',
  isShippingInfoCollected: false,
  isShippingMethodSelected: false,
  isPaymentInfoCollected: false,
  error: null,
  isPaid: false,
};

describe('Checkout Reducer', () => {
  test('should set loading to true on VERIFY_SHIPPING_ADDRESS action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.VERIFY_SHIPPING_ADDRESS,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should return correct state for SHIPPING_ADDRESS_IS_CORRECT action type', () => {
    const userShippingInfo = {
      address: 'test',
      city: 'tomato',
      country: 'Canada',
      email: 'test@gmail.com',
      firstName: 'john',
      lastName: 'doe',
      phone: '12345',
      state: 'Ontario',
      zipCode: '12234',
    };

    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.SHIPPING_ADDRESS_IS_CORRECT,
      payload: {
        isShippingInfoCollected: true,
        userShippingInfo,
      },
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      userShippingInfo,
      isShippingInfoCollected: true,
    });
  });

  test('should set loading to true on SELECT_SHIPPING_METHOD action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.SELECT_SHIPPING_METHOD,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should return correct state for SHIPPING_METHOD_IS_SELECTED action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.SHIPPING_METHOD_IS_SELECTED,
      payload: {
        isShippingMethodSelected: true,
        shippingMethod: 'expressTwoDay',
      },
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      shippingMethod: 'expressTwoDay',
      isShippingMethodSelected: true,
    });
  });

  test('should remember customer info on REMEMBER_CUSTOMER_INFO action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.REMEMBER_CUSTOMER_INFO,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isPaymentInfoCollected: true,
    });
  });

  test('should set loading on PROCESS_PAYMENT action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.PROCESS_PAYMENT,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should set set isPaid on PAYMENT_WAS_SUCCESSFUL action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.PAYMENT_WAS_SUCCESSFUL,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isPaid: true,
    });
  });

  test('should set error on PAYMENT_WAS_DENIED action type', () => {
    const newState = checkoutReducer(initialState, {
      type: CheckoutActionTypes.PAYMENT_WAS_DENIED,
      payload: 'not enough credit',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      error: 'not enough credit',
    });
  });
});
