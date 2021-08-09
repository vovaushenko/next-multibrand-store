import { Story } from '@storybook/react';
import React from 'react';
import MobileBottomNavigation from './MobileBottomNavigation';

export default {
  title: 'Navigation/Mobile Bottom Navigation',
  component: MobileBottomNavigation,
};

const Template: Story = (args) => <MobileBottomNavigation {...args} />;

export const Primary = Template.bind({});
