import { Story } from '@storybook/react';
import React from 'react';
import UserAccountDropdown from './UserAccountDropdown';

export default {
  title: 'Navbar/User Acc Dropdown',
  component: UserAccountDropdown,
};

const Template: Story = (args) => <UserAccountDropdown {...args} />;

export const Primary = Template.bind({});
