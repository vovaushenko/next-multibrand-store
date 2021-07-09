import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavHeaderSearch from './NavHeaderSearch';

describe('Navbar Header Search', () => {
  const navSearch = shallow(<NavHeaderSearch />);

  it('should render with no errors', () => {
    expect(navSearch);
    expect(navSearch.length).toBe(1);
  });

  it('should render input field with no errors', () => {
    const input = navSearch.find('.search-input');
    expect(input.length).toBe(1);
  });
  it('should render submit button with no errors', () => {
    const submitBtn = navSearch.find('.search-submit-btn');
    expect(submitBtn.length).toBe(1);
  });
  it('should render search icon with no errors', () => {
    const searchIcon = navSearch.find('.search-icon');
    expect(searchIcon.length).toBe(1);
  });
});
