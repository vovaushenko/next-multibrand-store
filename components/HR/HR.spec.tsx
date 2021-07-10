import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import HR from './HR';

describe('HR', () => {
  const wrap = mount(<HR />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  test('it applies specified margin styles', () => {
    const tree = renderer.create(<HR margin="tomato" />).toJSON();
    expect(tree).toHaveStyleRule('margin', 'tomato');
  });
});
