import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import NavMiniModal from './NavMiniModal';
import * as Styled from './styles.NavMiniModal';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';

/**
 * Setup function for the component
 * @returns {setup} shallowWrapper
 */
const setup = (isOpen: boolean) => {
  return mount(
    withReduxAndStyledProviders(
      <NavMiniModal
        isOpen={isOpen}
        modalContent={() => <h1>tomato</h1>}
        top="1rem"
        right="1rem"
        modalWidth="100%"
        animationVariant={'slideInTop'}
      />
    )
  );
};
describe('Navbar Modal Dropdown', () => {
  const wrap = setup(true);

  it('should render component for isOpen state', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should use specified props', () => {
    const modal = wrap.find(Styled.Container);
    expect(modal.prop('top')).toBe('1rem');
    expect(modal.prop('right')).toBe('1rem');
  });
});

describe('it apply specified styles for open/close states', () => {
  test('it applies default styles for open modal', () => {
    const tree = renderer
      .create(<ThemeProvider theme={mainTheme}>{setup(true)}</ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('visibility', 'visible');
  });

  test('it does not shoul modal when it is closed', () => {
    const tree = renderer
      .create(<ThemeProvider theme={mainTheme}>{setup(false)}</ThemeProvider>)
      .toJSON();

    expect(tree).toHaveStyleRule('visibility', 'hidden');
  });
});
