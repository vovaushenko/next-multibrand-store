import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import FooterSocialIcon from '../FooterSocialIcon/FooterSocialIcon';
import HR from '../HR/HR';
import SectionHeader from '../SectionHeader/SectionHeader';
import { SocialLink } from './socialLinks';

export type Props = {
  footerSocialLinks: SocialLink[];
};
/**
 * Presentational component which displays social links in footer
 *@function FooterSocial
 *@param {object} props - React.props
 *@returns {JSX.Element} - Rendered FooterSocial component
 */

const FooterSocial = ({ footerSocialLinks }: Props): JSX.Element => {
  return (
    <FooterSocialSection>
      <Container>
        <HR />
        <SectionHeader headerText="stay connected" />
        <ul>
          {footerSocialLinks.map((link, id) => (
            <li key={id}>
              <FooterSocialIcon href={link.url} icon={link.icon} />
            </li>
          ))}
        </ul>
        <HR />
      </Container>
    </FooterSocialSection>
  );
};

const FooterSocialSection = styled.section`
  ul {
    display: flex;
    li:nth-child(n + 2) {
      margin-left: 1rem;
    }
  }
`;

export default FooterSocial;
