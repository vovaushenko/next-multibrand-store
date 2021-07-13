import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button/Button';
import FormFileField from '../../components/FormFileField/FormFileField';
import FormTextField from '../../components/FormTextField/FormTextField';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StyledWrapper } from './styles';

const AdminAddProduct = (): JSX.Element => {
  const router = useRouter();

  //*Product details from redux
  const { product } = useTypedSelector((state) => state.products);
  /**
   * All below useState params are from global state product
   * it will be available here since we dispatch getProductDetails action before opening this component
   */
  const [department, setDepartment] = useState<string>(product.department);
  const [colors, setColors] = useState<string>('');
  const [brand, setBrand] = useState<string>(product.brand);
  const [model, setModel] = useState<string>(product.model);
  const [price, setPrice] = useState<string>(String(product.price));
  const [styleCode, setStyleCode] = useState<string>(product.styleCode);
  const [productSize, setProductSize] = useState<string>(String(product.size));
  const [description, setDescription] = useState<string>(product.description);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [images, setImages] = useState<any[]>([]);
  //! global redux state
  const { isLoading, error, isUpdated } = useTypedSelector(
    (state) => state.admin
  );
  //! action creator import
  const { updateProduct, clearStatusOfAdminOperations } = useActions();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearStatusOfAdminOperations();
    }
    if (isUpdated) {
      toast.success('🎉 Successfully updated 🎉');
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isUpdated]);

  const handleProductUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      brand,
      colors: colors.split(' '),
      department,
      description,
      images,
      model,
      price,
      size: productSize,
      styleCode,
    };
    if (product._id !== undefined) {
      updateProduct(product._id, newProduct);
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages([]);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImages((p) => [...p, reader.result]);
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  // TODO:move to separate helper function
  const buttonText = (isLoading: boolean, isUploaded: boolean): string => {
    if (isLoading) return '🕛 Updating Product...';
    if (isUploaded) return '🎉🎉🎉Successfully updated🎉🎉🎉';
    return 'Update product details';
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleProductUpdate}>
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
        <FormFileField
          labelText="Upload Product Photos"
          name="product-photo"
          placeholder="Upload Product Photos"
          onChange={handleUploadImage}
          required={true}
          multiple={true}
        />

        <Button
          type="submit"
          text={buttonText(isLoading, isUpdated)}
          isLoading={isLoading}
          isCompleted={isUpdated}
        />
      </form>
    </StyledWrapper>
  );
};

export default AdminAddProduct;
