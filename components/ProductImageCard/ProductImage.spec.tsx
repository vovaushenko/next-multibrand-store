import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ProductImageCard from './ProductImageCard';
import * as Styled from './styles';

export const images = [
  { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
];

describe('Product Image Card', () => {
  const wrap = shallow(
    <ProductImageCard sneakerModel="Nike Tomato" images={images} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified sneakerModel alt', () => {
    const imgWrap = wrap.find(Styled.BigImage);
    const bigImg = imgWrap.find('.big-img');
    expect(bigImg.prop('alt')).toBe('Nike Tomato');
  });
  it('should render all specified images', () => {
    const smallImages = wrap.find('.small-img');
    expect(smallImages.length).toBe(images.length);
  });
});
