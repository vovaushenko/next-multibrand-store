import { Story } from '@storybook/react';
import React from 'react';
import CartIcon, { Props } from './CartIcon';

export default {
  title: 'navbar/NavCartIcon',
  component: CartIcon,
};

const Template: Story<Props> = (args) => <CartIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = { productAmount: 7 };
