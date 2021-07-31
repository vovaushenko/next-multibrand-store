import {
  CartAction,
  CartActionTypes,
  CartState,
} from '../../../types/cartReduxTypes';
import { cartReducer } from '../cartReducer';

const initialState: CartState = {
  cart: [],
  discount: 0,
  total: 0,
  productAmount: 0,
};

const mockItem = {
  brand: 'Adidas',
  model: 'Yeezy',
  price: 500,
  productID: '123zx',
  productImg: 'test.img',
  size: '11',
};

describe('Cart reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = cartReducer(undefined, {} as CartAction);
    expect(newState).toStrictEqual(initialState);
  });

  test('should add item to cart on ADD_TO_CART action type', () => {
    const newState = cartReducer(initialState, {
      type: CartActionTypes.ADD_TO_CART,
      payload: { ...mockItem },
    });

    expect(newState).toStrictEqual({
      ...initialState,
      cart: [mockItem],
    });
  });
});

describe('Cart reducer remove from cart functionality', () => {
  const initialState: CartState = {
    cart: [mockItem],
    discount: 0,
    total: 0,
    productAmount: 0,
  };

  const newState = cartReducer(initialState, {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: { productId: '123zx', productSize: '11' },
  });

  expect(newState).toStrictEqual({
    ...initialState,
    cart: [],
  });
});

describe('Cart reducer calculate quantity and totals functionality', () => {
  test('should return 0 quantity for empty cart', () => {
    const newState = cartReducer(initialState, {
      type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      productAmount: 0,
    });
  });

  test('should return 3 quantity for if 3 items are added to cart', () => {
    const initialState: CartState = {
      cart: [mockItem, mockItem, mockItem],
      discount: 0,
      total: 0,
      productAmount: 0,
    };

    const newState = cartReducer(initialState, {
      type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      productAmount: 3,
    });
  });

  test('should return 0 totals for empty cart', () => {
    const newState = cartReducer(initialState, {
      type: CartActionTypes.CALCULATE_CART_TOTALS,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      total: 0,
    });
  });

  test('should return 1000 total for cart with two items with price 500', () => {
    const newState = cartReducer(
      { ...initialState, cart: [mockItem, mockItem] },
      {
        type: CartActionTypes.CALCULATE_CART_TOTALS,
      }
    );

    expect(newState).toStrictEqual({
      ...initialState,
      cart: [mockItem, mockItem],
      total: 1000,
    });
  });
});
