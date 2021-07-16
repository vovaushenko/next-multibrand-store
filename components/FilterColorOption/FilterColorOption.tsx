import React from 'react';
import { ProductColors } from '../../types';
import * as Styled from './styles.FilterColorOptions';

export interface Props {
  filterBy: string;
  filterOptions: Array<ProductColors>;
}

/**
 * Dropdown component used to display filtering options in <Filter/>
 *@function FilterTextOption
 *@param {string} filterBy - Filter by this parameter
 *@param {string} filterOptions - List of available filtering options, such as product brand, size and department
 *@returns {JSX.Element} - Rendered FilterTextOption component
 */
const FilterTextOption = ({ filterBy, filterOptions }: Props): JSX.Element => {
  //TODO: connect filter text option with global filtering state
  // TODO: highlight selected filter with standard outline
  return (
    <Styled.Container>
      <Styled.FilterOption>
        <summary>{filterBy}</summary>
        <Styled.ColorsGrid>
          {filterOptions.map((option, id) => (
            <Styled.FilterButton
              key={id}
              bgColor={option}
            ></Styled.FilterButton>
          ))}
        </Styled.ColorsGrid>
      </Styled.FilterOption>
    </Styled.Container>
  );
};
export default FilterTextOption;
