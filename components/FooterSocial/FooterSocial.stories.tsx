import { Story } from '@storybook/react';
import React from 'react';
import FooterSocial, { Props } from './FooterSocial';
import { socialLinks } from './socialLinks';

export default {
  title: 'Footer/FooterSocialSection',
  component: FooterSocial,
};

const Template: Story<Props> = (args) => <FooterSocial {...args} />;
export const Primary = Template.bind({});
Primary.args = { footerSocialLinks: socialLinks };
