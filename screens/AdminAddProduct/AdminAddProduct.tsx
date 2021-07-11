import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button/Button';
import FormTextField from '../../components/FormTextField/FormTextField';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StyledWrapper } from './styles';

const AdminAddProduct = (): JSX.Element => {
  // TODO: decide whether to use Formik or native validation
  const [department, setDepartment] = useState<string>('');
  const [colors, setColors] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [styleCode, setStyleCode] = useState<string>('');
  const [productSize, setProductSize] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  //! global redux state
  const { isLoading, isUploaded, error } = useTypedSelector(
    (state) => state.admin
  );
  //! action creator import
  const { uploadNewProduct, clearStatusOfAdminOperations } = useActions();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearStatusOfAdminOperations();
    }
    if (isUploaded) {
      toast.success('🎉🎉🎉Successfully uploaded🎉🎉🎉');
      clearStatusOfAdminOperations();
    }
  }, [isUploaded, error, clearStatusOfAdminOperations]);

  const handleAddNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      brand,
      colors: colors.split(' '),
      department,
      description,
      images: [{ public_id: 'test', url: 'test' }],
      model,
      price: Number(price),
      size: Number(productSize),
      styleCode,
    };

    uploadNewProduct(newProduct);
  };

  // TODO:move to separate helper function
  const buttonText = (isLoading: boolean, isUploaded: boolean): string => {
    if (isLoading) return '🕛 Uploading Product...';
    if (isUploaded) return '🎉🎉🎉Successfully uploaded🎉🎉🎉';
    return 'Add new product';
  };

  return (
    <StyledWrapper>
      <PageHeader headerText="Add new product" />
      <form onSubmit={handleAddNewProduct}>
        <FormTextField
          name="department"
          placeholder="product department"
          type="text"
          value={department}
          setValue={setDepartment}
          required={true}
        />
        {/* TODO:array of stings */}
        <FormTextField
          name="colors"
          placeholder="product colors"
          type="text"
          value={colors}
          setValue={setColors}
          required={true}
        />
        <FormTextField
          name="brand"
          placeholder="product brand"
          type="text"
          value={brand}
          setValue={setBrand}
          required={true}
        />
        <FormTextField
          name="model"
          placeholder="product model"
          type="text"
          value={model}
          setValue={setModel}
          required={true}
        />
        {/* TODO:number */}
        <FormTextField
          name="price"
          placeholder="product price"
          type="number"
          value={price}
          setValue={setPrice}
          required={true}
        />

        <FormTextField
          name="styleCode"
          placeholder="product style-code"
          type="text"
          value={styleCode}
          setValue={setStyleCode}
          required={true}
        />
        {/* TODO:number */}
        <FormTextField
          name="size"
          placeholder="product size"
          type="text"
          value={productSize}
          setValue={setProductSize}
          required={true}
        />
        <FormTextField
          name="description"
          placeholder="product description"
          type="text"
          value={description}
          setValue={setDescription}
          required={true}
        />
        {/* TODO: images */}

        <Button
          type="submit"
          text={buttonText(isLoading, isUploaded)}
          isLoading={isLoading}
          isCompleted={isUploaded}
        />
      </form>
    </StyledWrapper>
  );
};

export default AdminAddProduct;
