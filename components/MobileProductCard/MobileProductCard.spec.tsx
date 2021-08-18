import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import MobileProductCard from './MobileProductCard';
import * as Styled from './MobileProductCard.styles';
import { mockProduct } from '../../test/mockReduxStore';
import Link from 'next/link';

describe('Mobile Product Card', () => {
  const wrap = shallow(<MobileProductCard product={mockProduct} />);

  it('should render component with no errors', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified attributes', () => {
    const cardImg = wrap.find('.product-img');
    expect(cardImg.length).toBe(1);
    expect(cardImg.prop('alt')).toBe(
      `${mockProduct.brand} ${mockProduct.model}`
    );
    expect(cardImg.prop('src')).toBe(mockProduct.images[0].url);
  });

  it('should render specified badge', () => {
    const price = wrap.find(Styled.Badge);
    expect(price.length).toBe(1);
  });

  it('should render router link with specified params', () => {
    const link = wrap.find(Link);
    expect(link.length).toBe(1);
    expect(link.prop('href')).toBe(`/products/${mockProduct._id}`);
  });
});
