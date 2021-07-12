import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormFileField from './FormFileField';

describe('Form text control component', () => {
  const wrap = mount(
    <FormFileField
      name="tomato"
      labelText="test-label"
      placeholder="tomato"
      required={true}
      onChange={() => console.log('test')}
    />
  );
  it('should render specified label text', () => {
    const label = wrap.find('label');
    expect(label.text()).toBe('test-label');
  });

  it('should render specified input name', () => {
    expect(wrap);
    expect(wrap.find('input').prop('name')).toBe('tomato');
  });

  it('should render specified input placeholder', () => {
    expect(wrap);
    expect(wrap.find('input').prop('placeholder')).toBe('tomato');
  });
});
