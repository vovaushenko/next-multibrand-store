import { Story } from '@storybook/react';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';

export default {
  title: 'navbar/NavHeaderLogo',
  component: NavbarHeaderLogo,
};

const Template: Story = (args) => <NavbarHeaderLogo {...args} />;

export const Logo = Template.bind({});
Logo.args = { headerText: 'Sneaker-maniacs' };
