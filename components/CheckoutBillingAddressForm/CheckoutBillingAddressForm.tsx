import React from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserShippingInfo } from '../../types';
import * as Styled from './CheckoutBillingAddressForm.styles';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormikTextField from '../FormikTextField/FormikTextField';
import Button from '../Button/Button';

/**
 *Renders form to collect user shipping information
 *@function CheckoutShippingInfo
 *@returns {JSX.Element} - Rendered CheckoutBillingAddressForm component
 */

const CheckoutBillingAddressForm = (): JSX.Element => {
  const { isLoading, isShippingInfoCollected } = useTypedSelector(
    (state) => state.checkout
  );
  const { collectCustomerShippingInfo } = useActions();

  return (
    <Styled.Container>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          city: '',
          country: '',
          state: '',
          zipCode: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          // connect all data into userShippingInformation
          const userShippingInformation: UserShippingInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            city: data.city,
            address: data.address,
            country: data.country,
            state: data.state,
            zipCode: data.zipCode,
            phone: data.phone,
          };

          // dispatch action to redux
          collectCustomerShippingInfo(userShippingInformation);

          // if everything is correct, proceed to shipping stage
          toast.success('🎉 Shipping information is saved 🎉');
        }}
      >
        <Form>
          <Styled.FormControl>
            {/* FIRST AND LAST NAME */}
            <FormikTextField
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <FormikTextField
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </Styled.FormControl>
          {/*EMAIL*/}
          <FormikTextField type="email" name="email" placeholder="Email" />
          {/* ADDRESS */}
          <FormikTextField type="text" name="address" placeholder="Address" />
          {/* CITY */}
          <FormikTextField type="text" name="city" placeholder="City" />
          {/* COUNTRY, STATE AND ZIP-CODE */}
          <Styled.FormControl>
            <FormikTextField type="text" name="country" placeholder="Country" />
            <FormikTextField type="text" name="state" placeholder="State" />
            <FormikTextField
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
            />
          </Styled.FormControl>
          {/* PHONE */}
          <FormikTextField type="tel" name="phone" placeholder="Phone" />

          <Button
            text={
              isShippingInfoCollected
                ? 'Billing Address Was Updated'
                : 'Update Billing Address'
            }
            isCompleted={isShippingInfoCollected}
            isLoading={isLoading}
            type="submit"
          />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Please add first name')
    .max(25, 'First name cannot exceed 25 symbols'),

  lastName: yup
    .string()
    .required('Please add last name')
    .max(25, 'Last name cannot exceed 25 symbols'),

  email: yup
    .string()
    .email('Email is incorrect')
    .required('Please add email')
    .max(35, 'Email cannot exceed 35 symbols'),

  address: yup
    .string()
    .required('Please add address')
    .max(50, 'Address cannot exceed 50 symbols'),

  city: yup
    .string()
    .required('Please add city')
    .max(25, 'City cannot exceed 25 symbols'),

  country: yup
    .string()
    .required('Please add country')
    .max(25, 'Country cannot exceed 25 symbols'),

  state: yup
    .string()
    .required('Please add state')
    .max(20, 'State cannot exceed 20 symbols'),

  zipCode: yup
    .string()
    .required('Please add zip code')
    .max(15, 'Zip code cannot exceed 15 symbols'),

  phone: yup
    .string()
    .required('Please add phone number')
    .max(25, 'Phone number cannot exceed 15 symbols'),
});

export default CheckoutBillingAddressForm;
