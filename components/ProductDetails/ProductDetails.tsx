import React from 'react';
import { Product } from '../../types';
import Container from '../Container/Container';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import ProductImageCard from '../ProductImageCard/ProductImageCard';
import ReviewCard from '../ReviewCard/ReviewCard';
import * as Styled from './styles';

interface Props {
  product: Product;
}
/**
 * purely representational component will map pre-fetched product JSON in ProductDetailsPage
 *@function ProductDetails
 *@param {object} product - JSON of type Product
 *@returns {JSX.Element} - Rendered ProductDetails component
 */
const ProductDetails = ({ product }: Props): JSX.Element => {
  const {
    brand,
    colors,
    model,
    description,
    department,
    size,
    price,
    styleCode,
    images,
  } = product;
  return (
    <Container>
      <Styled.Container>
        <Styled.LeftColumn>
          <ProductImageCard
            images={images}
            sneakerModel={`${brand} ${model}`}
          />
          <DescriptionCard description={description} />
          <ReviewCard review={'No reviews yet'} />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          <ProductDetailsCard
            brand={brand}
            colors={colors}
            department={department}
            size={size}
            model={model}
            price={price}
            styleCode={styleCode}
          />
        </Styled.RightColumn>
      </Styled.Container>
    </Container>
  );
};
export default ProductDetails;
