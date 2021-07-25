import { Order } from '.';

/**
 * Orders Reducer state interface
 *@interface
 */
export interface OrdersState {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Order Reducer action types
 *@interface
 */
export enum OrdersActionTypes {
  LOAD_ORDERS = 'LOAD_ORDERS',
  ORDERS_DID_LOAD = 'ORDERS_DID_LOAD',
  ORDERS_LOAD_ERROR = 'ORDERS_LOAD_ERROR',
}
/**
 * ORDERS action interfaces
 */
interface LoadOrdersRequestAction {
  type: OrdersActionTypes.LOAD_ORDERS;
}
interface LoadOrdersSuccessAction {
  type: OrdersActionTypes.ORDERS_DID_LOAD;
  payload: Order[];
}
interface LoadOrdersErrorAction {
  type: OrdersActionTypes.ORDERS_LOAD_ERROR;
  payload: string;
}
/**
 *Combined type for Order action creators
 *@type
 */
export type OrdersAction =
  | LoadOrdersRequestAction
  | LoadOrdersSuccessAction
  | LoadOrdersErrorAction;
