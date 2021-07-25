import { shallow } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CheckoutShippingInfo from './CheckoutShippingInfo';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(withReduxAndStyledProviders(<CheckoutShippingInfo />));
};

describe('Checkout Shipping info component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
