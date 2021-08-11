import {
  OrdersAction,
  OrdersActionTypes,
  OrdersState,
} from '../../../types/orderTypes';
import { ordersReducer } from '../ordersReducer';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const mockOrder = {
  _id: 'id123',
  user: 'test',
  deliveryStatus: 'not delivered',
  orderTotal: 500,
  paidAt: '2/2/2021',
  paymentInfo: { paymentID: 'test', status: 'paid' },
  purchase: [
    {
      brand: 'adidas',
      img: 'test',
      model: 'test',
      price: 124,
      productID: 'test1',
      size: '11',
    },
  ],
  shippingInfo: {
    address: 'test',
    city: 'test',
    country: 'test',
    email: 'test',
    firstName: 'test',
    lastName: 'test',
    phone: 'test',
    state: 'test',
    zipCode: 'test',
  },
};

describe('Orders Reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = ordersReducer(undefined, {} as OrdersAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should set loading to true on LOAD_ORDERS action type', () => {
    const newState = ordersReducer(initialState, {
      type: OrdersActionTypes.LOAD_ORDERS,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should add orders to state and set loading to false on ORDERS_DID_LOAD action type', () => {
    const newState = ordersReducer(initialState, {
      type: OrdersActionTypes.ORDERS_DID_LOAD,
      payload: [mockOrder],
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      orders: [mockOrder],
    });
  });

  test('should set error on ORDERS_LOAD_ERROR action type', () => {
    const newState = ordersReducer(initialState, {
      type: OrdersActionTypes.ORDERS_LOAD_ERROR,
      payload: '404 not found',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      error: '404 not found',
    });
  });
});
