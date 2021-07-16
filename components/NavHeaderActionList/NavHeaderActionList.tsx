import React from 'react';
import NavCart from '../NavCart/NavCart';
import NavUserAccount from '../NavUserAccount/NavUserAccount';
import * as Styled from './styles.NavHeaderActionList';

/**
 * NavHeaderActionList renders UserAccount and Cart in Navbar
 *@function NavHeaderActionList
 *@returns {JSX.Element} - Rendered NavHeaderActionList component
 */
const NavHeaderActionList = (): JSX.Element => {
  return (
    <Styled.Container>
      <NavUserAccount />
      <NavCart />
    </Styled.Container>
  );
};

export default NavHeaderActionList;
