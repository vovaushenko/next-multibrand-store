import { Story } from '@storybook/react';
import React from 'react';
import Rating, { Props } from './Rating';

export default {
  title: 'Utility/Rating',
  component: Rating,
};

const Template: Story<Props> = (args) => <Rating {...args} />;
export const Primary = Template.bind({});

Primary.args = {};
