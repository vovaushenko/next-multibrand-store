import { shallow } from 'enzyme';
import React from 'react';
import FooterLinks from './FooterLinks';
import { footerLinks, rewardLinks } from './footerLinks';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(
    <FooterLinks footerLinks={footerLinks} rewardLinks={rewardLinks} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all contact links', () => {
    const linksContainer = wrap.find('.footer-links');
    const contactLinks = linksContainer.find('li');
    expect(contactLinks.length).toBe(footerLinks.length);
  });
  it('should render all reward links', () => {
    const rewardContainer = wrap.find('.footer-rewards');
    const rewardLinks = rewardContainer.find('li');
    expect(rewardLinks.length).toBe(rewardLinks.length);
  });
});
