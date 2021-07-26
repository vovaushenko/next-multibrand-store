import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Dashboard from '../../components/Dashboard/Dashboard';

export default function AdminDashboard(): JSX.Element {
  return (
    <AdminLayout title="Statistics | Dashboard">
      <Dashboard />
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
