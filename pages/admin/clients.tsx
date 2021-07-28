import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import AdminAllClients from '../../components/AdminAllClients/AdminAllClients';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

export default function AdminAllClientsPage(): JSX.Element {
  return (
    <AdminLayout title="Our Clients">
      <AdminAllClients />
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
