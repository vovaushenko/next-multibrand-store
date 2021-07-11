import React from 'react';
import { RouterLinkType } from '../../types';
import RouterLink from '../RouterLink/RouterLink';
import { StyledAdminNavigation } from './styles';

export type Props = {
  adminNavLinks: RouterLinkType<string>[];
};

/**
 *@function AdminNavigation
 *@param {array} adminNavLinks - array of objects to render admin router links
 *@returns {JSX.Element} - Rendered component AdminNavigation
 */
const AdminNavigation = ({ adminNavLinks }: Props): JSX.Element => {
  return (
    <nav>
      <StyledAdminNavigation>
        {/* TODO:ADMIN info/avatar section */}
        <ul>
          {adminNavLinks.map((link) => (
            <li key={link.text}>
              <RouterLink href={link.href} fontSize={'1.25rem'}>
                {link.text}
              </RouterLink>
            </li>
          ))}
        </ul>
      </StyledAdminNavigation>
    </nav>
  );
};

export default AdminNavigation;
