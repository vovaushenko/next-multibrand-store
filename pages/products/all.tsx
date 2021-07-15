import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import SneakerLoader from '../../components/SneakerLoader/SneakerLoader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AllProducts from '../../screens/AllProducts/AllProducts';

export default function AllProductsPage(): JSX.Element {
  const { loadAllProducts } = useActions();
  const { isLoading, products } = useTypedSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      loadAllProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={'Shop All Products'}>
      {isLoading ? <SneakerLoader /> : <AllProducts products={products} />}
    </Layout>
  );
}
