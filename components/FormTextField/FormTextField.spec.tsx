import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormTextField from './FormTextField';

describe('Form text control component', () => {
  const wrap = mount(
    <FormTextField name="tomato" type="email" placeholder="tomato" />
  );

  it('should render specified input name', () => {
    expect(wrap);
    expect(wrap.find('input').prop('name')).toBe('tomato');
  });
  it('should render specified input type', () => {
    expect(wrap);
    expect(wrap.find('input').prop('type')).toBe('email');
  });
  it('should render specified input placeholder', () => {
    expect(wrap);
    expect(wrap.find('input').prop('placeholder')).toBe('tomato');
  });
});
