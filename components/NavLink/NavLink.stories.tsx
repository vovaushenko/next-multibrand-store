import { Story } from '@storybook/react';
import React from 'react';
import NavLink, { Props } from './NavLink';

export default {
  title: 'navbar/NavLink',
  component: NavLink,
};

const Template: Story<Props> = (args) => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { href: '/', linkText: 'New Arrivals' };
