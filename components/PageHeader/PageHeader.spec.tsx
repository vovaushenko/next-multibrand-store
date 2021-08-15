import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './PageHeader';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<PageHeader headerText="tomato" />));
};

describe('Page Header', () => {
  const wrap = setup();

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h2').text()).toBe('tomato');
  });
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={mainTheme}>
          <PageHeader headerText="tomato" />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
