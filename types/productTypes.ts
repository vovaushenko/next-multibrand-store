import { Product } from '.';

/**
 * Products Reducer state interface
 *@interface
 */
export interface ProductsState {
  products: Product[];
  product: Product;
  isLoading: boolean;
  error: string | null;
}
/**
 * Products Reducer action types
 *@interface
 */
export enum ProductActionTypes {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  PRODUCTS_DID_LOAD = 'PRODUCTS_DID_LOAD',
  PRODUCTS_LOAD_ERROR = 'PRODUCTS_LOAD_ERROR',

  LOAD_PRODUCT_DETAILS = 'LOAD_PRODUCT_DETAILS',
  PRODUCT_DETAILS_DID_LOAD = 'PRODUCT_DETAILS_DID_LOAD',
  PRODUCT_DETAILS_LOAD_ERROR = 'PRODUCT_DETAILS_LOAD_ERROR',

  CLEAR_ERRORS = 'CLEAR_ERRORS',
}

/**
 * PRODUCTS action interfaces
 */
interface LoadProductsRequestAction {
  type: ProductActionTypes.LOAD_PRODUCTS;
}
interface LoadProductsSuccessAction {
  type: ProductActionTypes.PRODUCTS_DID_LOAD;
  payload: Product[];
}
interface LoadProductsErrorAction {
  type: ProductActionTypes.PRODUCTS_LOAD_ERROR;
  payload: string;
}
/**
 * PRODUCT DETAILS action interfaces
 */
interface LoadProductDetailsAction {
  type: ProductActionTypes.LOAD_PRODUCT_DETAILS;
}
interface LoadProductDetailsSuccessAction {
  type: ProductActionTypes.PRODUCT_DETAILS_DID_LOAD;
  payload: Product;
}
interface LoadProductDetailsErrorAction {
  type: ProductActionTypes.PRODUCT_DETAILS_LOAD_ERROR;
  payload: string;
}
/**
 * CLEAR STATE action interfaces
 */
interface ClearStateAction {
  type: ProductActionTypes.CLEAR_ERRORS;
}
/**
 *Combined type for Admin action creators
 *@type
 */
export type ProductsAction =
  | LoadProductsRequestAction
  | LoadProductsSuccessAction
  | LoadProductsErrorAction
  | LoadProductDetailsAction
  | LoadProductDetailsSuccessAction
  | LoadProductDetailsErrorAction
  | ClearStateAction;
