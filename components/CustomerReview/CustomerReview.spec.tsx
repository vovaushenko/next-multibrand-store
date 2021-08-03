import { shallow } from 'enzyme';
import React from 'react';
import FiveStars from '../FiveStars/FiveStars';
import CustomerReview from './CustomerReview';
import * as Styled from './styles.CustomerReview';

const spec = () => {
  return shallow(
    <CustomerReview
      clientName="john doe"
      createdAt="2021-08-02T18:18:46.304Z"
      rating={4}
      reviewContent="some review"
      title="review"
    />
  );
};

describe('Customer Review component', () => {
  const wrap = spec();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render FiveStars component', () => {
    const fiveStars = wrap.find(FiveStars);
    expect(fiveStars.length).toBe(1);
  });

  it('should render correct Client Name', () => {
    const clientName = wrap.find(Styled.ClientName);
    expect(clientName.text()).toBe('john doe');
  });

  it('should render correct Time', () => {
    const time = wrap.find(Styled.Time);
    expect(time.text()).toBe('August 2, 2021');
  });

  it('should render correct title', () => {
    const title = wrap.find(Styled.ReviewTitle);
    expect(title.text()).toBe('review');
  });

  it('should render correct review content', () => {
    const reviewContent = wrap.find(Styled.ReviewText);
    expect(reviewContent.text()).toBe('some review');
  });
});
