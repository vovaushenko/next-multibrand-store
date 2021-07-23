import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import FormCheckboxField from './FormCheckboxField';

describe('Form checkbox control component', () => {
  const wrap = mount(
    <FormCheckboxField
      name="tomato"
      checked={false}
      setChecked={() => console.log('test')}
    />
  );
  it('should render', () => {
    expect(wrap.length).toBe(1);
  });

  it('should render specified input name', () => {
    expect(wrap);
    expect(wrap.find('input').prop('name')).toBe('tomato');
  });
});
