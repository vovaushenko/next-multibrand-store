import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { navPictureLinks } from './navPictureData';
import * as Styled from './styles';

/**
 * Representational component that will map navLinks into List of Image Links in Navigation Bar
 * is used only in NEW ARRIVALS section of navigation
 *@function
 *@returns {JSX.Element} - NavPictureDropdown rendered component
 */
const NavPictureDropdown = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.List>
        {navPictureLinks.map((link) => (
          <Styled.ListItem key={link.section}>
            <Link href={`/products/all/${link.section}`} passHref={true}>
              <Image
                className="section-image"
                src={link.src}
                height={200}
                width={350}
                objectFit="cover"
                alt={link.section}
              />
            </Link>
            <SectionHeader headerText={link.section + `'s`} />
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default NavPictureDropdown;
