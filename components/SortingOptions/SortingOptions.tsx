import React from 'react';
import { useActions } from '../../hooks/useActions';
import { SortingOptionsType } from '../../types';
import * as Styled from './styles.SortingOptions';

interface Props {
  setSortType: React.Dispatch<React.SetStateAction<string>>;
}

/**
 *Dropdown content form SortBy element in Product Screen, will list all available sorting options and dispatch action to sort according to chosen option
 *@function SortingOptions
 *@param {function} closeSortModal - this element is inside modal, and this function will close modal after selecting sorting option
 *@param {function} setSortType - will set type of sorting that will be displayed in product screen
 *@returns {JSX.Element} - Rendered SortingOptions component
 */
const SortingOptions = ({ setSortType }: Props): JSX.Element => {
  // redux action creator
  const { sortProducts } = useActions();

  // firstly we will set sortType that will be displayed in grid control through setSortType
  const handleSort = (sortType: SortingOptionsType): void => {
    if (sortType === 'a-z') setSortType('Alphabetically, A-Z');
    if (sortType === 'z-a') setSortType('Alphabetically, Z-A');
    if (sortType === 'priceLowToHight') setSortType('Price, low to high');
    if (sortType === 'priceHightToLow') setSortType('Price, high to low');
    // then dispatch sort action and close modal
    sortProducts(sortType);
  };

  return (
    <Styled.Container>
      <Styled.SortingOption onClick={() => handleSort('a-z')}>
        Alphabetically, A-Z
      </Styled.SortingOption>
      <Styled.SortingOption onClick={() => handleSort('z-a')}>
        Alphabetically, Z-A
      </Styled.SortingOption>
      <Styled.SortingOption onClick={() => handleSort('priceLowToHight')}>
        Price, low to high
      </Styled.SortingOption>
      <Styled.SortingOption onClick={() => handleSort('priceHightToLow')}>
        Price, high to low
      </Styled.SortingOption>
    </Styled.Container>
  );
};
export default SortingOptions;
