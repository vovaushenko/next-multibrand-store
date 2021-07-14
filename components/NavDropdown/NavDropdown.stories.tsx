import { Story } from '@storybook/react';
import React from 'react';
import NavDropdown, { Props } from './NavDropdown';

export default {
  title: 'navbar/Navigation Dropdown',
  component: NavDropdown,
};

const Template: Story<Props> = (args) => <NavDropdown {...args} />;

const dropdownContent = {
  section: 'new arrivals',
  men: ['Adidas', 'Nike', 'Air Jordan'],
  women: ['Adidas', 'Nike', 'Air Jordan'],
  kid: ['Adidas', 'Nike', 'Air Jordan'],
};

export const Primary = Template.bind({ dropdownContent: dropdownContent });
