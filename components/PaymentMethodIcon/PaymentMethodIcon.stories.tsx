import { Story } from '@storybook/react';
import React from 'react';
import PageHeader, { Props } from './PaymentMethodIcon';

export default {
  title: 'utility/Payment/Payment method',
  component: PageHeader,
};

const Template: Story<Props> = (args) => <PageHeader {...args} />;

export const ApplePay = Template.bind({});
ApplePay.args = { iconSrc: '/images/payment-icons/apple-pay.svg' };
export const Visa = Template.bind({});
Visa.args = { iconSrc: '/images/payment-icons/visa.svg' };
