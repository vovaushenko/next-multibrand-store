import { Story } from '@storybook/react';
import React from 'react';
import { Product } from '../../types';
import ProductItem, { Props } from './ProductItem';

export default {
  title: 'Admin/ProductItem',
  component: ProductItem,
};

const Template: Story<Props> = (args) => <ProductItem {...args} />;
export const Primary = Template.bind({});

export const testProductItem: Product = {
  department: 'men',
  colors: ['black'],
  _id: '60e5cabd50a3391774c4e9fa',
  brand: 'adidas',
  model: 'Yeezy 500',
  price: 450,
  styleCode: 'f36640',
  size: 10.5,
  description:
    'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole.',
  images: [
    {
      _id: '60e5cabd50a3391774c4e9fb',
      public_id: 'test',
      url: 'test',
    },
  ],
};

Primary.args = { ...testProductItem };
