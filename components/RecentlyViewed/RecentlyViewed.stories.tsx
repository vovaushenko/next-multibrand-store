import { Story } from '@storybook/react';
import React from 'react';
import RecentlyViewed from './RecentlyViewed';

export default {
  title: 'Products/Recently Viewed Products',
  component: RecentlyViewed,
};

const Template: Story = (args) => <RecentlyViewed {...args} />;
export const Grid = Template.bind({});
Grid.args = {};
