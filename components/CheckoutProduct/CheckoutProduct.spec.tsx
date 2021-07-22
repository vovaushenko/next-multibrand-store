import { shallow } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import * as Styled from './styles.CheckoutProduct';

const cartItem = {
  brand: 'Nike',
  model: 'Travis Scott OG',
  price: 77,
  productID: 'Travis Scott OG',
  productImg: '/images/og-travis.png',
  size: '11',
};

describe('Checkout Product Item', () => {
  const wrapper = shallow(<CheckoutProduct cartItem={cartItem} />);

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should  render Image with specified src and alt', () => {
    const imgWrap = wrapper.find(Styled.Figure);
    const img = imgWrap.find(Image);
    expect(img.prop('alt')).toBe(`${cartItem.brand} ${cartItem.model}`);
    expect(img.prop('src')).toBe(cartItem.productImg);
  });

  it('should  render correct item size', () => {
    const price = wrapper.find(Styled.Size);
    expect(price.first().text()).toBe(`${cartItem.size}`);
  });
  it('should  render correct item price', () => {
    const price = wrapper.find(Styled.Price);
    expect(price.first().text()).toBe(`$${cartItem.price}`);
  });
});
