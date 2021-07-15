import { shallow } from 'enzyme';
import React from 'react';
import { dummyProduct } from '../../dev-data/product';
import ProductCard from '../ProductCard/ProductCard';
import ProductsGrid from './ProductsGrid';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(
    <ProductsGrid
      products={[dummyProduct, dummyProduct, dummyProduct]}
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
