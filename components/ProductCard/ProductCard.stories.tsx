import { Story } from '@storybook/react';
import React from 'react';
import ProductCard, { Props } from './ProductCard';

export default {
  title: 'utility/cards/Product Card',
  component: ProductCard,
};

const Template: Story<Props> = (args) => <ProductCard {...args} />;

export const Available = Template.bind({});
Available.args = {
  brandName: 'Adidas',
  images: [
    { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
    { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
  ],
  productModel: 'NMD City Sock',
  productPrice: '150',
  isAvailable: true,
  productID: 'tomato-123',
};
export const SoldOUT = Template.bind({});
SoldOUT.args = {
  brandName: 'Adidas',
  images: [
    { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
    { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
  ],
  productModel: 'NMD City Sock',
  productPrice: '150',
  isAvailable: false,
  productID: 'tomato-123',
};
