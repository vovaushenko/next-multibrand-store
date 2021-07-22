import { Story } from '@storybook/react';
import React from 'react';
import CheckoutProduct, { Props } from './CheckoutProduct';

export default {
  title: 'checkout/Checkout Product Item',
  component: CheckoutProduct,
};

const Template: Story<Props> = (args) => <CheckoutProduct {...args} />;

export const Item = Template.bind({});
Item.args = {
  cartItem: {
    brand: 'Nike',
    model: 'Travis Scott OG',
    price: 777,
    productID: 'Travis Scott OG',
    productImg: '/images/og-travis.png',
    size: '11',
  },
};
