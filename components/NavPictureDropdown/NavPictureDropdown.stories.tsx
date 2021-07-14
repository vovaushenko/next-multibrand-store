import { Story } from '@storybook/react';
import React from 'react';
import NavPictureDropdown from './NavPictureDropdown';

export default {
  title: 'navbar/Nav Picture Dropdown',
  component: NavPictureDropdown,
};

const Template: Story = (args) => <NavPictureDropdown {...args} />;

export const Primary = Template.bind({});
