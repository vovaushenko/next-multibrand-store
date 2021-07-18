import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import {
  addToCart,
  removeFromCart,
} from '../../store/action-creators/cartActionCreators';
import Button from '../Button/Button';
import CartProductItem from '../CartProductItem/CartProductItem';
import CartContent from './CartContent';
import * as Styled from './styles.CartContent';

describe('Empty Cart', () => {
  const wrapper = shallow(
    <CartContent
      productAmount={0}
      cart={[]}
      removeFromCart={removeFromCart}
      addToCart={addToCart}
      total={500}
    />
  );

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should  render call to action button when cart is empty', () => {
    const button = wrapper.find(Button);
    expect(button.length).toBe(1);
  });

  it('should NOT render cart list with products when cart is empty', () => {
    const cartList = wrapper.find(Styled.List);
    expect(cartList.length).toBe(0);
  });
});
describe('Cart with items', () => {
  const wrapper = shallow(
    <CartContent
      productAmount={1}
      removeFromCart={removeFromCart}
      addToCart={addToCart}
      total={500}
      cart={[
        {
          brand: 'Nike',
          model: 'Tomato',
          price: 77,
          productID: 'tomato',
          productImg: 'test.img',
          size: '11',
        },
      ]}
    />
  );

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should  render checkout and cart buttons if cart has products', () => {
    const button = wrapper.find(Button);
    expect(button.length).toBe(2);
  });

  it('should render cart list with products', () => {
    const cartList = wrapper.find(Styled.List);
    expect(cartList.length).toBe(1);

    const items = wrapper.find(CartProductItem);
    expect(items.length).toBe(1);
  });
});
