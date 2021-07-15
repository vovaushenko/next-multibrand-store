import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ProductCard from './ProductCard';
import * as Styled from './styles.ProductCard';

const cardImages = [
  { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
];

describe('Product Card', () => {
  const wrap = shallow(
    <ProductCard
      brandName="Nike"
      productModel="Roche Run"
      productPrice="777"
      images={cardImages}
      productID="xyz"
      isAvailable={true}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified attributes', () => {
    const cardImg = wrap.find('.card-img');
    expect(cardImg.length).toBe(1);
    expect(cardImg.prop('alt')).toBe('Nike Roche Run');
  });
  it('should render specified price', () => {
    const price = wrap.find(Styled.Price);
    expect(price.text()).toBe('$777');
  });

  it('should render add to cart in button if product is available', () => {
    const btnWrap = wrap.find('.add-to-cart-btn');

    expect(btnWrap.length).toBe(1);
  });
});
