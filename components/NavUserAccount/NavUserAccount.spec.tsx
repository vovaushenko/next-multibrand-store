import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavUserAccount from './NavUserAccount';

describe('Navbar Header User account component', () => {
  const wrapper = mount(<NavUserAccount />);

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render account button', () => {
    const accountBtn = wrapper.find('.account-button');
    expect(accountBtn.length).toBe(1);
  });
});
