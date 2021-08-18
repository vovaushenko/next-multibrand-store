import { Story } from '@storybook/react';
import React from 'react';
import MobileProducts, { Props } from './MobileProducts';
import { mockProduct } from '../../test/mockReduxStore';

export default {
  title: 'products/Mobile Products',
  component: MobileProducts,
};

const Template: Story<Props> = (args) => <MobileProducts {...args} />;

export const Primary = Template.bind({});
Primary.args = { products: [mockProduct, mockProduct, mockProduct] };
