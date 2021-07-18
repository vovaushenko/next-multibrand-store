import { Dispatch } from 'redux';
import {} from 'redux-thunk';
import {
  CartAction,
  CartActionTypes,
  CartItem,
} from '../../types/cartReduxTypes';
import { State } from '../reducers';
/**
 *@Cart async action creator, will dispatch action to add item to cart, then to calculate totals && quantity in cart
 *@function addToCart
 *@param {object} product - product item to be added to cart
 *@returns {undefined}
 */
export const addToCart =
  (product: CartItem) =>
  async (
    dispatch: Dispatch<CartAction>,
    getState: () => State
  ): Promise<void> => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: product });
    dispatch({
      type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY,
    });
    dispatch({
      type: CartActionTypes.CALCULATE_CART_TOTALS,
    });

    localStorage.setItem('sneakerManiacsCart', JSON.stringify(getState().cart));
  };
export type addToCartType = typeof addToCart;

/**
 *@Cart async action creator, will dispatch action to remove item from cart, then to calculate totals && quantity in cart
 *@function removeFromCart
 *@param {string} productId - id of cart item
 *@param {string} productSize - size of cart item
 *@returns {undefined}
 */
export const removeFromCart =
  (productId: string, productSize: string) =>
  async (
    dispatch: Dispatch<CartAction>,
    getState: () => State
  ): Promise<void> => {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: { productId, productSize },
    });
    dispatch({
      type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY,
    });
    dispatch({
      type: CartActionTypes.CALCULATE_CART_TOTALS,
    });

    localStorage.setItem('sneakerManiacsCart', JSON.stringify(getState().cart));
  };
export type removeFromCartType = typeof removeFromCart;

/**
 *@Cart  action creator, will dispatch action to calculate price totals in cart
 *@function calculateCartTotals
 *@returns {undefined}
 */
export const calculateCartTotals = (): CartAction => ({
  type: CartActionTypes.CALCULATE_CART_TOTALS,
});
