import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormTextField from '../FormTextField/FormTextField';
import Rating from '../Rating/Rating';
import ReviewForm from './ReviewForm';

describe('Review Form', () => {
  const wrap = shallow(<ReviewForm />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render rating component', () => {
    const rating = wrap.find(Rating);
    expect(rating.length).toBe(1);
  });
  it('should render all text inputs', () => {
    const textField = wrap.find(FormTextField);
    expect(textField.length).toBe(4);
  });
});
