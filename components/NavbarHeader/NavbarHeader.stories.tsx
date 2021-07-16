import { Story } from '@storybook/react';
import React from 'react';
import NavbarHeader from './NavbarHeader';

export default {
  title: 'Navbar/Header/Navbar Header',
  component: NavbarHeader,
};

const Template: Story = (args) => <NavbarHeader {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
