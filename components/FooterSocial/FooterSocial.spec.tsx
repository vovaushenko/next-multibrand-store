import { shallow } from 'enzyme';
import React from 'react';
import FooterSocial from './FooterSocial';
import { socialLinks } from './socialLinks';

describe('Footer Social-links Section', () => {
  const wrap = shallow(<FooterSocial footerSocialLinks={socialLinks} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all icons', () => {
    const icons = wrap.find('li');
    expect(icons.length).toBe(3);
  });
});
