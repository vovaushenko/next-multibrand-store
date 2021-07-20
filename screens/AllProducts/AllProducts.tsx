import React, { useCallback, useState } from 'react';
import Filters from '../../components/Filters/Filters';
import GridControl from '../../components/GridControl/GridControl';
import ProductGrid from '../../components/ProductsGrid/ProductsGrid';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import { Product } from '../../types';
import * as Styled from './styles.AllProducts';

export interface Props {
  products: Product[];
}
/**
 * Representational component All Products map array of products to UI
 *@function AllProducts
 *@param {object} products - array of objects (type Product)
 *@returns {JSX.Element} - Rendered AllProducts component
 */
const AllProducts = ({ products }: Props): JSX.Element => {
  const [layoutType, setLayoutType] = useState<'grid' | 'vertical'>('grid');

  const changeLayout = useCallback((val: 'grid' | 'vertical') => {
    setLayoutType(val);
  }, []);

  return (
    <Styled.Container>
      <Styled.Wrap>
        <Filters />
        <Styled.GridWrap>
          <GridControl
            header={'All Products'}
            productAmount={products.length}
            changeLayout={changeLayout}
          />
          <ProductGrid products={products} layoutType={layoutType} />
        </Styled.GridWrap>
      </Styled.Wrap>

      <RecentlyViewed />
    </Styled.Container>
  );
};
export default AllProducts;
