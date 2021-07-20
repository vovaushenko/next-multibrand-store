import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';
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
        <BiSearch className="mobile-icon" onClick={toggleSearchVisibility} />
        {isNavigationOnScreen ? (
          <CgClose
            className="mobile-icon"
            onClick={toggleNavigationVisibility}
          />
        ) : (
          <GoThreeBars
            className="mobile-icon"
            onClick={toggleNavigationVisibility}
          />
        )}
      </Styled.Container>
      {/* Search bar will be controlled through local state */}
      {isSearchOnScreen && (
        <Styled.SearchContainer>
          <NavHeaderSearch />
        </Styled.SearchContainer>
      )}
      {/* Navigation bar will be controlled through local state */}
      {isNavigationOnScreen && (
        <Styled.SearchContainer>
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
