import { shallow } from 'enzyme';
import React from 'react';
import CardHeader from '../../components/CardHeader/CardHeader';
import CardContent from '../../components/CartContent/CartContent';
import {
  addToCart,
  removeFromCart,
} from '../../store/action-creators/cartActionCreators';
import * as Styled from './styles.UserCart';
import UserCart from './UserCart';

describe('UserCart page with non empty cart', () => {
  const wrap = shallow(
    <UserCart
      addToCart={addToCart}
      cart={[
        {
          brand: 'Nike',
          model: 'Tomato',
          price: 500,
          productID: 'test',
          productImg: 'tomato',
          size: '11',
        },
      ]}
      productAmount={1}
      removeFromCart={removeFromCart}
      total={500}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all cart items', () => {
    const cartItems = wrap.find(CardContent);
    expect(cartItems.length).toBe(1);
  });
  it('should render payment column if card is not empty', () => {
    const paymentColumn = wrap.find(Styled.RightColumn);
    expect(paymentColumn.length).toBe(1);
  });
  it('should render correct total', () => {
    const paymentColumn = wrap.find(CardHeader).at(1);
    expect(paymentColumn.length).toBe(1);
  });
});

describe('UserCart page with empty cart', () => {
  const wrap = shallow(
    <UserCart
      addToCart={addToCart}
      cart={[]}
      productAmount={0}
      removeFromCart={removeFromCart}
      total={0}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should NOT have only one cart item', () => {
    const cartItems = wrap.find(CardContent);
    expect(cartItems.length).toBe(1);
  });
  it('should NOT render payment column if card is not empty', () => {
    const paymentColumn = wrap.find(Styled.RightColumn);
    expect(paymentColumn.length).toBe(0);
  });
});
