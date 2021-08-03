import { Story } from '@storybook/react';
import React from 'react';
import ReviewCard from './ReviewCard';

export default {
  title: 'utility/Review Card',
  component: ReviewCard,
};

const Template: Story = (args) => <ReviewCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
