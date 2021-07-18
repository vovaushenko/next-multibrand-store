import { shallow } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import PaymentMethodIcon from './PaymentMethodIcon';

describe('Payment Method Icon component', () => {
  const wrap = shallow(
    <PaymentMethodIcon iconAlt="tomato" iconSrc="/public/icon.svg" />
  );

  it('should render with specified img alt attribute', () => {
    const icon = wrap.find(Image);
    expect(icon.prop('alt')).toBe('tomato');
  });
  it('should render with specified img src attribute', () => {
    const icon = wrap.find(Image);
    expect(icon.prop('src')).toBe('/public/icon.svg');
  });
});
