import { Story } from '@storybook/react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import RouterLink, { Props } from './RouterLink';

export default {
  title: 'utility/RouterLink',
  component: RouterLink,
};

const Template: Story<Props> = (args) => <RouterLink {...args} />;

export const TextLink = Template.bind({});
TextLink.args = { href: '/test', children: 'Some Link' };
export const IconLink = Template.bind({});
IconLink.args = { href: '/test', fontSize: '2rem', children: <FaFacebook /> };
