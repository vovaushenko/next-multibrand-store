import { Story } from '@storybook/react';
import React from 'react';
import CheckoutShippingInfo from './CheckoutShippingInfo';

export default {
  title: 'checkout/Checkout Shipping Information Form',
  component: CheckoutShippingInfo,
};

const Template: Story = (args) => <CheckoutShippingInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
