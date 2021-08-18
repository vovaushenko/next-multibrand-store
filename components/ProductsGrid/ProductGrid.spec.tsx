import { shallow } from 'enzyme';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductsGrid from './ProductsGrid';
import { mockProduct } from '../../test/mockReduxStore';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(
    <ProductsGrid
      products={[mockProduct, mockProduct, mockProduct]}
      layoutType="grid"
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should correctly render product cards', () => {
    const productCards = wrap.find(ProductCard);
    expect(productCards.length).toBe(3);
  });
});
