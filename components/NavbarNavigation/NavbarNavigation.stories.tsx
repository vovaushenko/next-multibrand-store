import { Story } from '@storybook/react';
import React from 'react';
import NavbarNavigation from './NavbarNavigation';

export default {
  title: 'navbar/NavbarNavigation',
  component: NavbarNavigation,
};

const Template: Story = (args) => <NavbarNavigation {...args} />;

export const Primary = Template.bind({});
