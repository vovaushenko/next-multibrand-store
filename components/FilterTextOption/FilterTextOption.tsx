import React from 'react';
import { Department, ProductSize, SneakerBrand } from '../../types';
import * as Styled from './styles.FilterTextOption';

export interface Props<T> {
  filterBy: string;
  filterOptions: Array<T>;
}

/**
 * Dropdown component used to display filtering options in <Filter/>
 *@function FilterTextOption
 *@param {string} filterBy - Filter by this parameter
 *@param {string} filterOptions - List of available filtering options, such as product brand, size and department
 *@returns {JSX.Element} - Rendered FilterTextOption component
 */
const FilterTextOption = ({
  filterBy,
  filterOptions,
}: Props<SneakerBrand | Department | ProductSize>): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.FilterOption>
        <summary>{filterBy}</summary>
        {filterOptions.map((option, id) => (
          <Styled.FilterButton key={id}>{option}</Styled.FilterButton>
        ))}
      </Styled.FilterOption>
    </Styled.Container>
  );
};
export default FilterTextOption;
