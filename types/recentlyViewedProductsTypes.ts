import { Product } from '.';

/**
 * Recently viewed products Reducer state interface
 *@interface
 */
export interface RecentlyViewedProductsState {
  viewedProducts: Product[];
  isLoading: boolean;
}
/**
 * Recently viewed products Reducer action types
 *@interface
 */
export enum RecentlyViewedProductActionTypes {
  ADD_PRODUCT_TO_RECENTLY_VIEWED = 'ADD_PRODUCT_TO_RECENTLY_VIEWED',
  LOAD_RECENTLY_VIEWED_PRODUCTS = 'LOAD_RECENTLY_VIEWED_PRODUCTS',
  RECENTLY_VIEWED_PRODUCTS_DID_LOAD = 'RECENTLY_VIEWED_PRODUCTS_DID_LOAD',
}

/**
 * Recently viewed PRODUCTS action interfaces
 */
interface AddProductToRecentlyViewedAction {
  type: RecentlyViewedProductActionTypes.ADD_PRODUCT_TO_RECENTLY_VIEWED;
  payload: Product;
}
interface LoadRecentlyViewedProductsAction {
  type: RecentlyViewedProductActionTypes.LOAD_RECENTLY_VIEWED_PRODUCTS;
}
interface RecentlyViewedProductsDidLoad {
  type: RecentlyViewedProductActionTypes.RECENTLY_VIEWED_PRODUCTS_DID_LOAD;
  payload: Product[];
}

/**
 *Combined type for Recently viewed PRODUCT action creators
 *@type
 */
export type RecentlyViewedProductsAction =
  | AddProductToRecentlyViewedAction
  | LoadRecentlyViewedProductsAction
  | RecentlyViewedProductsDidLoad;
