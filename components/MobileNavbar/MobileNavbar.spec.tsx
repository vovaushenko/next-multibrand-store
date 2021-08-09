import { shallow } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import MobileNavbar from './MobileNavbar';
import * as Styled from './styles.MobileNavbar';

const setup = () => {
  return shallow(withReduxAndStyledProviders(<Styled.Container />));
};

const resizeWindow = (innerWidth: number): void => {
  window = Object.assign(window, { innerWidth });
  window.dispatchEvent(new Event('resize'));
};

describe('Mobile Navbar', () => {
  const wrapper = setup();

  describe('with closed dropdowns', () => {
    it('should render on MOBILE screens', () => {
      resizeWindow(200);
      expect(wrapper.length).toBe(1);
    });

    it('should render main nav container', () => {
      const nav = wrapper.find(Styled.Container);
      expect(nav.length).toBe(1);
    });

    it('should not render dropdowns when they are not toggled', () => {
      const dropdown = wrapper.find(Styled.SearchContainer);
      expect(dropdown.length).toBe(0);
    });
  });

  describe('with open dropdowns', () => {
    const initialStateForFirstUseStateCall = false;
    const initialStateForSecondUseStateCall = false;

    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}]);

    const wrapper = shallow(<MobileNavbar />);

    it('should  render dropdowns when they are OPEN', () => {
      const dropdown = wrapper.find(Styled.SearchContainer);
      expect(dropdown.length).toBe(0);
    });
  });
});
