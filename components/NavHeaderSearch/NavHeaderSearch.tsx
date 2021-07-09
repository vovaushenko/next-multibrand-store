import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { NavSearch } from './styles';

/**
 * Renders Navbar Search Component
 *@function NavHeaderSearch
 *@returns {JSX.Element} - Rendered NavHeaderSearch
 */
const NavHeaderSearch = (): JSX.Element => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: When backend will be ready implement debounced search for products
    console.log('Implement search functionality');
  };

  return (
    <NavSearch>
      <form onSubmit={handleSearch}>
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-submit-btn" type="submit">
          <BiSearch className="search-icon" />
        </button>
      </form>
    </NavSearch>
  );
};

export default NavHeaderSearch;
