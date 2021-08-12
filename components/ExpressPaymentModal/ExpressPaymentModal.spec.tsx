import { shallow } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import ExpressPaymentModalConent from './ExpressPaymentModalConent';

describe('Express Payment Modal content', () => {
  const wrapper = shallow(
    <ExpressPaymentModalConent
      imgAlt="image with juicy tomato"
      paymentMethodImageSrc="/tomato/juicy"
    />
  );

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  describe('it should render image with correct attributes', () => {
    const image = wrapper.find(Image);

    it('should  image with specified alt', () => {
      expect(image.prop('alt')).toBe('image with juicy tomato');
    });

    it('should  image with specified src', () => {
      expect(image.prop('src')).toBe('/tomato/juicy');
    });

    it('should  image with specified width', () => {
      expect(image.prop('width')).toBe(360);
    });
    it('should  image with specified height', () => {
      expect(image.prop('height')).toBe(250);
    });
  });
});
