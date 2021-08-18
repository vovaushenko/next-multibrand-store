import { Story } from '@storybook/react';
import React from 'react';
import ProductsGrid, { Props } from './ProductsGrid';
import { mockProduct } from '../../test/mockReduxStore';

export default {
  title: 'Products/Products Grid',
  component: ProductsGrid,
};

const Template: Story<Props> = (args) => <ProductsGrid {...args} />;
export const Grid = Template.bind({});
Grid.args = {
  products: [
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
  ],
  layoutType: 'grid',
};
export const Vertical = Template.bind({});
Vertical.args = {
  products: [
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
  ],
  layoutType: 'vertical',
};
