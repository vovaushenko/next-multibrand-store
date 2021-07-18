import { shallow } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import { removeFromCart } from '../../store/action-creators/cartActionCreators';
import RouterLink from '../RouterLink/RouterLink';
import CartProductItem from './CartProductItem';
import * as Styled from './styles.CartProductItem';

const cartItem = {
  brand: 'Nike',
  model: 'Travis Scott OG',
  price: 77,
  productID: 'Travis Scott OG',
  productImg: '/images/og-travis.png',
  size: '11',
};

describe('Cart Product Item', () => {
  const wrapper = shallow(
    <CartProductItem removeFromCart={removeFromCart} cartItem={cartItem} />
  );

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
  it('should  render all control buttons', () => {
    const ctrlButtons = wrapper.find(Styled.ControlButton);
    expect(ctrlButtons.length).toBe(3);
  });
  it('should  render router link with correct href', () => {
    const link = wrapper.find(RouterLink);
    expect(link.prop('href')).toBe(`/products/${cartItem.productID}`);
  });
  it('should  render correct item price', () => {
    const price = wrapper.find(Styled.Price);
    expect(price.text()).toBe(`$${cartItem.price}`);
  });
});
