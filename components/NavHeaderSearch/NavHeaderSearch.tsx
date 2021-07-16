import React from 'react';
import { BiSearch } from 'react-icons/bi';
import * as Styled from './styles.NavHeaderSearch';

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
    <Styled.Container>
      <Styled.Form onSubmit={handleSearch}>
        <Styled.Input
          className="search-input"
          type="text"
          placeholder="Search..."
        />
        <Styled.SubmitButton className="search-submit-btn" type="submit">
          <BiSearch className="search-icon" />
        </Styled.SubmitButton>
      </Styled.Form>
    </Styled.Container>
  );
};

export default NavHeaderSearch;
