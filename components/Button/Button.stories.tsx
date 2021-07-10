import { Story } from '@storybook/react';
import React from 'react';
import TestButton, { Props } from './Button';

export default {
  title: 'Button/FlexibleButton',
  component: TestButton,
  // args: {
  //   children: 'Button',
  // },
};

const Template: Story<Props> = (args) => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary' };
export const LoadingButton = Template.bind({});
LoadingButton.args = { isLoading: true, text: 'Loading' };
export const DisabledButton = Template.bind({});
DisabledButton.args = { disabled: true, text: 'Disabled' };
export const CompletedButton = Template.bind({});
CompletedButton.args = { isCompleted: true, text: 'Completed 🥳' };

// extend args
export const ExtendArgs = Template.bind({});
ExtendArgs.args = {
  ...Primary.args,
  text: '⭐',
};
