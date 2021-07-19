import { ProductActionTypes, ProductsAction } from '../../types/productTypes';
import { SortingOptionsType } from './../../types/index';

/**
 *@Sort  action creator, will dispatch action sort products according to specified sorting param
 *@function removeAllFilters
 *@param {string} filterType : 'a-z'/'z-a' - increasing/decreasing alphabetically, priceLowToHight, priceHightToLow
 *@returns {undefined}
 */
export const sortProducts = (
  filterType: SortingOptionsType
): ProductsAction => ({
  type: ProductActionTypes.SORT_PRODUCTS,
  payload: filterType,
});

export type sortProductsType = typeof sortProducts;
