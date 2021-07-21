import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './PageHeader';

describe('Button', () => {
  const wrap = mount(<PageHeader headerText="tomato" />);

  it('should render text content without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h2').text()).toBe('tomato');
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<PageHeader headerText="tomato" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
