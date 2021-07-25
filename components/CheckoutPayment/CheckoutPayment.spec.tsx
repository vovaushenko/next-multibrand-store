import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CheckoutPayment from './CheckoutPayment';
import * as Styled from './styles.CheckoutPayment';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CheckoutPayment />));
};

describe('Checkout Payment component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  //TODO:write proper tests after finishing checkout flow
  it('should render footer section', () => {
    const footer = wrap.find(Styled.ButtonWrap);
    expect(footer.length).toBe(1);
  });
});
