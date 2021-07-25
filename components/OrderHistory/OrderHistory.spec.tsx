import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import Button from '../Button/Button';
import OrderHistory from './OrderHistory';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(withReduxAndStyledProviders(<OrderHistory />));
};

describe('Order History', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should NOT render button `make your first order` if user has no orders', () => {
    const button = wrap.find(Button);
    expect(button.length).toBe(0);
  });
});
