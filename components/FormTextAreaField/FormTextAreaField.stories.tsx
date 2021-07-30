import { Story } from '@storybook/react';
import React from 'react';
import FormTextAreaField, { Props } from './FormTextAreaField';

export default {
  title: 'Form/TextArea',
  component: FormTextAreaField,
};

const Template: Story<Props> = (args) => <FormTextAreaField {...args} />;

export const TextAreaControl = Template.bind({});
TextAreaControl.args = {
  name: 'message',
  placeholder: 'Your Message',
};
