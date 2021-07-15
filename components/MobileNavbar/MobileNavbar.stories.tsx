import { Story } from '@storybook/react';
import React from 'react';
import MobileNavbar from './MobileNavbar';

export default {
  title: 'navbar/Mobile Navbar',
  component: MobileNavbar,
};

const Template: Story = (args) => <MobileNavbar {...args} />;

export const Primary = Template.bind({});
