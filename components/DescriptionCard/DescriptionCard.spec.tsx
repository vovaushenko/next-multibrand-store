import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import DescriptionCard from './DescriptionCard';
import * as Styled from './styles';

describe('Description Card', () => {
  const wrap = shallow(<DescriptionCard description="tomato" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified product description', () => {
    const price = wrap.find(Styled.Description);
    expect(price.text()).toBe('tomato');
  });
});
