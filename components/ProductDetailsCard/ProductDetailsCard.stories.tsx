import { Story } from '@storybook/react';
import React from 'react';
import ProductDetailsCard, { Props } from './ProductDetailsCard';

export default {
  title: 'utility/cards/Product Details Card',
  component: ProductDetailsCard,
};

const Template: Story<Props> = (args) => <ProductDetailsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  department: 'men',
  brand: 'air jordan',
  model: 'V (5) Retro (Raging Bull)',
  colors: ['red', 'black', 'white'],
  price: 150,
  size: ['7', '8', '9', '9.5', '10', '11', '11.5'],
  styleCode: '440888-600',
};
