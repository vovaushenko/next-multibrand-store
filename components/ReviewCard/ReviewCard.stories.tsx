import { Story } from '@storybook/react';
import React from 'react';
import ReviewCard, { Props } from './ReviewCard';

export default {
  title: 'utility/Review Card',
  component: ReviewCard,
};

const Template: Story<Props> = (args) => <ReviewCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  review: 'No reviews yet',
};
