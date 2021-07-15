import React from 'react';
import { BsGrid3X3GapFill, BsListUl } from 'react-icons/bs';
import PageHeader from '../PageHeader/PageHeader';
import * as Styled from './styles.GridControl';

export interface Props {
  header: string;
  productAmount: number;
  changeLayout: (val: 'grid' | 'vertical') => void;
}
/**
 *@function GridControl
 *@param {string} header - Grid control header
 *@returns {JSX.Element} - Rendered GridControl component
 */
const GridControl = ({
  header,
  productAmount,
  changeLayout,
}: Props): JSX.Element => {
  // TODO: change paragraphs to controllable <details></details>
  // TODO: Implement sorting and pagination
  return (
    <Styled.Container>
      <PageHeader headerText={header} />
      <p>Showing {productAmount} products</p>
      <p>Display 24 per page</p>
      <p>Sort by: Alphabetically, A-Z</p>
      <Styled.IconContainer>
        <p>View</p>
        <BsGrid3X3GapFill
          className="icon"
          onClick={() => changeLayout('grid')}
        />
        <BsListUl className="icon" onClick={() => changeLayout('vertical')} />
      </Styled.IconContainer>
    </Styled.Container>
  );
};
export default GridControl;
