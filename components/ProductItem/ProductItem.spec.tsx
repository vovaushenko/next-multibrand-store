import { shallow } from 'enzyme';
import React from 'react';
import ProductItem from './ProductItem';
import { testProductItem } from './ProductItem.stories';

describe('Footer Social-links Section', () => {
  const wrap = shallow(
    <ProductItem
      {...testProductItem}
      brand="nike"
      model="tomato"
      styleCode="banana"
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render brandName', () => {
    const brandName = wrap.find('.brand-name');
    expect(brandName.text()).toBe('nike');
  });
  it('should render brandModel', () => {
    const brandModel = wrap.find('.brand-model');
    expect(brandModel.text()).toBe('tomato');
  });
  it('should render style code', () => {
    const styleCode = wrap.find('.style-code');
    expect(styleCode.text()).toBe(`Style-Code : banana`);
  });
});
