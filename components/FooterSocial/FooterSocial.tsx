import React from 'react';
import styled from 'styled-components';
import HR from '../HR/HR';
import SectionHeader from '../SectionHeader/SectionHeader';
import { socialLinks } from './socialLinks';

const FooterSocial = (): JSX.Element => {
  return (
    <FooterSocialSection>
      <HR />
      <SectionHeader headerText="stay connected" />
      <ul>
        {socialLinks.map((link, id) => (
          <li key={id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
      <HR />
    </FooterSocialSection>
  );
};

const FooterSocialSection = styled.section`
  ul {
    display: flex;
  }
  .footer-social-icon {
    color: red;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export default FooterSocial;
