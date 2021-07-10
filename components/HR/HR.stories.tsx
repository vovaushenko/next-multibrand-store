import { Story } from '@storybook/react';
import React from 'react';
import HR, { Props } from './HR';

export default {
  title: 'Utility/HR',
  component: HR,
};

const Template: Story<Props> = (args) => <HR {...args} />;
export const Primary = Template.bind({});
Primary.args = { margin: '1rem 0' };
