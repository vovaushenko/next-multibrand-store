import { Story } from '@storybook/react';
import React from 'react';
import { removeFromCart } from '../../store/action-creators/cartActionCreators';
import CartProductItem, { Props } from './CartProductItem';

export default {
  title: 'cart/Cart Product Item',
  component: CartProductItem,
};

const Template: Story<Props> = (args) => <CartProductItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  cartItem: {
    brand: 'Nike',
    model: 'Travis Scott OG',
    price: 77,
    productID: 'Travis Scott OG',
    productImg: '/images/og-travis.png',
    size: '11',
  },
  removeFromCart: removeFromCart,
};
