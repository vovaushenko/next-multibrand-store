import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import ReviewCard from './ReviewCard';
import * as Styled from './styles.ReviewCard';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<ReviewCard review="tomato" />));
};

describe('Review Card', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified product review', () => {
    const price = wrap.find(Styled.Review);
    expect(price.text()).toBe('tomato');
  });
});
