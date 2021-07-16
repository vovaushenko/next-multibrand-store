import { Story } from '@storybook/react';
import React from 'react';
import NavCart from './NavCart';

export default {
  title: 'Navbar/Header/Cart',
  component: NavCart,
};

const Template: Story = (args) => <NavCart {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
