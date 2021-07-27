import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import NavHeaderSearch from './NavHeaderSearch';
import * as Styled from './styles.NavHeaderSearch';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<NavHeaderSearch />));
};

describe('Navbar Header Search', () => {
  const navSearch = setup();

  it('should render with no errors', () => {
    expect(navSearch);
    expect(navSearch.length).toBe(1);
  });

  it('should render input field with no errors', () => {
    const input = navSearch.find(Styled.Container);
    expect(input.length).toBe(1);
  });
  it('should render submit button with no errors', () => {
    const submitBtn = navSearch.find(Styled.SubmitButton);
    expect(submitBtn.length).toBe(1);
  });
  it('should render search icon with no errors', () => {
    const searchIcon = navSearch.find(BiSearch);
    expect(searchIcon.length).toBe(1);
  });

  it('should render three modal items on search', () => {
    const product = navSearch.find(Styled.Product);
    expect(product.length).toBe(3);
  });
});
