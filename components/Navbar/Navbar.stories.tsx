import { Story } from '@storybook/react';
import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar/Navbar/Navbar finished',
  component: Navbar,
};

const Template: Story = (args) => <Navbar {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
