import React, { useState } from 'react';
import { BsGrid3X3GapFill, BsListUl } from 'react-icons/bs';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import PageHeader from '../PageHeader/PageHeader';
import SortingOptions from '../SortingOptions/SortingOptions';
import * as Styled from './styles.GridControl';

export interface Props {
  header: string;
  productAmount: number;
  changeLayout: (val: 'grid' | 'vertical') => void;
}
/**
 * Responsible for sorting products, changing layout mode, showing quantity of products and products per page on <AllProductsPage/>
 *@function GridControl
 *@param {string} header - Grid control header
 *@param {number} productAmount - amount of displayed products
 *@param {function} changeLayout - will change layout mode to 'grid' or 'vertical'
 *@returns {JSX.Element} - Rendered GridControl component
 */
const GridControl = ({
  header,
  productAmount,
  changeLayout,
}: Props): JSX.Element => {
  // sort type will be displayed to user, has no corresponding logic
  const [sortType, setSortType] = useState<string>('Alphabetically, A-Z');

  // Sort modal controls
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSortModal = () => setIsModalOpen((prev) => !prev);
  // TODO:PAGINATION on backend and frontend

  return (
    <Styled.Container>
      <PageHeader headerText={header} />
      <p>Showing {productAmount} products</p>
      {/* TODO:PAGINATION */}
      <p>Display 24 per page</p>

      <Styled.SortWrapper onClick={toggleSortModal} className="sort">
        Sort by: {sortType}
        <NavMiniModal
          isOpen={isModalOpen}
          modalWidth="180px"
          right="-4rem"
          top="3rem"
          modalContent={<SortingOptions setSortType={setSortType} />}
        />
      </Styled.SortWrapper>

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
