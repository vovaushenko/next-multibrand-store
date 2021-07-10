import { Story } from '@storybook/react';
import React from 'react';
import FooterLinks, { Props } from './FooterLinks';
import { footerLinks, rewardLinks } from './footerLinks';

export default {
  title: 'Footer/FooterLinksSection',
  component: FooterLinks,
};

const Template: Story<Props> = (args) => <FooterLinks {...args} />;
export const Primary = Template.bind({});
Primary.args = { footerLinks, rewardLinks };
