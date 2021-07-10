import React from 'react';
import styled from 'styled-components';
import FooterSocial from '../FooterSocial/FooterSocial';
import { socialLinks } from '../FooterSocial/socialLinks';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <FooterSocial footerSocialLinks={socialLinks} />
      {/* TODO: Footer links */}
      {/* TODO: Footer policy */}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

export default Footer;
