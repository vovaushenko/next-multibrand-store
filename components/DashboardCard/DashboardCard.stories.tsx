import { Story } from '@storybook/react';
import React from 'react';
import { BiDollar } from 'react-icons/bi';
import DashboardCard, { CardProps } from './DashboardCard';

export default {
  title: 'dashboard/Dashboard Card',
  component: DashboardCard,
};

const Template: Story<CardProps> = (args) => <DashboardCard {...args} />;

export const IconCard = Template.bind({});
IconCard.args = {
  variant: 'icon',
  header: 'Revenue',
  stat: '$3.5k',
  icon: <BiDollar className="icon" />,
};
