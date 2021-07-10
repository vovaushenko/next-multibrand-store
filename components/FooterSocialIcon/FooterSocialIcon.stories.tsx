import { Story } from '@storybook/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterSocialIcon, { Props } from './FooterSocialIcon';

export default {
  title: 'Footer/FooterSocialIcon',
  component: FooterSocialIcon,
};

const Template: Story<Props> = (args) => <FooterSocialIcon {...args} />;
export const Facebook = Template.bind({});
Facebook.args = { href: 'hello', icon: <FaFacebook /> };
export const Instagram = Template.bind({});
Instagram.args = { href: 'hello', icon: <FaInstagram /> };
export const Twitter = Template.bind({});
Twitter.args = { href: 'hello', icon: <FaTwitter /> };
