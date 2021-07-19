import React from 'react';
import { TiDelete } from 'react-icons/ti';
import * as Styled from './styles.RemoveFilter';

export interface Props {
  filterName: string;
  removeFilter: (val: string) => void;
}

const RemoveFilter = ({ filterName, removeFilter }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.RemoveBtn onClick={() => removeFilter('')}>
        <TiDelete className="remove_icon" />
      </Styled.RemoveBtn>
      <Styled.FilterName>{filterName}</Styled.FilterName>
    </Styled.Container>
  );
};
export default RemoveFilter;
