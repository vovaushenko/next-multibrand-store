import { Story } from '@storybook/react';
import React from 'react';
import NavMiniModal, { Props } from './NavMiniModal';

export default {
  title: 'navbar/header/Modal Dropdown',
  component: NavMiniModal,
};

const Template: Story<Props> = (args) => <NavMiniModal {...args} />;

export const Primary = Template.bind({});
const Test = () => <h1>Test</h1>;
Primary.args = { isOpen: true, modalContent: <Test /> };
