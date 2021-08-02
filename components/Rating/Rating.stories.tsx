import { Story } from '@storybook/react';
import React from 'react';
import Rating from './Rating';

export default {
  title: 'Utility/Rating',
  component: Rating,
};

const Template: Story = (args) => <Rating {...args} />;
export const Primary = Template.bind({});

Primary.args = {};
