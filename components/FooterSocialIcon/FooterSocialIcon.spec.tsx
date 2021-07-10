import { shallow } from 'enzyme';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import FooterSocialIcon from './FooterSocialIcon';

describe('HR', () => {
  const wrap = shallow(
    <FooterSocialIcon href={'tomato'} icon={<FaFacebook />} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render specified icon', () => {
    expect(wrap.containsMatchingElement(<FaFacebook />)).toEqual(true);
  });
});
