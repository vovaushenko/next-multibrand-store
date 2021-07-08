import { Story } from '@storybook/react';
import React from 'react';
import TestButton, { ButtonProps } from './TestButton';

export default {
  title: 'Button',
  component: TestButton,
};

const Template: Story<ButtonProps> = (args) => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Button' };
