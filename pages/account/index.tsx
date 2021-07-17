import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserAccount from '../../screens/UserAccount/UserAccount';

export default function UserAccountPage(): JSX.Element {
  const [session] = useSession();

  return (
    <Layout title={`Account | ${session?.user.name}`}>
      <UserAccount />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
