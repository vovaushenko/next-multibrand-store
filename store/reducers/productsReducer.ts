import { Product } from '../../types';
import {
  ProductActionTypes,
  ProductsAction,
  ProductsState,
} from '../../types/productTypes';

const initialState: ProductsState = {
  products: [],
  product: {} as Product,
  isLoading: false,
  error: null,
};

//TODO: proper documentation after testing
//TODO: write tests
export const productsReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    //* Actions for fetching all products
    case ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, isLoading: true };

    case ProductActionTypes.PRODUCTS_DID_LOAD:
      return { ...state, isLoading: false, products: action.payload };

    case ProductActionTypes.PRODUCTS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    //* Actions for fetching product details
    case ProductActionTypes.LOAD_PRODUCT_DETAILS:
      return { ...state, isLoading: true };

    case ProductActionTypes.PRODUCT_DETAILS_DID_LOAD:
      return { ...state, isLoading: false, product: action.payload };

    case ProductActionTypes.PRODUCT_DETAILS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    //* Clear Errors in state
    case ProductActionTypes.CLEAR_ERRORS:
      return initialState;

    default:
      return state;
  }
};
