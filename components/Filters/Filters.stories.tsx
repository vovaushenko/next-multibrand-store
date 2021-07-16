import { Story } from '@storybook/react';
import React from 'react';
import Filters from './Filters';

export default {
  title: 'Utility/Filter/Filters Component',
  component: Filters,
};

const Template: Story = (args) => <Filters {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
