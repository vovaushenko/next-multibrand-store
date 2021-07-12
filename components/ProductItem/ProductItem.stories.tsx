import { Story } from '@storybook/react';
import React from 'react';
import ProductItem, { Props } from './ProductItem';
import { testProductItem } from './ProductItem.spec';

export default {
  title: 'Admin/ProductItem',
  component: ProductItem,
};

const Template: Story<Props> = (args) => <ProductItem {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  ...testProductItem,
  deleteProduct: () => Promise.resolve(),
  isDeleted: false,
  isLoading: false,
};
export const LoadingAction = Template.bind({});
LoadingAction.args = {
  ...testProductItem,
  deleteProduct: () => Promise.resolve(),
  isDeleted: false,
  isLoading: true,
};
export const CompletedAction = Template.bind({});
CompletedAction.args = {
  ...testProductItem,
  deleteProduct: () => Promise.resolve(),
  isDeleted: true,
  isLoading: false,
};
