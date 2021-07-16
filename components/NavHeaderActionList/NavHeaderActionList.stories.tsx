import { Story } from '@storybook/react';
import React from 'react';
import NavHeaderActionList from './NavHeaderActionList';

export default {
  title: 'Navbar/Header/Navbar Header Action List',
  component: NavHeaderActionList,
};

const Template: Story = (args) => <NavHeaderActionList {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
