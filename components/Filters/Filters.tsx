import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import FilterColorsOption from '../FilterColorOption/FilterColorOption';
import FilterTextOption from '../FilterTextOption/FilterTextOption';
import {
  filterBrands,
  filterColors,
  filterDepartment,
  filterSize,
} from './filterOptions';
import * as Styled from './styles.Filters';

/**
 * Representational Filter Component to display all available filter options
 *@function Filters
 *@returns {JSX.Element} - Rendered  Filters component
 */
const Filters = (): JSX.Element => {
  //TODO: Finish filters
  //! In current iteration it's only a placeholder
  return (
    <Styled.Container>
      <CardHeader headerText="Filters" />
      <FilterTextOption filterBy="Brand" filterOptions={filterBrands} />
      <FilterColorsOption filterBy="Color" filterOptions={filterColors} />
      <FilterTextOption
        filterBy="Department"
        filterOptions={filterDepartment}
      />
      <FilterTextOption filterBy="Size" filterOptions={filterSize} />
    </Styled.Container>
  );
};

export default Filters;
