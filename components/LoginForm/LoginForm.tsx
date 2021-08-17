import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.LoginForm';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikTextField from '../FormikTextField/FormikTextField';

const validationSchema = yup.object({
  password: yup
    .string()
    .required('Please add password')
    .max(15, 'Password cannot exceed 25 symbols'),

  email: yup.string().email('Email is incorrect').required('Please add email'),
});

/**
 *Renders login form. Successfully logged-in users will be redirected to IndexPage or AdminPages depending on their auth-role
 *@function LoginForm
 *@returns {JSX.Element} - Rendered LoginForm component
 */
const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [session] = useSession();

  useEffect(() => {
    if (session?.user.role === 'admin') {
      router.push('/admin');
    }
    if (session?.user.role === 'user') {
      router.push('/');
    }
  }, [session, router]);

  return (
    <Styled.Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          setIsLoading(true);
          const { email, password } = data;
          const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
          });

          if (result && result.error) {
            toast.error(result.error);
          }

          setIsLoading(false);
        }}
      >
        <Form>
          <CardHeader headerText="Log In Your Account" />
          <FormikTextField placeholder="email" name="email" type="text" />
          <FormikTextField placeholder="password" name="password" type="text" />
          <Button text="Log In" type="submit" isLoading={isLoading} />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default LoginForm;
