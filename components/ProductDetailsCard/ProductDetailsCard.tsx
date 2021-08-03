import NextLink from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Department } from '../../types';
import { CartItem } from '../../types/cartReduxTypes';
import { getAverageRating } from '../../utils/helperFunctions';
import Button from '../Button/Button';
import FiveStars from '../FiveStars/FiveStars';
import HR from '../HR/HR';
import PageHeader from '../PageHeader/PageHeader';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as Styled from './styles.ProductDetailsCard';

export interface Props {
  productID: string;
  productImg: string;
  brand: string;
  colors: string[];
  department: Department;
  model: string;
  price: number;
  size: string[];
  styleCode: string;
}
/**
 *@function Product Details Card
 *@param {string} brand - product brand
 *@param {array} description - product colors
 *@param {string} department - product department
 *@param {number} price - product price
 *@param {string} size - product size
 *@param {string} styleCode - product styleCode
 *@returns {JSX.Element} - Rendered ProductDetailsCard
 */
const ProductDetailsCard = ({
  productID,
  productImg,
  brand,
  colors,
  department,
  model,
  price,
  size,
  styleCode,
}: Props): JSX.Element => {
  // By selecting some size, we will highlight it by adding outline
  // this selection is controlled through selectedSize/setSelectedSize
  const [selectedSize, setSelectedSize] = useState<number>(0);
  // Get Reviews from global state
  const { productReviews } = useTypedSelector((state) => state.reviews);

  const averageProductRating = getAverageRating(productReviews);

  const handleSelect = (id: number) => setSelectedSize(id);
  // TODO:FIX TESTS and remove addToCart to Wrapper
  const { addToCart } = useActions();

  const handleAddToCart = () => {
    const selectedProduct: CartItem = {
      productID,
      brand,
      model,
      price,
      productImg,
      size: size[selectedSize],
    };

    addToCart(selectedProduct);
    toast.success('Great choice 💯 Product was added to cart 💥');
  };

  return (
    <Styled.CardContainer>
      <PageHeader headerText={`${brand} ${model}`} />
      <Styled.StarsRating>
        <FiveStars rating={averageProductRating} />
        <Styled.NumberOfReviews>
          ({productReviews && productReviews.length} reviews)
        </Styled.NumberOfReviews>
      </Styled.StarsRating>
      <Styled.Price>${price}</Styled.Price>
      <Styled.List>
        <li>Style: {styleCode}</li>
        <li>Colors: {colors && colors.join('/')}</li>
      </Styled.List>

      <HR />

      <SectionHeader headerText={`${department}'s`} />
      <Styled.SizesList>
        {size &&
          size.map((s, id) => (
            <Styled.Size
              key={s}
              isSelected={id === selectedSize}
              onClick={() => handleSelect(id)}
            >
              {s}
            </Styled.Size>
          ))}
      </Styled.SizesList>

      <NextLink href="sizing-help" passHref={true}>
        <Styled.SizingHelp>sizing help</Styled.SizingHelp>
      </NextLink>

      <Button text="add to cart" onClick={handleAddToCart} />
    </Styled.CardContainer>
  );
};

export default ProductDetailsCard;
