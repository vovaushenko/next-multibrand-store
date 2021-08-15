import { Story } from '@storybook/react';
import React from 'react';
import MobileProductCard, { Props } from './MobileProductCard';
import { mockProduct } from '../../test/initialReduxStore';

export default {
  title: 'utility/cards/mobile-product-card',
  component: MobileProductCard,
};

const Template: Story<Props> = (args) => <MobileProductCard {...args} />;

export const Primary = Template.bind({});
Primary.args = { product: mockProduct };
