import { shallow } from 'enzyme';
import React from 'react';
import '../__mocks__/matchMediaMock';
import NavUserAccount from './NavUserAccount';
import * as Styled from './styles.NavUserAccount';

describe('Navigation User Account', () => {
  const wrap = shallow(<NavUserAccount />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all invitation to SignIn for non authenticated users', () => {
    const signin = wrap.find(Styled.SignIn);
    expect(signin.length).toBe(1);
  });
});
