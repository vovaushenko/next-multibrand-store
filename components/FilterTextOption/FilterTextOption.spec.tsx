import { shallow } from 'enzyme';
import React from 'react';
import { filterBrands } from '../Filters/filterOptions';
import FilterTextOption from './FilterTextOption';
import * as Styled from './styles.FilterTextOption';

describe('Filter Text Option', () => {
  const wrap = shallow(
    <FilterTextOption
      filterBy="brand"
      filterOptions={filterBrands}
      setFilter={() => console.log('boom')}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all correct filter name', () => {
    const filterName = wrap.find('summary');

    expect(filterName.text()).toBe('brand');
  });
  it('should render all specified filter options', () => {
    const allFilterOptions = wrap.find(Styled.FilterButton);

    expect(allFilterOptions.length).toBe(filterBrands.length);
  });
});
