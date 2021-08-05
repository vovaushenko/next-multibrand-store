import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import * as Styled from './styles.NavHeaderSearch';

/**
 * Renders Navbar Search Component
 *@function NavHeaderSearch
 *@returns {JSX.Element} - Rendered NavHeaderSearch
 */
const NavHeaderSearch = (): JSX.Element => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  // modal config
  const modalWidth = '100%';
  const modalTop = '2.5rem';
  const modalRight = '0rem';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [term, setTerm] = useState<string>('');
  const { loadAllProducts } = useActions();
  const { products } = useTypedSelector((state) => state.products);

  // this useEffect is responsible for loading products for further search and filtering, also for opening/closing modal. Function areSearchResultsOnScreen() open set modal to open if there are some found products
  useEffect(() => {
    if (!products.length) {
      loadAllProducts();
    }
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

  //TODO: Move filterProducts to utils
  /**
   *@function filteredProducts
   *@param {string} searchTerm - search input typed in search bar
   *@returns {Product[]} - Array of products, with name or model that include typed "searchTerm"
   */
  const filteredProducts = (searchTerm: string) => {
    searchTerm = searchTerm.toLowerCase();
    let allProducts = [...products];

    if (searchTerm !== undefined) {
      allProducts = allProducts.filter(
        (product) =>
          product.brand.toLowerCase().includes(searchTerm) ||
          product.model.toLowerCase().includes(searchTerm)
      );

      return allProducts.slice(0, 4);
    }

    return [];
  };

  const foundProducts = filteredProducts(term);

  const redirectToProductPage = (productID: string) =>
    router.push(`/products/${productID}`);

  const modalContent = () => (
    <Styled.ModalContent ref={modalRef}>
      {foundProducts.map((prod) => (
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
      ))}
    </Styled.ModalContent>
  );

  //TODO: Move areSearchResultsOnScreen to utils
  /**
   *@function areSearchResultsOnScreen
   *@returns {void} - setIsModalOpen open to true if there is some found products by searchTerm and search term is not empty(otherwise there will always be products). Otherwise setIsModalOpen to false
   */
  const areSearchResultsOnScreen = () => {
    if (foundProducts.length > 0 && term !== '') return setIsModalOpen(true);
    setIsModalOpen(false);
  };

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
      />
    </Styled.Container>
  );
};

export default NavHeaderSearch;
