import React, { useState } from 'react';
import { BiSearch, BiUser } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import CartIcon from '../CartIcon/CartIcon';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import * as Styled from './styles.MobileNavbar';

/**
 * This navbar will be shown only on mobile screens
 *@function MobileNavbar
 *@returns {JSX.Element} - Rendered MobileNavbar component
 */

const MobileNavbar = (): JSX.Element => {
  const [isSearchOnScreen, setIsSearchOnScreen] = useState(false);

  const toggleSearchVisibility = () => setIsSearchOnScreen((prev) => !prev);

  return (
    <>
      <Styled.Container>
        <Styled.LogoWrap>
          <NavbarHeaderLogo
            headerText="sneaker-maniacs"
            src="/logo.png"
            height={50}
            width={50}
          />
        </Styled.LogoWrap>
        <Styled.IconsWrap>
          <BiSearch className="mobile-icon" onClick={toggleSearchVisibility} />
          <BiUser className="mobile-icon" />
          <CartIcon productAmount={0} />
          <GoThreeBars className="mobile-icon" />
        </Styled.IconsWrap>
      </Styled.Container>
      {/* Search bar will be controlled through local state */}
      {isSearchOnScreen && (
        <Styled.SearchContainer>
          <NavHeaderSearch />
        </Styled.SearchContainer>
      )}
    </>
  );
};

export default MobileNavbar;
