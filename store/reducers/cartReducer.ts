import {
  CartAction,
  CartActionTypes,
  CartState,
} from '../../types/cartReduxTypes';

const initialState: CartState = {
  cart: [],
  discount: 0,
  total: 0,
  productAmount: 0,
};

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
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.productID !== action.payload
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

    // TODO:INCREASE PRODUCT QUANTITY
    // TODO:DECREASE PRODUCT QUANTITY

    default:
      return state;
  }
};
