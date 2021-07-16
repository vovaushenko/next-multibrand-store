import { Story } from '@storybook/react';
import React from 'react';
import SignIn from './SignIn';

export default {
  title: 'Form/SignIn',
  component: SignIn,
};

const Template: Story = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});
