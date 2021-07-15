import { Story } from '@storybook/react';
import React from 'react';
import { dummyProduct } from '../../dev-data/product';
import ProductsGrid, { Props } from './ProductsGrid';

export default {
  title: 'Products/Products Grid',
  component: ProductsGrid,
};

const Template: Story<Props> = (args) => <ProductsGrid {...args} />;
export const Grid = Template.bind({});
Grid.args = {
  products: [
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
  ],
  layoutType: 'grid',
};
export const Vertical = Template.bind({});
Vertical.args = {
  products: [
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
    dummyProduct,
  ],
  layoutType: 'vertical',
};
