import { Story } from '@storybook/react';
import React from 'react';
import UpdateUserAccount from './UpdateUserAccount';

export default {
  title: 'Form/Update User Account',
  component: UpdateUserAccount,
};

const Template: Story = (args) => <UpdateUserAccount {...args} />;

export const Update = Template.bind({});
Update.args = {};
