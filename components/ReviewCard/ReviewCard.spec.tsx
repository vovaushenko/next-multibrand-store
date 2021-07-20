import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ReviewCard from './ReviewCard';
import * as Styled from './styles.ReviewCard';

describe('Review Card', () => {
  const wrap = shallow(<ReviewCard review="tomato" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified product review', () => {
    const price = wrap.find(Styled.Review);
    expect(price.text()).toBe('tomato');
  });
});
