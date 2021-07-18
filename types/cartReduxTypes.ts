/**
 * Cart Reducer state interface
 *@interface
 */

export interface CartItem {
  productID: string;
  productImg: string;
  brand: string;
  model: string;
  price: number;
  size: string;
}

export interface CartState {
  cart: CartItem[];
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
  CALCULATE_PRODUCT_QUANTITY = 'CALCULATE_PRODUCT_QUANTITY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}
interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: { productSize: string; productId: string };
}

interface CalculateProductQuantity {
  type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY;
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
  | CalculateProductQuantity
  | CalculateCartTotalsAction
  | IncreaseProductQuantityAction
  | DecreaseProductQuantityAction;
