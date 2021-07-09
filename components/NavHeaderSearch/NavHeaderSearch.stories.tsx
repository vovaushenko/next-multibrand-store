import { Story } from '@storybook/react';
import React from 'react';
import NavHeaderSearch from './NavHeaderSearch';

export default {
  title: 'navbar/NavHeaderSearch',
  component: NavHeaderSearch,
};

const Template: Story = (args) => <NavHeaderSearch {...args} />;

export const NavSearch = Template.bind({});
NavSearch.args = { headerText: 'Sneaker-maniacs' };
