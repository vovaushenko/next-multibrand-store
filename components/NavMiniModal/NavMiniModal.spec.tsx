import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import NavMiniModal from './NavMiniModal';
import * as Styled from './styles.NavMiniModal';

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

  describe('closed modal', () => {
    const wrap = setup(false);
    it('should not render modal in closed state', () => {
      const modal = wrap.find(Styled.Container);
      expect(modal.length).toBe(1);
    });
  });
});
