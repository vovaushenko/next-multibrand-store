import { Story } from '@storybook/react';
import React from 'react';
import CheckoutProgress from './CheckoutProgress';

export default {
  title: 'checkout/Checkout Progress',
  component: CheckoutProgress,
};

const Template: Story = (args) => <CheckoutProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
