import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CustomerReview from '../CustomerReview/CustomerReview';
import ReviewCard from './ReviewCard';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<ReviewCard />));
};

describe('Review Card', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified product review', () => {
    const reviews = wrap.find(CustomerReview);
    expect(reviews.length).toBe(0);
  });
});
