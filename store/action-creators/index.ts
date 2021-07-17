import * as AdminActionCreators from './adminActionCreators';
import * as AuthActionCreators from './authActionCreators';
import * as CartActionCreators from './cartActionCreators';
import * as ProductsActionCreators from './productActionCreators';
import * as UIactionCreators from './uiActionCreators';

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
};
