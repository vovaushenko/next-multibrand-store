import { ProductActionTypes, ProductsAction } from '../../types/productTypes';

/**
 *@Sort  action creator, will dispatch action sort products according to specified sorting param
 *@function removeAllFilters
 *@param {string} filterType : 'a-z'/'z-a' - increasing/decreasing alphabetically, priceLowToHight, priceHightToLow
 *@returns {undefined}
 */
export const sortProducts = (
  filterType: 'a-z' | 'z-a' | 'priceLowToHight' | 'priceHightToLow'
): ProductsAction => ({
  type: ProductActionTypes.SORT_PRODUCTS,
  payload: filterType,
});

export type sortProductsType = typeof sortProducts;
