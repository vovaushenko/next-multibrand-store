import * as AdminActionCreators from './adminActionCreators';
import * as AuthActionCreators from './authActionCreators';
import * as CartActionCreators from './cartActionCreators';
import * as CheckoutActionCreators from './checkoutActionCreators';
import * as FilterActionCreators from './filterActionCreators';
import * as OrdersActionCreators from './orderActionCreators';
import * as ProductsActionCreators from './productActionCreators';
import * as ReviewsActionCreators from './reviewActionCreators';
import * as SortActionCreators from './sortActionCreators';
import * as UIactionCreators from './uiActionCreators';
import * as UseractionCreators from './userActionCreators';
/**
 * This object combines all available redux action creators
 * @object CombinedActionCreators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...AdminActionCreators,
  ...ProductsActionCreators,
  ...UIactionCreators,
  ...AuthActionCreators,
  ...CartActionCreators,
  ...FilterActionCreators,
  ...SortActionCreators,
  ...CheckoutActionCreators,
  ...OrdersActionCreators,
  ...ReviewsActionCreators,
  ...UseractionCreators,
};
