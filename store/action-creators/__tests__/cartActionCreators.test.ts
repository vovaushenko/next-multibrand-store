import { mockReduxStore } from '../../../test/mockReduxStore';
import { storeFactory } from '../../../test/testUtils';
import { LocalRootState } from '../../reducers';
import { addToCart, calculateCartTotals } from '../cartActionCreators';
import { removeFromCart } from './../cartActionCreators';

/**
 * Mocked redux store
 *@returns {store} - redux store of the app
 */
const store = storeFactory(mockReduxStore);

const mockProduct = {
  brand: 'adidas',
  model: 'adi',
  price: 125,
  productID: 'abc1',
  productImg: 'test.img',
  size: '11',
};

describe('Cart action creators', () => {
  test('correctly calculate totals', () => {
    store.dispatch(calculateCartTotals());
    const newState = store.getState();
    const expectedState: LocalRootState = {
      ...mockReduxStore,
      cart: {
        ...store.getState().cart,
        total: 0,
      },
    };

    expect(newState).toEqual(expectedState);
  });

  test('add to cart adds items to cart', () => {
    store.dispatch(addToCart(mockProduct));
    const newState = store.getState();
    const expectedState: LocalRootState = {
      ...mockReduxStore,
      cart: {
        discount: 0,
        productAmount: 1,
        total: mockProduct.price,
        cart: [{ ...mockProduct }],
      },
    };

    expect(newState).toEqual(expectedState);
  });

  test('remove from cart works as expected', () => {
    store.dispatch(removeFromCart(mockProduct.productID, mockProduct.size));
    const newState = store.getState();
    const expectedState: LocalRootState = {
      ...mockReduxStore,
      cart: {
        discount: 0,
        productAmount: 0,
        total: 0,
        cart: [],
      },
    };

    expect(newState).toEqual(expectedState);
  });
});
