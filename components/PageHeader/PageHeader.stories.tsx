import { Story } from '@storybook/react';
import React from 'react';
import PageHeader, { Props } from './PageHeader';

export default {
  title: 'Typography/PageHeader',
  component: PageHeader,
};

const Template: Story<Props> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = { headerText: 'Add new product' };
