import * as AdminActionCreators from './adminActionCreators';
import * as ProductsActionCreators from './productActionCreators';

/**
 * This object combines all available redux action creators
 * @object CombinedActionCreators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...AdminActionCreators,
  ...ProductsActionCreators,
};
