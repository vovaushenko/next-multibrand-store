import React from 'react';
import styled from 'styled-components';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Product } from '../../types';
import ProductItem from '../ProductItem/ProductItem';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props): JSX.Element => {
  const { deleteProduct, openModal, loadProductDetails } = useActions();
  const { isDeleted, isLoading } = useTypedSelector((state) => state.admin);
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductItem
          {...product}
          key={product._id}
          deleteProduct={deleteProduct}
          isDeleted={isDeleted}
          isLoading={isLoading}
          openModal={openModal}
          loadProductDetails={loadProductDetails}
        />
      ))}
    </StyledProductList>
  );
};

const StyledProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export default ProductList;
