import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormTextAreaField from './FormTextAreaField';

describe('Form text control component', () => {
  const wrap = mount(
    <FormTextAreaField
      name="tomato"
      placeholder="tomato"
      value="test"
      setValue={() => console.log('test')}
    />
  );
  it('should render', () => {
    expect(wrap.length).toBe(1);
  });

  it('should render specified textarea name', () => {
    expect(wrap);
    expect(wrap.find('textarea').prop('name')).toBe('tomato');
  });
  it('should render specified input placeholder', () => {
    const placeholder = wrap.find('label');
    expect(placeholder.text()).toBe('tomato');
  });
});
