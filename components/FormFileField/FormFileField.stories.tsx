import { Story } from '@storybook/react';
import React from 'react';
import FormFileField, { Props } from './FormFileField';

export default {
  title: 'Form/FileField',
  component: FormFileField,
};

const Template: Story<Props> = (args) => <FormFileField {...args} />;
export const FileControl = Template.bind({});
FileControl.args = {
  name: 'name',
  placeholder: 'Upload Photo',
};
