import React, { useState } from 'react';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { navLinks } from '../NavbarNavigation/navigationData';
import NavCart from '../NavCart/NavCart';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import NavLink from '../NavLink/NavLink';
import NavUserAccount from '../NavUserAccount/NavUserAccount';
import * as Styled from './styles.MobileNavbar';

/**
 * This navbar will be shown only on mobile screens
 *@function MobileNavbar
 *@returns {JSX.Element} - Rendered MobileNavbar component
 */

const MobileNavbar = (): JSX.Element => {
  const [isSearchOnScreen, setIsSearchOnScreen] = useState(false);
  const [isNavigationOnScreen, setIsNavigationOnScreen] = useState(false);

  const toggleSearchVisibility = () => setIsSearchOnScreen((prev) => !prev);
  const toggleNavigationVisibility = () =>
    setIsNavigationOnScreen((prev) => !prev);

  return (
    <>
      <Styled.Container>
        <NavUserAccount />
        <NavCart />
        <MdSearch className="mobile-icon" onClick={toggleSearchVisibility} />
        {isNavigationOnScreen ? (
          <MdClose
            className="mobile-icon"
            onClick={toggleNavigationVisibility}
          />
        ) : (
          <MdMenu
            className="mobile-icon"
            onClick={toggleNavigationVisibility}
          />
        )}
      </Styled.Container>
      {/* Search bar will be controlled through local state */}
      {isSearchOnScreen && (
        <Styled.SearchContainer height="auto">
          <NavHeaderSearch />
        </Styled.SearchContainer>
      )}
      {/* Navigation bar will be controlled through local state */}
      {isNavigationOnScreen && (
        <Styled.SearchContainer height="100vh">
          <ul>
            {navLinks.map((link, id) => (
              <li key={id}>
                <NavLink href={`/products/all`} linkText={link.section} />
              </li>
            ))}
          </ul>
        </Styled.SearchContainer>
      )}
    </>
  );
};

export default MobileNavbar;
