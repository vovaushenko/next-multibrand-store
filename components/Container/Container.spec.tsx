import { mount } from 'enzyme';
import React from 'react';
import Container from './Container';

describe('Container', () => {
  const container = mount(<Container />);

  it('should render without throwing an error', () => {
    expect(container);
    expect(container.length).toBe(1);
  });
});
