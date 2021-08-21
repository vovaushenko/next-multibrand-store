import { shallow } from 'enzyme';
import React from 'react';
import CarouselCard from './CarouselCard';
import { mockProduct } from '../../test/mockReduxStore';
import * as Styled from './CarouselCard.styles';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<CarouselCard carouselItem={mockProduct} />);
};

describe('CarouselCard', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct badge', () => {
    const badge = wrap.find(Styled.BrandBadge);
    expect(badge.length).toBe(1);

    const badgeBrandImage = badge.find(Image);
    expect(badgeBrandImage.prop('height')).toBe(80);
    expect(badgeBrandImage.prop('width')).toBe(80);
    expect(badgeBrandImage.prop('/images/brands/jordan-3.png'));
  });

  it('should render correct card image', () => {
    const imgWrapper = wrap.find(Styled.Figure);
    expect(imgWrapper.length).toBe(1);

    const cartImg = imgWrapper.find(Image);
    expect(cartImg.prop('height')).toBe(300);
    expect(cartImg.prop('width')).toBe(300);
    expect(cartImg.prop(mockProduct.images[0].url));
  });

  it('should render correct price', () => {
    const price = wrap.find(Styled.Price);
    expect(price.text()).toBe(mockProduct.price + '$');
  });

  it('should render correct title', () => {
    const title = wrap.find(Styled.Title);
    expect(title.text()).toBe(`${mockProduct.department}'s Shoes`);
  });

  it('should render correct product details link', () => {
    const link = wrap.find(Link);
    expect(link.prop('href')).toBe(`/products/${mockProduct._id}`);
  });
});
