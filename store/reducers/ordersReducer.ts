import {
  OrdersAction,
  OrdersActionTypes,
  OrdersState,
} from '../../types/orderTypes';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const ordersReducer = (
  state = initialState,
  action: OrdersAction
): OrdersState => {
  switch (action.type) {
    case OrdersActionTypes.LOAD_ORDERS:
      return { ...state, isLoading: true };

    case OrdersActionTypes.ORDERS_DID_LOAD:
      return { ...state, isLoading: false, orders: action.payload };

    case OrdersActionTypes.ORDERS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
