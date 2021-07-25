import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CheckoutProgress from './CheckoutProgress';
import * as Styled from './styled.CheckoutProgress';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CheckoutProgress />));
};

describe('Checkout Progress component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all progress steps', () => {
    const progressStep = wrap.find(Styled.ProgressLink);
    expect(progressStep.length).toBe(4);
  });
});
