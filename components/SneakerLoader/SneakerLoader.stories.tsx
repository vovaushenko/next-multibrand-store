import { Story } from '@storybook/react';
import React from 'react';
import SneakerLoader from './SneakerLoader';

export default {
  title: 'Utility/Sneaker Loader',
  component: SneakerLoader,
};

const Template: Story = (args) => <SneakerLoader {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
