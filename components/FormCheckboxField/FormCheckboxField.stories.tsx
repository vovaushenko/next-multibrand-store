import { Story } from '@storybook/react';
import React from 'react';
import FormCheckboxField, { Props } from './FormCheckboxField';

export default {
  title: 'Form/Checkbox field',
  component: FormCheckboxField,
};

const Template: Story<Props> = (args) => <FormCheckboxField {...args} />;
export const NotChecked = Template.bind({});
NotChecked.args = {
  name: 'name',
  checked: false,
  setChecked: () => console.log('tomato'),
};
export const Checked = Template.bind({});
Checked.args = {
  name: 'name',
  checked: true,
  setChecked: () => console.log('tomato'),
};
export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name',
  checked: false,
  disabled: true,
  setChecked: () => console.log('tomato'),
};
