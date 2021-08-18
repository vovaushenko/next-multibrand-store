import { Story } from '@storybook/react';
import React from 'react';
import OrderCongratulations, { Props } from './OrderCongratulations';

export default {
  title: 'Modals/OrderCongratulations',
  component: OrderCongratulations,
};

const Template: Story<Props> = (args) => <OrderCongratulations {...args} />;

export const Available = Template.bind({});
Available.args = {
  cart: [
    {
      productID: '610fcfddc610ac3d963f7aee',
      brand: 'Adidas',
      model: 'NMD_R1 (Primeknit) (Datamosh)',
      price: 350,
      productImg: '/images/og-travis.png',
      size: '6.5',
    },
  ],
  orderID: '12345',
};
