import React from 'react';
import styled from 'styled-components';
import FooterLinks from '../FooterLinks/FooterLinks';
import { footerLinks, rewardLinks } from '../FooterLinks/footerLinks';
import FooterSocial from '../FooterSocial/FooterSocial';
import { socialLinks } from '../FooterSocial/socialLinks';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <FooterSocial footerSocialLinks={socialLinks} />
      <FooterLinks footerLinks={footerLinks} rewardLinks={rewardLinks} />
      {/* TODO: Footer policy */}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

export default Footer;
