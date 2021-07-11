import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import PageHeader from './PageHeader';

describe('Button', () => {
  const wrap = mount(<PageHeader headerText="tomato" />);

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h1').text()).toBe('tomato');
  });
});
