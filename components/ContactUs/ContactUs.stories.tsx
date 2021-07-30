import { Story } from '@storybook/react';
import React from 'react';
import ContactUs from './ContactUs';

export default {
  title: 'Form/ContactUs',
  component: ContactUs,
};

const Template: Story = (args) => <ContactUs {...args} />;

export const Primary = Template.bind({});
