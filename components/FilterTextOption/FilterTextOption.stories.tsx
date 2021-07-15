import { Story } from '@storybook/react';
import React from 'react';
import { Department, ProductSize, SneakerBrand } from '../../types';
import {
  filterBrands,
  filterDepartment,
  filterSize,
} from '../Filters/filterOptions';
import FilterTextOption, { Props } from './FilterTextOption';

export default {
  title: 'Utility/Filter/Filter Text Option',
  component: FilterTextOption,
};

const Template: Story<Props<SneakerBrand | ProductSize | Department>> = (
  args
) => <FilterTextOption {...args} />;
export const FilterByBrand = Template.bind({});
FilterByBrand.args = { filterOptions: filterBrands, filterBy: 'Brand' };
export const FilterByDepartment = Template.bind({});
FilterByDepartment.args = {
  filterOptions: filterDepartment,
  filterBy: 'Department',
};
export const FilterBySize = Template.bind({});
FilterBySize.args = { filterOptions: filterSize, filterBy: 'Size' };
