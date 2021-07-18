import { Story } from '@storybook/react';
import React from 'react';
import AllPaymentMethods, { Props } from './AllPaymentMethods';
import { allPaymentMethods } from './paymentData';

export default {
  title: 'utility/Payment/All Payment Methods',
  component: AllPaymentMethods,
};

const Template: Story<Props> = (args) => <AllPaymentMethods {...args} />;

export const PaymentGrid = Template.bind({});
PaymentGrid.args = { paymentMethods: allPaymentMethods };
