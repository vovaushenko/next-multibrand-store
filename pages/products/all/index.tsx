import React, { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import SneakerLoader from '../../../components/SneakerLoader/SneakerLoader';
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
  const { isLoading, filteredProducts } = useTypedSelector(
    (state) => state.products
  );

  useEffect(() => {
    // here we will firstly load all products from DB
    // then we add empty 'brand' filter option, just to instantiate filteredProducts in global state (otherwise they will be empty [])
    const instantiateGlobalProducts = async () => {
      await loadAllProducts();
      await addFilterOption({ filterName: 'brand', filterValue: '' });
    };

    instantiateGlobalProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // We will pass filteredProducts from global state to <AllProducts/>
  // When new filters will be applied inside of <AllProducts/> will get new data
  return (
    <Layout title={'Shop All Products'}>
      {isLoading ? (
        <SneakerLoader />
      ) : (
        <AllProducts products={filteredProducts} />
      )}
    </Layout>
  );
}
