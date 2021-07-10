import { Story } from '@storybook/react';
import React from 'react';
import SectionHeader, { Props } from './SectionHeader';

export default {
  title: 'Typography/SectionHeader',
  component: SectionHeader,
};

const Template: Story<Props> = (args) => <SectionHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = { headerText: 'sneaker stuff' };
