import { shallow } from 'enzyme';
import React from 'react';
import FooterCopyright from './FooterCopyright';
import { footerCopyrightLinks } from './footerCopyright';

describe('Footer Copyright Section', () => {
  const wrap = shallow(
    <FooterCopyright footerCopyrightLinks={footerCopyrightLinks} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all copyright links', () => {
    const copyrightLinks = wrap.find('li');
    expect(copyrightLinks.length).toBe(footerCopyrightLinks.length);
  });
});
