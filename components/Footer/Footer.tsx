import React from 'react';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import { footerCopyrightLinks } from '../FooterCopyright/footerCopyright';
import FooterLinks from '../FooterLinks/FooterLinks';
import { footerLinks, rewardLinks } from '../FooterLinks/footerLinks';
import FooterSocial from '../FooterSocial/FooterSocial';
import { socialLinks } from '../FooterSocial/socialLinks';
import * as Styled from './styles.Footer';

/**
 *Combined footer component
 *@function Footer
 *@returns {JSX.Element} - Rendered Footer component
 */
const Footer = (): JSX.Element => {
  return (
    <Styled.Container>
      <FooterSocial footerSocialLinks={socialLinks} />
      <FooterLinks footerLinks={footerLinks} rewardLinks={rewardLinks} />
      <FooterCopyright footerCopyrightLinks={footerCopyrightLinks} />
    </Styled.Container>
  );
};

export default Footer;
