import { shallow } from 'enzyme';
import React from 'react';
import { MdStar } from 'react-icons/md';
import FiveStars from './FiveStars';

const spec = (rating: number) => {
  return shallow(<FiveStars rating={rating} />);
};

describe('Five Star Rating component', () => {
  const wrap = spec(4);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all stars', () => {
    const stars = wrap.find(MdStar);
    expect(stars.length).toBe(5);
  });

  it('should render one active icon for rating of 1', () => {
    const wrap = spec(1);
    const activeStars = wrap.find('.active-icon');
    expect(activeStars.length).toBe(1);
  });

  it('should render two active icons for rating of 2', () => {
    const wrap = spec(2);
    const activeStars = wrap.find('.active-icon');
    expect(activeStars.length).toBe(2);
  });
  it('should render four active icons for rating of 4', () => {
    const wrap = spec(4);
    const activeStars = wrap.find('.active-icon');
    expect(activeStars.length).toBe(4);
  });
  it('should render five active icons for rating of 5', () => {
    const wrap = spec(5);
    const activeStars = wrap.find('.active-icon');
    expect(activeStars.length).toBe(5);
  });
});
