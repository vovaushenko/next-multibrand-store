import { Product } from '../../../types';
import {
  RecentlyViewedProductActionTypes,
  RecentlyViewedProductsAction,
  RecentlyViewedProductsState,
} from '../../../types/recentlyViewedProductsTypes';
import { recentlyViewedProductsReducer } from '../recentlyViewedProducts';

const initialState: RecentlyViewedProductsState = {
  viewedProducts: [],
  isLoading: false,
};

const mockProduct: Product = {
  _id: 'test',
  brand: 'Adidas',
  colors: ['red', 'green'],
  department: 'women',
  images: [{ public_id: 'test', url: 'test', _id: 'test' }],
  description: 'tomato',
  model: 'test',
  price: 500,
  size: ['10'],
  styleCode: 'test',
};

describe('recently viewed products reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = recentlyViewedProductsReducer(
      undefined,
      {} as RecentlyViewedProductsAction
    );
    expect(newState).toStrictEqual(initialState);
  });

  test('set isLoading to true on LOAD_RECENTLY_VIEWED_PRODUCTS action type', () => {
    const newState = recentlyViewedProductsReducer(initialState, {
      type: RecentlyViewedProductActionTypes.LOAD_RECENTLY_VIEWED_PRODUCTS,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should add product to array viewedProducts on ADD_PRODUCT_TO_RECENTLY_VIEWED action type', () => {
    const newState = recentlyViewedProductsReducer(initialState, {
      type: RecentlyViewedProductActionTypes.ADD_PRODUCT_TO_RECENTLY_VIEWED,
      payload: mockProduct,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      viewedProducts: [mockProduct],
    });
  });

  test('should add loaded products to state and set loading to false on RECENTLY_VIEWED_PRODUCTS_DID_LOAD action type', () => {
    const newState = recentlyViewedProductsReducer(initialState, {
      type: RecentlyViewedProductActionTypes.RECENTLY_VIEWED_PRODUCTS_DID_LOAD,
      payload: [mockProduct, mockProduct],
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      viewedProducts: [mockProduct, mockProduct],
    });
  });
});
