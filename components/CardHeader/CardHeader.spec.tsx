import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import CardHeader from './CardHeader';

describe('Card Header', () => {
  const wrap = mount(<CardHeader headerText="tomato" />);

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h3').text()).toBe('tomato');
  });
});
