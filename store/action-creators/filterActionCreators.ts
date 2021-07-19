import { Dispatch } from 'redux';
import { ProductFilters } from '../../types';
import { ProductActionTypes, ProductsAction } from '../../types/productTypes';

/**
 *@Filter  action creator, will dispatch action to add specified filter to global filtering object and then will dispatch action to filter products
 *@function calculateCartTotals
 *@returns {undefined}
 */
export const addFilterOption =
  ({
    filterName,
    filterValue,
  }: {
    filterName: keyof ProductFilters;
    filterValue: string;
  }) =>
  async (dispatch: Dispatch<ProductsAction>): Promise<void> => {
    dispatch({
      type: ProductActionTypes.APPLY_FILTER,
      payload: { filterName, filterValue },
    });

    dispatch({ type: ProductActionTypes.FILTER_PRODUCTS });
  };
export type addToCartType = typeof addFilterOption;
