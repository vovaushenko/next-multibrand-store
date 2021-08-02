import { Product } from '../../types';
import {
  ProductActionTypes,
  ProductsAction,
  ProductsState,
} from '../../types/productTypes';

const initialState: ProductsState = {
  products: [],
  product: {} as Product,
  filters: {
    brand: '',
    color: '',
    size: '',
    department: '',
  },
  filteredProducts: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    //* Actions for fetching all products
    case ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, isLoading: true };

    case ProductActionTypes.PRODUCTS_DID_LOAD:
      return { ...state, isLoading: false, products: action.payload };

    case ProductActionTypes.PRODUCTS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    //* Actions for fetching product details
    case ProductActionTypes.LOAD_PRODUCT_DETAILS:
      return { ...state, isLoading: true };

    case ProductActionTypes.PRODUCT_DETAILS_DID_LOAD:
      return { ...state, isLoading: false, product: action.payload };

    case ProductActionTypes.PRODUCT_DETAILS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    //* Filtering actions

    case ProductActionTypes.APPLY_FILTER:
      const updatedFilters = { ...state.filters };
      updatedFilters[action.payload.filterName] = action.payload.filterValue;
      return { ...state, filters: updatedFilters };

    case ProductActionTypes.FILTER_PRODUCTS:
      // initial value of filteredProducts will point to state.products and reference
      let filteredProducts = [...state.products];
      // then all filters will be applied step-by-step(if they exist and specified by User)
      // filter by brand
      if (state.filters.brand) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.brand.toLowerCase() === state.filters.brand.toLowerCase()
        );
      }
      // filter by color
      if (state.filters.color) {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors
            .map((c) => c.toLowerCase())
            .includes(state.filters.color.toLowerCase())
        );
      }
      // filter by size
      if (state.filters.size) {
        filteredProducts = filteredProducts.filter((product) =>
          product.size.includes(state.filters.size)
        );
      }
      // filter by department
      if (state.filters.department) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.department.toLowerCase() ===
            state.filters.department.toLowerCase()
        );
      }
      return { ...state, filteredProducts };

    case ProductActionTypes.REMOVE_FILTERS:
      return {
        ...state,
        filters: { brand: '', color: '', size: '', department: '' },
      };

    //* Sorting actions
    case ProductActionTypes.SORT_PRODUCTS:
      let sortedProducts = [...state.filteredProducts];

      if (action.payload === 'a-z') {
        sortedProducts = sortedProducts.sort((prod1, prod2) =>
          prod1.brand.localeCompare(prod2.brand)
        );
      }
      if (action.payload === 'z-a') {
        sortedProducts = sortedProducts.sort((prod1, prod2) =>
          prod2.brand.localeCompare(prod1.brand)
        );
      }
      if (action.payload === 'priceLowToHight') {
        sortedProducts = sortedProducts.sort(
          (prod1, prod2) => prod1.price - prod2.price
        );
      }
      if (action.payload === 'priceHightToLow') {
        sortedProducts = sortedProducts.sort(
          (prod1, prod2) => prod2.price - prod1.price
        );
      }
      return { ...state, filteredProducts: sortedProducts };

    //* Clear Errors in state
    case ProductActionTypes.CLEAR_ERRORS:
      return initialState;

    default:
      return state;
  }
};
