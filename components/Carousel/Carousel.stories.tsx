import { Story } from '@storybook/react';
import React from 'react';
import Carousel, { Props } from './Carousel';
import { mockProduct } from '../../test/mockReduxStore';

export default {
  title: 'utility/Carousel',
  component: Carousel,
};

const Template: Story<Props> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  carouselItems: [
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
    mockProduct,
  ],
  carouselHeader: 'The Latest And Greatest 🔥',
};
