import { Story } from '@storybook/react';
import React from 'react';
import ProductImageCard, { Props } from './ProductImageCard';

export default {
  title: 'utility/ProductImageCard',
  component: ProductImageCard,
};

const Template: Story<Props> = (args) => <ProductImageCard {...args} />;

const images = [
  { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis.png' },
  { public_id: '/images/og-travis.png', url: '/images/og-travis-2.png' },
];

export const Primary = Template.bind({});
Primary.args = { images, sneakerModel: 'Nike Travis Scott' };
