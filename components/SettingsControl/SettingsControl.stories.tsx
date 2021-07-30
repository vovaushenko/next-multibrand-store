import { Story } from '@storybook/react';
import React from 'react';
import SettingsControl from './SettingsControl';

export default {
  title: 'Utility/Settings Control',
  component: SettingsControl,
};

const Template: Story = (args) => <SettingsControl {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
