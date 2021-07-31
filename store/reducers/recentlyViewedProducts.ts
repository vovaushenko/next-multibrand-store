import { Product } from '../../types';
import {
  RecentlyViewedProductActionTypes,
  RecentlyViewedProductsAction,
  RecentlyViewedProductsState,
} from '../../types/recentlyViewedProductsTypes';

/**
 * @method recentlyViewedFromStorage
 * @returns {object} - stored array of recently viewed products, or empty array if it is not saved in local storage. Action creator loadProductDetails() also add each visited product to recently viewed and persist recentlyViewed array to local storage
 */
const recentlyViewedFromStorage = (): Product[] => {
  if (typeof window !== 'undefined') {
    const persistedRecentlyViewed = localStorage.getItem('recentlyViewed');
    if (persistedRecentlyViewed) return JSON.parse(persistedRecentlyViewed);
  }
  return [];
};

const initialState: RecentlyViewedProductsState = {
  viewedProducts: recentlyViewedFromStorage(),
  isLoading: false,
};

export const recentlyViewedProductsReducer = (
  state = initialState,
  action: RecentlyViewedProductsAction
): RecentlyViewedProductsState => {
  switch (action.type) {
    case RecentlyViewedProductActionTypes.ADD_PRODUCT_TO_RECENTLY_VIEWED:
      // if we already saved this visited product, we will return simple state
      if (
        state.viewedProducts.some(
          (product) => product._id === action.payload._id
        )
      ) {
        return { ...state };
      }
      // otherwise we will store this visited product
      return {
        ...state,
        viewedProducts: [...state.viewedProducts, action.payload],
      };

    case RecentlyViewedProductActionTypes.LOAD_RECENTLY_VIEWED_PRODUCTS:
      return { ...state, isLoading: true };

    case RecentlyViewedProductActionTypes.RECENTLY_VIEWED_PRODUCTS_DID_LOAD:
      return { ...state, isLoading: false, viewedProducts: action.payload };

    default:
      return state;
  }
};
