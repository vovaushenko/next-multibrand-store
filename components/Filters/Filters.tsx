import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardHeader from '../CardHeader/CardHeader';
import FilterColorsOption from '../FilterColorOption/FilterColorOption';
import FilterTextOption from '../FilterTextOption/FilterTextOption';
import RemoveFilter from '../RemoveFilter/RemoveFilter';
import {
  filterBrands,
  filterColors,
  filterDepartment,
  filterSize,
} from './filterOptions';
import * as Styled from './styles.Filters';

/**
 *This component is responsible for global filtering
 *@function Filters
 *@returns {JSX.Element} - Rendered  Filters component
 */
const Filters = (): JSX.Element => {
  // All filter values we will get from redux
  const { brand, color, department, size } = useTypedSelector(
    (state) => state.products.filters
  );
  // Action creators
  const { addFilterOption, removeAllFilters } = useActions();

  const handleRemoveFilters = () => removeAllFilters();

  // Each callback set filter value and simultaneously dispatch action to add this filter to global filter object
  const setBrand = useCallback(
    (val: string) => {
      addFilterOption({ filterName: 'brand', filterValue: val });
    },
    [addFilterOption]
  );

  const setColor = useCallback(
    (val: string) => {
      addFilterOption({ filterName: 'color', filterValue: val });
    },
    [addFilterOption]
  );

  const setDepartment = useCallback(
    (val: string) => {
      addFilterOption({ filterName: 'department', filterValue: val });
    },
    [addFilterOption]
  );

  const setSize = useCallback(
    (val: string) => {
      addFilterOption({ filterName: 'size', filterValue: val });
    },
    [addFilterOption]
  );

  // will render remove filters button if there is one filter at least
  const removeFilterButton = (): JSX.Element | null => {
    if (brand || color || department || size)
      return (
        <Styled.ClearFilters onClick={handleRemoveFilters}>
          Clear filters
        </Styled.ClearFilters>
      );
    return null;
  };

  return (
    <Styled.Container>
      <CardHeader headerText="Filters" />

      {brand && <RemoveFilter filterName={brand} removeFilter={setBrand} />}
      {color && <RemoveFilter filterName={color} removeFilter={setColor} />}
      {department && (
        <RemoveFilter filterName={department} removeFilter={setDepartment} />
      )}
      {size && <RemoveFilter filterName={size} removeFilter={setSize} />}
      {removeFilterButton()}

      <FilterTextOption
        filterBy="Brand"
        filterOptions={filterBrands}
        setFilter={setBrand}
      />
      <FilterColorsOption
        filterBy="Color"
        filterOptions={filterColors}
        setFilter={setColor}
      />
      <FilterTextOption
        filterBy="Department"
        filterOptions={filterDepartment}
        setFilter={setDepartment}
      />
      <FilterTextOption
        filterBy="Size"
        filterOptions={filterSize}
        setFilter={setSize}
      />
    </Styled.Container>
  );
};

export default Filters;
