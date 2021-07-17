import { Story } from '@storybook/react';
import React from 'react';
import OrderHistory from './OrderHistory';

export default {
  title: 'User Components/Order History',
  component: OrderHistory,
};

const Template: Story = (args) => <OrderHistory {...args} />;

export const Available = Template.bind({});
Available.args = {};
