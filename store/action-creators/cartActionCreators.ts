import { CartAction, CartActionTypes } from '../../types/cartReduxTypes';
import { Product } from './../../types/index';

export const addToCart = (product: Product): CartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productID: string): CartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: productID,
});

export const calculateCartTotals = (): CartAction => ({
  type: CartActionTypes.CALCULATE_CART_TOTALS,
});
