import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import SneakerLoader from '../../components/SneakerLoader/SneakerLoader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function ProductDetailsPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { loadProductDetails } = useActions();
  const { isLoading, product } = useTypedSelector((state) => state.products);

  useEffect(() => {
    if (id && typeof id === 'string') {
      loadProductDetails(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout
      title={'Shop The Hottest Sneakers | Nike | Jordan | Adidas | Puma '}
    >
      {isLoading ? <SneakerLoader /> : <ProductDetails product={product} />}
    </Layout>
  );
}
