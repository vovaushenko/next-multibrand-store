import React from 'react';
import { NavDropdownItem } from '../../types';
import * as Styled from './styles';

export interface Props {
  dropdownContent: NavDropdownItem;
}

const NavigationDropdown = ({ dropdownContent }: Props): JSX.Element => {
  const sectionTitles = Object.keys(dropdownContent).filter(
    (k) => k !== 'section'
  );

  const mapSectionToContent = (section: string) => {
    if (section === 'women') return 'women';
    if (section === 'men') return 'men';
    return 'kid';
  };

  return (
    <Styled.Container>
      <ul>
        {sectionTitles.map((section) => (
          <li key={section}>
            {section} {dropdownContent[mapSectionToContent(section)].join(' ')}
          </li>
        ))}
      </ul>
    </Styled.Container>
  );
};
export default NavigationDropdown;
