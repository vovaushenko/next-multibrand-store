import React from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import * as Styled from './styles.ProductsGrid';

export interface Props {
  products: Product[];
  layoutType: 'vertical' | 'grid';
}
/**
 * Representational, statically pre-generated component
 *@function WhatsHot
 *@props will be received at build-time from DB
 *@param {object} products - list of Products
 *@returns {JSX.Element} - Rendered component list of <HorizontalCard/> with product details
 */
const ProductGrid = ({ products, layoutType }: Props): JSX.Element => {
  return (
    <Styled.Container layoutType={layoutType}>
      {products.map((product) => (
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
  );
};

export default ProductGrid;
