import { Story } from '@storybook/react';
import React from 'react';
import CreditCard, { Props } from './CreditCard';

export default {
  title: 'checkout/Credit Card',
  component: CreditCard,
};

const Template: Story<Props> = (args) => <CreditCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  cardHolderName: 'John Doe',
  cardHolderImd: '/images/avatar.png',
  cardNumber: '4215 7777 1121 8910',
};
