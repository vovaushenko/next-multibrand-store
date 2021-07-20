import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import { initialReduxStore } from '../../test/initialReduxStore';
import { storeFactory } from '../../test/testUtils';
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
  const store = storeFactory(initialReduxStore);
  return mount(
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <Filters />
      </Provider>
    </ThemeProvider>
  );
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
