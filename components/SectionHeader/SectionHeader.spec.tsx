import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import SectionHeader from './SectionHeader';

describe('Button', () => {
  const wrap = mount(<SectionHeader headerText="tomato" />);

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h3').text()).toBe('tomato');
  });
});
