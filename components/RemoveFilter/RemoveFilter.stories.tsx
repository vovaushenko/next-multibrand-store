import { Story } from '@storybook/react';
import React from 'react';
import RemoveFilter, { Props } from './RemoveFilter';

export default {
  title: 'Utility/Filter/Remove Filter',
  component: RemoveFilter,
};

const Template: Story<Props> = (args) => <RemoveFilter {...args} />;
export const RemoveFilterOption = Template.bind({});
RemoveFilterOption.args = {
  filterName: 'brand',
  removeFilter: () => console.log('tomato'),
};
