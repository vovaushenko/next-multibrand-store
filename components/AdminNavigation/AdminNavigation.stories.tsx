import { Story } from '@storybook/react';
import React from 'react';
import AdminNavigation, { Props } from './AdminNavigation';
import { adminNavLinks } from './adminNavLinks';

export default {
  title: 'Admin/Navigation',
  component: AdminNavigation,
};

const Template: Story<Props> = (args) => <AdminNavigation {...args} />;
export const Primary = Template.bind({});
Primary.args = { adminNavLinks };
