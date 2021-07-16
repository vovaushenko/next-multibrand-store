import { Story } from '@storybook/react';
import React from 'react';
import Registration from './Registration';

export default {
  title: 'form/Registration',
  component: Registration,
};

const Template: Story = (args) => <Registration {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
