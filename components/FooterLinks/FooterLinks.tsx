import React from 'react';
import { RouterLinkType } from '../../types';
import Container from '../Container/Container';
import RouterLink from '../RouterLink/RouterLink';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FooterLinksSection, SneakerManiacPlus } from './styles';

export interface Props {
  footerLinks: RouterLinkType<string>[];
  rewardLinks: RouterLinkType<string>[];
}
/**
 * Footer Links Section
 *@function FooterLinks
 *@param {array} footerLinks - array of objects for footer links
 *@param {array} rewardLinks - array of objects for reward links
 *@returns {JSX.Element} - Rendered Footer Links Section
 */
const FooterLinks = ({ footerLinks, rewardLinks }: Props): JSX.Element => {
  return (
    <Container>
      <FooterLinksSection>
        <div className="footer-links">
          <SectionHeader headerText="Customer support" />
          <p>Call us at 1-777-777-7777</p>
          <ul>
            {footerLinks.map((link, id) => (
              <li key={id}>
                <RouterLink href={link.href}>{link.text}</RouterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-rewards">
          <SectionHeader headerText="Loyalty rewards" />
          <ul>
            {rewardLinks.map((link, id) => (
              <li key={id}>
                <RouterLink href={link.href}>{link.text}</RouterLink>
              </li>
            ))}
            <li>
              <RouterLink href="sneaker-maniac">
                <SneakerManiacPlus>SNEAKERMANIC+</SneakerManiacPlus>
              </RouterLink>
            </li>
          </ul>
        </div>
      </FooterLinksSection>
    </Container>
  );
};

export default FooterLinks;
