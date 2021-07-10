import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  const wrap = mount(
    <Button
      text="tomato"
      isCompleted={false}
      isLoading={true}
      disabled={false}
    />
  );

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('tomato');
  });

  test('it applies default styles', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('border', '0');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
