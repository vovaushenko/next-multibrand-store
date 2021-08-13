import React, { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import Skeleton from '../../../components/Skeleton/Skeleton';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AllProducts from '../../../screens/AllProducts/AllProducts';
/**
 * Page where product data is mapped into AllProductsPage
 *@function AllProductsPage
 *@returns {JSX.Element} - Rendered AllProductsPage component
 */
export default function AllProductsPage(): JSX.Element {
  const { loadAllProducts, addFilterOption } = useActions();
  const { isLoading, filteredProducts, products } = useTypedSelector(
    (state) => state.products
  );
  useEffect(() => {
    loadAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    addFilterOption({ filterName: 'brand', filterValue: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  // When new filters will be applied inside of <AllProducts/> will get new data
  return (
    <Layout title="Shop All Products">
      {isLoading ? (
        <Skeleton variant="allProducts" />
      ) : (
        <AllProducts products={filteredProducts} />
      )}
    </Layout>
  );
}
