import { Story } from '@storybook/react';
import React from 'react';
import GridControl, { Props } from './GridControl';

export default {
  title: 'Products/Grid Control Bar',
  component: GridControl,
};

const Template: Story<Props> = (args) => <GridControl {...args} />;

export const NavSearch = Template.bind({});
NavSearch.args = { header: 'All Products', productAmount: 777 };
