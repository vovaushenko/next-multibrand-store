import { shallow } from 'enzyme';
import React from 'react';
import RemoveFilter from './RemoveFilter';
import * as Styled from './styles.RemoveFilter';

describe('Remove filter option component', () => {
  const wrap = shallow(
    <RemoveFilter
      filterName="tomato"
      removeFilter={() => console.log('tomato')}
    />
  );

  it('should render specified filter name', () => {
    const filterName = wrap.find(Styled.FilterName);
    expect(filterName.text()).toBe('tomato');
  });

  it('should render remove filter button', () => {
    const btn = wrap.find(Styled.RemoveBtn);
    expect(btn.length).toBe(1);
  });
});
