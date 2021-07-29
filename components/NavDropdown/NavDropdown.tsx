import React from 'react';
import { NavDropdownItem } from '../../types';
import RouterLink from '../RouterLink/RouterLink';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as Styled from './styles';

export interface Props {
  dropdownContent: NavDropdownItem;
  sectionName: string;
}

const NavigationDropdown = ({
  dropdownContent,
  sectionName,
}: Props): JSX.Element => {
  // Will get array of Keys for headers in dropdown, also we should get rid of 'section' key since it has no corresponding value
  const sectionTitles = Object.keys(dropdownContent).filter(
    (key) => key !== 'section'
  );

  const mapSectionToContent = (section: string) => {
    if (section === 'women') return 'women';
    if (section === 'men') return 'men';
    return 'kid';
  };

  if (sectionName === 'most wanted') {
    sectionName = 'tmw';
  }

  return (
    <Styled.Container>
      <Styled.List>
        {sectionTitles.map((section) => (
          <Styled.ListItem key={section}>
            <SectionHeader headerText={section + `'s`} />
            {dropdownContent[mapSectionToContent(section)].map((brand, id) => (
              <RouterLink
                key={id}
                href={`/products/${sectionName}/${section.toLowerCase()}/${brand.toLowerCase()}`}
              >
                {brand}
              </RouterLink>
            ))}
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};
export default NavigationDropdown;
