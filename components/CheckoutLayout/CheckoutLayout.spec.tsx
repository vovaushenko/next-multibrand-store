import { shallow } from 'enzyme';
import React from 'react';
import CheckoutCart from './CheckoutLayout';
import * as Styled from './styles.CheckoutLayout';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const Test = () => <h1>Test</h1>;
const setup = () => {
  return shallow(
    <CheckoutCart title="tomato">
      <Test />
    </CheckoutCart>
  );
};

describe('Checkout Cart content component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render correct title', () => {
    const title = wrap.find('title');
    expect(title.text()).toBe('tomato');
  });

  it('should render both columns', () => {
    const leftCol = wrap.find(Styled.LeftColumn);
    expect(leftCol.length).toBe(1);
    const rightCol = wrap.find(Styled.RightColumn);
    expect(rightCol.length).toBe(1);
  });
});
