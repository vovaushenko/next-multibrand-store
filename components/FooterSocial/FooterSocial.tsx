import React from 'react';
import styled from 'styled-components';
import FooterSocialIcon from '../FooterSocialIcon/FooterSocialIcon';
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
            <FooterSocialIcon href={link.url} icon={link.icon} />
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
`;

export default FooterSocial;
