import { Product } from '.';
import { ProductFilters, SortingOptionsType } from './index';

/**
 * Products Reducer state interface
 *@interface
 */
export interface ProductsState {
  products: Product[];
  product: Product;
  filters: ProductFilters;
  filteredProducts: Product[];
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

  APPLY_FILTER = 'APPLY_FILTER',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  REMOVE_FILTERS = 'REMOVE_FILTERS',

  SORT_PRODUCTS = 'SORT_PRODUCTS',

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
 * FILTER Action interfaces
 */
interface ApplyFilterAction {
  type: ProductActionTypes.APPLY_FILTER;
  payload: {
    filterName: keyof ProductFilters;
    filterValue: string;
  };
}
interface FilterProductsAction {
  type: ProductActionTypes.FILTER_PRODUCTS;
}
interface RemoveFiltersAction {
  type: ProductActionTypes.REMOVE_FILTERS;
}
/**
 * SORTING Action interfaces
 */
interface SortProductsAction {
  type: ProductActionTypes.SORT_PRODUCTS;
  payload: SortingOptionsType;
}

/**
 * CLEAR STATE action interfaces
 */
interface ClearStateAction {
  type: ProductActionTypes.CLEAR_ERRORS;
}
/**
 *Combined type for Product action creators
 *@type
 */
export type ProductsAction =
  | LoadProductsRequestAction
  | LoadProductsSuccessAction
  | LoadProductsErrorAction
  | LoadProductDetailsAction
  | LoadProductDetailsSuccessAction
  | LoadProductDetailsErrorAction
  | ApplyFilterAction
  | FilterProductsAction
  | RemoveFiltersAction
  | SortProductsAction
  | ClearStateAction;
