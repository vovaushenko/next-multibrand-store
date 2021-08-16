import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import * as Styled from './styles.NavHeaderSearch';
import CardHeader from '../CardHeader/CardHeader';
import { getDropdownItems } from '../../utils/helperFunctions';

/**
 * Renders Navbar Search Component
 *@function NavHeaderSearch
 *@returns {JSX.Element} - Rendered NavHeaderSearch
 */
const NavHeaderSearch = (): JSX.Element => {
  const router = useRouter();
  // modal config
  const modalRef = useRef<HTMLDivElement>(null);
  const modalWidth = '100%';
  const modalTop = '2.5rem';
  const modalRight = '0rem';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [term, setTerm] = useState<string>('');
  const { loadAllProducts } = useActions();
  const { products } = useTypedSelector((state) => state.products);
  const dropdownItems = getDropdownItems(term, products);

  // this useEffect is responsible for loading products for further search and filtering, also for opening/closing modal. Function areSearchResultsOnScreen() open set modal to open if there are some found products
  useEffect(() => {
    if (!products.length) {
      loadAllProducts();
    }
    const areSearchResultsOnScreen = () => {
      if (term !== '') return setIsModalOpen(true);
      setIsModalOpen(false);
    };
    areSearchResultsOnScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  // this useEffect is responsible for closing results modal dropdown if user clicked outside of modal
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isModalOpen]);

  const redirectToProductPage = (productID: string) =>
    router.push(`/products/${productID}`);

  const modalContent = () => (
    <Styled.ModalContent ref={modalRef}>
      {dropdownItems.length > 0 ? (
        dropdownItems.map((prod) => (
          <Styled.Product
            key={prod._id}
            onClick={() => redirectToProductPage(prod._id)}
          >
            <figure>
              <Image
                src={prod.images[0].url}
                alt={`${prod.brand} ${prod.model}`}
                height={50}
                width={50}
                objectFit="contain"
              />
            </figure>

            <div>
              <p>
                {prod.brand} {prod.model}
              </p>
              <p>${prod.price}</p>
            </div>
          </Styled.Product>
        ))
      ) : (
        <>
          <CardHeader headerText={'No results match 💥'} />
        </>
      )}
    </Styled.ModalContent>
  );

  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.Input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Styled.SubmitButton className="search-submit-btn" type="submit">
          <BiSearch className="search-icon" />
        </Styled.SubmitButton>
      </Styled.Form>
      <NavMiniModal
        isOpen={isModalOpen}
        modalContent={modalContent()}
        modalWidth={modalWidth}
        top={modalTop}
        right={modalRight}
        animationVariant={'slideInTop'}
      />
    </Styled.Container>
  );
};
export default NavHeaderSearch;
