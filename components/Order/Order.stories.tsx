import { Story } from '@storybook/react';
import React from 'react';
import Order from './Order';

export default {
  title: 'User Components/Order Details',
  component: Order,
};

export const order = {
  shippingInfo: {
    firstName: 'Volodymyr',
    lastName: 'Ushenko',
    email: 'vovaushenko1989@gmail.com',
    city: 'Calgary',
    address: '1509 14 Avenue Southwest D',
    country: 'Canada',
    state: 'Alberta',
    zipCode: 'T3C 0W4',
    phone: '5876009099',
  },
  paymentInfo: {
    paymentID: 'test123',
    status: 'Processed/Paid',
  },
  deliveryStatus: 'Not delivered',
  _id: '60fd5aecc3eae1efef789371',
  user: '60f1cf2b87c05534ca22d76f',
  orderTotal: 850,
  purchase: [
    {
      _id: '60fd5aecc3eae1efef789372',
      productID: '60eee5c7f6551d566f992501',
      brand: 'Adidas',
      model: 'Yeezy 500 (Enflame)',
      size: '10.5',
      img: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269121/sneaker-maniacs/products/fatvqe7fmnjk26efvqwh.png',
      price: 300,
    },
    {
      _id: '60fd5aecc3eae1efef789373',
      productID: '60edd01c01d3ca10f5eafa49',
      brand: 'Adidas',
      model: 'Yeezy 500',
      size: '11',
      img: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198036/sneaker-maniacs/products/xmh4goid166sizjv83b1.png',
      price: 550,
    },
  ],
  paidAt: '2021-07-25T12:37:00.294Z',
  createdAt: '2021-07-25T12:37:00.302Z',
  __v: 0,
};

const Template: Story = (args) => <Order {...args} orderID={1} order={order} />;

export const Available = Template.bind({});
Available.args = {};
