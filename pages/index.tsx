import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import LandingPage from '../screens/LandingPage/LandingPage';

export default function Home(): JSX.Element {
  const { loadAllProducts } = useActions();
  const { products, isLoading } = useTypedSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) {
      loadAllProducts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      title={'Shop The Hottest Sneakers | Nike | Jordan | Adidas | Puma '}
      showBottomGradient
    >
      <LandingPage products={products} areProductsLoading={isLoading} />
    </Layout>
  );
}
