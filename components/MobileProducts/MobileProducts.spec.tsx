import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import MobileProducts from './MobileProducts';
import * as Styled from './MobileProducts.styles';
import { mockProduct } from '../../test/mockReduxStore';
import Image from 'next/image';
import MobileProductCard from '../MobileProductCard/MobileProductCard';

describe('Mobile Product Card', () => {
  const wrap = shallow(
    <MobileProducts
      products={[mockProduct, mockProduct, mockProduct]}
      logoParams={{ height: 77, width: 111 }}
      brandName={'Tomato'}
      brandImage={'/tomato.jpg'}
    />
  );

  it('should render component with no errors', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render brand logo with specified attributes', () => {
    const brandLogo = wrap.find(Styled.BrandLogo);
    expect(brandLogo.length).toBe(1);
    const brandImage = brandLogo.find(Image);

    expect(brandImage.prop('alt')).toBe('Tomato');
    expect(brandImage.prop('src')).toBe('/tomato.jpg');
    expect(brandImage.prop('height')).toBe(77);
    expect(brandImage.prop('width')).toBe(111);
  });

  it('should render all Mobile Product Cards', () => {
    const productCard = wrap.find(MobileProductCard);
    expect(productCard.length).toBe(3);
  });
});
