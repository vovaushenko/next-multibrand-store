import { Story } from '@storybook/react';
import React from 'react';
import FooterSocial from './FooterSocial';

export default {
  title: 'Footer/FooterSocial',
  component: FooterSocial,
};

const Template: Story = (args) => <FooterSocial {...args} />;
export const Primary = Template.bind({});
