import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CheckoutShipping from './CheckoutShipping';
import * as Styled from './styles.CheckoutShipping';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CheckoutShipping />));
};

describe('Checkout Progress component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render footer section', () => {
    const footer = wrap.find(Styled.ButtonWrap);
    expect(footer.length).toBe(1);
  });
});
