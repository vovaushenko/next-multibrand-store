import { Dispatch } from 'redux';
import {
  CartAction,
  CartActionTypes,
  CartItem,
} from '../../types/cartReduxTypes';

export const addToCart =
  (product: CartItem) =>
  async (dispatch: Dispatch<CartAction>): Promise<void> => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: product });
    dispatch({
      type: CartActionTypes.CALCULATE_PRODUCT_QUANTITY,
    });
    dispatch({
      type: CartActionTypes.CALCULATE_CART_TOTALS,
    });
  };

export const removeFromCart = (productID: string): CartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: productID,
});

export const calculateCartTotals = (): CartAction => ({
  type: CartActionTypes.CALCULATE_CART_TOTALS,
});
