import { shallow } from 'enzyme';
import React from 'react';
import { filterColors } from '../Filters/filterOptions';
import FilterColorOption from './FilterColorOption';
import * as Styled from './styles.FilterColorOptions';

describe('Filter Color Option', () => {
  const wrap = shallow(
    <FilterColorOption filterBy="color" filterOptions={filterColors} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render correct filter name', () => {
    const filterName = wrap.find('summary');

    expect(filterName.text()).toBe('color');
  });
  it('should render all specified filter options', () => {
    const allFilterOptions = wrap.find(Styled.FilterButton);

    expect(allFilterOptions.length).toBe(filterColors.length);
  });
});
