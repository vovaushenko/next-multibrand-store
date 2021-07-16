import { Story } from '@storybook/react';
import React from 'react';
import {} from '../../types';
import { filterColors } from '../Filters/filterOptions';
import FilterColorOption, { Props } from './FilterColorOption';

export default {
  title: 'Utility/Filter/Filter Color Option',
  component: FilterColorOption,
};

const Template: Story<Props> = (args) => <FilterColorOption {...args} />;
export const FilterByColor = Template.bind({});
FilterByColor.args = { filterOptions: filterColors, filterBy: 'Brand' };
