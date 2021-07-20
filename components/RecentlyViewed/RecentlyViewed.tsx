import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from '../ProductCard/ProductCard';
import * as Styled from './styles.RecentlyViewed';
/**
 *Renders recently viewed products by user
 *@function RecentlyViewed
 *@returns {JSX.Element} - Rendered RecentlyViewed component or null if there is no user has no stored products in local storage
 */
const RecentlyViewed = (): JSX.Element | null => {
  const { viewedProducts } = useTypedSelector((state) => state.recentlyViewed);

  // if there is no viewed products, return early
  if (viewedProducts.length === 0) return null;

  return (
    <Container>
      <PageHeader headerText="recently viewed" />
      <Styled.Container>
        {viewedProducts.map((product) => (
          <ProductCard
            key={product._id}
            productID={product._id}
            brandName={product.brand}
            images={product.images}
            productModel={product.model}
            productPrice={String(product.price)}
            isAvailable={product.size.length > 0}
          />
        ))}
      </Styled.Container>
    </Container>
  );
};

export default RecentlyViewed;
