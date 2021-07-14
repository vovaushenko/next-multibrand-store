import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ProductDetailsCard from './ProductDetailsCard';
import * as Styled from './styles';

describe('Review Card', () => {
  const wrap = shallow(
    <ProductDetailsCard
      department="men"
      brand="air jordan"
      model="V (5) Retro (Raging Bull)"
      colors={['red', 'black', 'white']}
      price={150}
      size={[7, 8, 9, 9.5, 10, 11, 11.5]}
      styleCode="440888-600"
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified product price', () => {
    const header = wrap.find(Styled.Price);
    expect(header.text()).toBe('150');
  });
  it('should render specified product style code', () => {
    expect(wrap.find('li').first().text()).toBe('Style:440888-600');
  });
  it('should render specified product style colors', () => {
    expect(wrap.find('li').last().text()).toBe('Colors:red/black/white');
  });

  it('should render all specified product sizes', () => {
    const sizes = wrap.find(Styled.Size);
    expect(sizes.length).toBe(7);
  });
});
