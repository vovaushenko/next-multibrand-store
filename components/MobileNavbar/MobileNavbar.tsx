import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import NavCart from '../NavCart/NavCart';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import NavUserAccount from '../NavUserAccount/NavUserAccount';
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
        <NavUserAccount />
        <NavCart />
        <BiSearch className="mobile-icon" onClick={toggleSearchVisibility} />
        <GoThreeBars className="mobile-icon" />
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
