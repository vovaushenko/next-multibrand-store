import { Story } from '@storybook/react';
import React from 'react';
import FooterCopyright, { Props } from './FooterCopyright';
import { footerCopyrightLinks } from './footerCopyright';

export default {
  title: 'Footer/FooterCopyrightSection',
  component: FooterCopyright,
};

const Template: Story<Props> = (args) => <FooterCopyright {...args} />;
export const Primary = Template.bind({});
Primary.args = { footerCopyrightLinks };
