import { Story } from '@storybook/react';
import React from 'react';
import CheckoutCart from './CheckoutCart';

export default {
  title: 'checkout/Cart Content',
  component: CheckoutCart,
};

const Template: Story = (args) => <CheckoutCart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
