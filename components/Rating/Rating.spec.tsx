import { mount } from 'enzyme';
import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import ProductItem from './Rating';

describe('Rating component', () => {
  const wrap = mount(<ProductItem />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all stars', () => {
    const stars = wrap.find(MdStarBorder);
    expect(stars.length).toBe(5);
  });
});
