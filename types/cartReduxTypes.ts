import { Product } from './index';
/**
 * Cart Reducer state interface
 *@interface
 */

export interface CartState {
  cart: Product[];
  discount: number;
  total: number;
  productAmount: number;
}

/**
 * Cart Reducer action types
 *@interface
 */
export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  CALCULATE_CART_TOTALS = 'CALCULATE_CART_TOTALS',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: Product;
}
interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: string;
}

interface CalculateCartTotalsAction {
  type: CartActionTypes.CALCULATE_CART_TOTALS;
}
interface IncreaseProductQuantityAction {
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY;
  payload: number;
}
interface DecreaseProductQuantityAction {
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY;
  payload: number;
}

/**
 *Combined type for Cart action creators
 *@type
 */
export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | CalculateCartTotalsAction
  | IncreaseProductQuantityAction
  | DecreaseProductQuantityAction;
