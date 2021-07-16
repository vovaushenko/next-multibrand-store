import { Story } from '@storybook/react';
import React from 'react';
import NavUserAccount from './NavUserAccount';

export default {
  title: 'navbar/header/Sign in|out User Account',
  component: NavUserAccount,
};

const Template: Story = (args) => <NavUserAccount {...args} />;

export const UserAccountLink = Template.bind({});
UserAccountLink.args = { headerText: 'Sneaker-maniacs' };
