import { Story } from '@storybook/react';
import React from 'react';
import CarouselCard, { Props } from './CarouselCard';
import { mockProduct } from '../../test/mockReduxStore';

export default {
  title: 'utility/cards/Carousel Card',
  component: CarouselCard,
};

const Template: Story<Props> = (args) => <CarouselCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  carouselItem: mockProduct,
};
