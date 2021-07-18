import { Story } from '@storybook/react';
import React from 'react';
import CartContent, { Props } from './CartContent';

export default {
  title: 'cart/Cart Content',
  component: CartContent,
};

const Template: Story<Props> = (args) => <CartContent {...args} />;

export const EmptyCart = Template.bind({});
EmptyCart.args = { cart: [], productAmount: 0 };

export const FilledCart = Template.bind({});
FilledCart.args = {
  cart: [
    {
      brand: 'Nike',
      model: 'Travis Scott OG',
      price: 77,
      productID: 'Travis Scott OG',
      productImg: '/images/og-travis.png',
      size: '11',
    },
    {
      brand: 'Nike',
      model: 'Travis Scott OG',
      price: 77,
      productID: 'Travis Scott OG',
      productImg: '/images/og-travis.png',
      size: '11',
    },
    {
      brand: 'Nike',
      model: 'Tomato',
      price: 77,
      productID: 'tomato',
      productImg: 'test.img',
      size: '11',
    },
  ],
  productAmount: 3,
};
