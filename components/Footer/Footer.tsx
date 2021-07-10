import React from 'react';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import { footerCopyrightLinks } from '../FooterCopyright/footerCopyright';
import FooterLinks from '../FooterLinks/FooterLinks';
import { footerLinks, rewardLinks } from '../FooterLinks/footerLinks';
import FooterSocial from '../FooterSocial/FooterSocial';
import { socialLinks } from '../FooterSocial/socialLinks';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterSocial footerSocialLinks={socialLinks} />
      <FooterLinks footerLinks={footerLinks} rewardLinks={rewardLinks} />
      <FooterCopyright footerCopyrightLinks={footerCopyrightLinks} />
    </footer>
  );
};

export default Footer;
