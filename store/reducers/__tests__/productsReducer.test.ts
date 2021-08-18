import { mockProduct } from '../../../test/mockReduxStore';
import { Product } from '../../../types';
import {
  ProductActionTypes,
  ProductsAction,
  ProductsState,
} from '../../../types/productTypes';
import { productsReducer } from '../productsReducer';

const initialState: ProductsState = {
  products: [],
  product: {} as Product,
  filters: {
    brand: '',
    color: '',
    size: '',
    department: '',
  },
  filteredProducts: [],
  isLoading: false,
  error: null,
};

describe('Admin reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = productsReducer(undefined, {} as ProductsAction);
    expect(newState).toStrictEqual(initialState);
  });

  describe('Fetching products', () => {
    test('should set loading on LOAD_PRODUCTS action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.LOAD_PRODUCTS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });
    test('should stop loading and set products on PRODUCTS_DID_LOAD action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.PRODUCTS_DID_LOAD,
        payload: [mockProduct],
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        products: [mockProduct],
      });
    });
    test('should stop loading and set error on PRODUCTS_LOAD_ERROR action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.PRODUCTS_LOAD_ERROR,
        payload: 'Something went wrong',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'Something went wrong',
      });
    });
  });

  describe('Fetching product details', () => {
    test('should set loading on LOAD_PRODUCT_DETAILS action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.LOAD_PRODUCT_DETAILS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });
    test('should stop loading and set product details on PRODUCT_DETAILS_DID_LOAD action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.PRODUCT_DETAILS_DID_LOAD,
        payload: mockProduct,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        product: mockProduct,
      });
    });
    test('should stop loading and set error on PRODUCT_DETAILS_LOAD_ERROR action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.PRODUCT_DETAILS_LOAD_ERROR,
        payload: 'Something went wrong',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'Something went wrong',
      });
    });
  });

  describe('Products filtering', () => {
    test('should set specified filter on APPLY_FILTER action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.APPLY_FILTER,
        payload: { filterName: 'brand', filterValue: 'adidas' },
      });

      expect(newState).toStrictEqual({
        ...initialState,
        filters: {
          brand: 'adidas',
          color: '',
          size: '',
          department: '',
        },
      });
    });
    test('should set specified filter on APPLY_FILTER action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.APPLY_FILTER,
        payload: { filterName: 'department', filterValue: 'men' },
      });

      expect(newState).toStrictEqual({
        ...initialState,
        filters: {
          brand: '',
          color: '',
          size: '',
          department: 'men',
        },
      });
    });
    test('should set specified filter on APPLY_FILTER action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.APPLY_FILTER,
        payload: { filterName: 'color', filterValue: 'red' },
      });

      expect(newState).toStrictEqual({
        ...initialState,
        filters: {
          brand: '',
          color: 'red',
          size: '',
          department: '',
        },
      });
    });
    test('should set specified filter on APPLY_FILTER action type', () => {
      const newState = productsReducer(initialState, {
        type: ProductActionTypes.APPLY_FILTER,
        payload: { filterName: 'size', filterValue: '11' },
      });

      expect(newState).toStrictEqual({
        ...initialState,
        filters: {
          brand: '',
          color: '',
          size: '11',
          department: '',
        },
      });
    });
  });
});
