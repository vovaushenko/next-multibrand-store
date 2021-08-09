import { mount } from 'enzyme';
import React from 'react';
import { MdBrightness6 } from 'react-icons/md';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import MobileBottomNavigation from './MobileBottomNavigation';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<MobileBottomNavigation />));
};

describe('AdminAllReviews Component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all specified icon links', () => {
    const icons = wrap.find('li');
    expect(icons.length).toBe(5);
  });

  it('should render toggle theme button', () => {
    const themeToggler = wrap.find(MdBrightness6);
    expect(themeToggler.length).toBe(1);
  });
});
