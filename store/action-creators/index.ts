import * as AdminActionCreators from './adminActionCreators';

/**
 * This object combines all available redux action creators
 * @object CombinedActionCreators
 * @returns {object} - combined action creators
 */
export const CombinedActionCreators = {
  ...AdminActionCreators,
};
