import { Story } from '@storybook/react';
import React from 'react';
import HorizontalCard, { Props } from './HorizontalCard';

export default {
  title: 'utility/cards/Horizontal Card',
  component: HorizontalCard,
};

const Template: Story<Props> = (args) => <HorizontalCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  brandName: 'Adidas',
  images: [
    { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
    { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
  ],
  productModel: 'NMD City Sock',
  productPrice: '150',
};
