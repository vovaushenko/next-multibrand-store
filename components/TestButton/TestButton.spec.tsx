import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import TestButton from './TestButton';

describe('Button', () => {
  const wrap = mount(<TestButton text="Button" bgColor="tomato" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('Button');
  });

  it('it applies default styles', () => {
    const tree = renderer
      .create(<TestButton text="Button" bgColor="tomato" />)
      .toJSON();
    expect(tree).toHaveStyleRule('background-color', 'tomato');
  });
});
