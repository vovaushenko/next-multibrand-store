import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Skeleton from '../../components/Skeleton/Skeleton';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function ProductDetailsPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { loadProductDetails } = useActions();
  const { isLoading, product } = useTypedSelector((state) => state.products);

  const title =
    product.brand !== undefined && product.model !== undefined
      ? `${product.brand} | ${product.model}`
      : 'Sneaker Maniacs';

  useEffect(() => {
    if (id && typeof id === 'string') {
      loadProductDetails(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout title={title}>
      {isLoading ? (
        <Skeleton variant="productDetails" />
      ) : (
        <ProductDetails product={product} />
      )}
    </Layout>
  );
}
