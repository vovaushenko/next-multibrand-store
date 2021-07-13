import { Story } from '@storybook/react';
import React from 'react';
import CardHeader, { Props } from './CardHeader';

export default {
  title: 'Typography/CardHeader',
  component: CardHeader,
};

const Template: Story<Props> = (args) => <CardHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = { headerText: 'customer reviews' };
