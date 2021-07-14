import React, { useState } from 'react';
import Container from '../Container/Container';
import NavigationDropdown from '../NavDropdown/NavDropdown';
import NavLink from '../NavLink/NavLink';
import { navLinks } from './navigationData';
import * as Styled from './styles';

/**
 *Presentational Navbar Navigation Component
 *@function NavbarNavigation
 *@returns {JSX.Element} - Rendered list navigation links
 */
const NavbarNavigation = (): JSX.Element => {
  const [section, setSection] = useState('');

  return (
    <Styled.Navigation onMouseLeave={() => setSection(() => '')}>
      <Container>
        <ul>
          {navLinks.map((link, id) => (
            <li key={id} onMouseEnter={() => setSection(link.section)}>
              <NavLink href={'/hi'} linkText={link.section} />
            </li>
          ))}
        </ul>
      </Container>
      {section === 'new arrivals' && <h1>HELLO WORLD</h1>}
      {section && section !== 'new arrivals' && (
        <NavigationDropdown
          dropdownContent={navLinks.find((l) => l.section === section)!}
        />
      )}
    </Styled.Navigation>
  );
};

export default NavbarNavigation;
