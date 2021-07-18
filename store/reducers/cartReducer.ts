import {
  CartAction,
  CartActionTypes,
  CartState,
} from '../../types/cartReduxTypes';
/**
 * @method cartItemsFromStorage
 * @returns {object} - initial state for cart reducer, or empty object if store is not saved in local storage. Action creators addToCart() and removeFromCart() persist cart into local storage on each call
 */
const cartItemsFromStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    const persistedCart = localStorage.getItem('sneakerManiacsCart');
    if (persistedCart) return JSON.parse(persistedCart);
  }
  return { cart: [], discount: 0, total: 0, productAmount: 0 };
};

const initialState = cartItemsFromStorage();

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case CartActionTypes.REMOVE_FROM_CART:
      const foundProduct = state.cart.find(
        (product) =>
          product.productID === action.payload.productId &&
          product.size === action.payload.productSize
      );
      if (foundProduct) foundProduct.productID = 'will-be-removed';

      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.productID !== 'will-be-removed'
        ),
      };
    case CartActionTypes.CALCULATE_PRODUCT_QUANTITY:
      return {
        ...state,
        productAmount: state.cart.length,
      };

    case CartActionTypes.CALCULATE_CART_TOTALS: {
      return {
        ...state,
        total: state.cart.reduce((totals, prod) => totals + prod.price, 0),
      };
    }

    default:
      return state;
  }
};
