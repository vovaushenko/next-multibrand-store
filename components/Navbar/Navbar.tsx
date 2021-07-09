import React from 'react';
import NavbarHeader from '../NavbarHeader/NavbarHeader';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';

/**
 * Renders navbar with its composed content
 *@function Navbar
 *@returns {JSX.Element} - Rendered Navbar
 */
const Navbar = (): JSX.Element => {
  return (
    <>
      <NavbarHeader />
      <NavbarNavigation />
    </>
  );
};
export default Navbar;
