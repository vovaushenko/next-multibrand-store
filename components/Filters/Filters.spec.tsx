import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import {
  default as FilterColorsOption,
  default as FilterTextOption,
} from '../FilterColorOption/FilterColorOption';
import Filters from './Filters';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<Filters />));
};

describe('All Filters Component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all text filters ', () => {
    const textFilters = wrap.find(FilterTextOption);

    expect(textFilters.length).toBe(1);
  });
  it('should render color filter ', () => {
    const colorFilter = wrap.find(FilterColorsOption);

    expect(colorFilter.length).toBe(1);
  });
});
