import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import Layout from '../components/Layout/Layout';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = (): JSX.Element => {
  return (
    <Layout title="Login | Sneaker Maniacs">
      <LoginForm />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
