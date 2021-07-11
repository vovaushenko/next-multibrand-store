import { Story } from '@storybook/react';
import React from 'react';
import NewsletterSignUp from './NewsletterSignUp';

export default {
  title: 'section/NewsletterSignUp',
  NewsletterSignUp,
};

const Template: Story = (args) => <NewsletterSignUp {...args} />;

export const Primary = Template.bind({});
