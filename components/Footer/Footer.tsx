import React from 'react';
import styled from 'styled-components';
import FooterSocial from '../FooterSocial/FooterSocial';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <FooterSocial />
      {/* TODO: Footer links */}
      {/* TODO: Footer policy */}
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

export default Footer;
