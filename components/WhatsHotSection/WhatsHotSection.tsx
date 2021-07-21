import React from 'react';
import { Product } from '../../types';
import Container from '../Container/Container';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import PageHeader from '../PageHeader/PageHeader';
import * as Styled from './styles';

export interface Props {
  products: Product[];
}
/**
 * Representational, statically pre-generated component
 *@function WhatsHot
 *@props will be received at build-time from DB
 *@param {object} products - list of Products
 *@returns {JSX.Element} - Rendered component list of <HorizontalCard/> with product details
 */
const WhatsHot = ({ products }: Props): JSX.Element => {
  return (
    <Styled.Wrapper>
      <Container>
        <PageHeader headerText={`What's hot`} />
        <Styled.GridContainer>
          {products.map((product) => (
            <HorizontalCard
              key={product._id}
              productID={product._id}
              brandName={product.brand}
              images={product.images}
              productModel={product.model}
              productPrice={String(product.price)}
            />
          ))}
        </Styled.GridContainer>
      </Container>
    </Styled.Wrapper>
  );
};

export default WhatsHot;
