import React, { useCallback, useState } from 'react';
import { useActions } from '../../hooks/useActions';
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
 *This component is responsible for global filtering
 *@function Filters
 *@returns {JSX.Element} - Rendered  Filters component
 */
const Filters = (): JSX.Element => {
  // List of filter values that will be passed to global state filter object
  const [brandFilter, setBrandFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('');
  const [sizeFilter, setSizeFilter] = useState<string>('');

  const { addFilterOption } = useActions();
  // Each callback set filter value and simultaneously dispatch action to add this filter to global filter object
  // TODO: REFACTOR AND REMOVE CODE DUPLICATION
  const setBrand = useCallback(
    (val: string) => {
      setBrandFilter(val);
      addFilterOption({ filterName: 'brand', filterValue: val });
    },
    [addFilterOption]
  );

  const setColor = useCallback(
    (val: string) => {
      setColorFilter(val);
      addFilterOption({ filterName: 'color', filterValue: val });
    },
    [addFilterOption]
  );

  const setDepartment = useCallback(
    (val: string) => {
      setDepartmentFilter(val);
      addFilterOption({ filterName: 'department', filterValue: val });
    },
    [addFilterOption]
  );

  const setSize = useCallback(
    (val: string) => {
      setSizeFilter(val);
      addFilterOption({ filterName: 'size', filterValue: val });
    },
    [addFilterOption]
  );
  // TODO: Add nice Filter Display/remove component
  return (
    <Styled.Container>
      <h1>
        {brandFilter} {colorFilter} {departmentFilter} {sizeFilter}
      </h1>
      <CardHeader headerText="Filters" />
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
