import React from 'react';
import { Product } from '../../types';
import Button from '../Button/Button';
import { StyledListItem } from './styles';

export type Props = Product & {
  isLoading: boolean;
  isDeleted: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProduct: any;
};
/**
 *Product list item component used to display, delete, update products in Admin dashboard
 *@function ProductItem
 *@param {object} props - React.props point to global type Project
 *@returns {JSX.Element} - Rendered component ProductItem
 */

const ProductItem = ({
  brand,
  model,
  styleCode,
  _id,
  deleteProduct,
  isLoading,
  isDeleted,
}: Props): JSX.Element => {
  const handleDeleteProduct = () => {
    if (confirm('Do you want to delete this product?')) {
      if (_id !== undefined) deleteProduct(_id);
    }
  };

  return (
    <StyledListItem>
      <article>
        <p className="brand-name">{brand}</p>
        <p className="brand-model">{model}</p>
        <p className="style-code">Style-Code : {styleCode}</p>
        <Button
          onClick={handleDeleteProduct}
          isLoading={isLoading}
          isCompleted={isDeleted}
        >
          {isDeleted ? 'Deleted' : 'Delete'}
        </Button>
        <Button>Update</Button>
      </article>
    </StyledListItem>
  );
};

export default ProductItem;
